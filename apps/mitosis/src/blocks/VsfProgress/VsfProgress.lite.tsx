import { Show, useStore } from '@builder.io/mitosis'
import { validator } from '../../functions/propUtils';

export const VsfProgressVariants = Object.freeze({
    'sm': 'sm',
    'base': 'base',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl',
    '3xl': '3xl'
});
type VsfProgressVariantsKeys = keyof typeof VsfProgressVariants;

export const VsfProgressTypes = Object.freeze({
    'circle': 'circle',
    'linear': 'linear'
});
type VsfProgressTypesKeys = keyof typeof VsfProgressTypes;

const svgSizes = {
    sm: {
        icon: 20,
        r: 9.165,
        dash: 57.556
    },
    base: {
        icon: 24,
        r: 11,
        dash: 69.08
    },
    lg: {
        icon: 40,
        r: 18.33,
        dash: 115.112
    },
    xl: {
        icon: 56,
        r: 25.66,
        dash: 161.144
    },
    '2xl': {
        icon: 96,
        r: 44,
        dash: 276.32
    },
    '3xl': {
        icon: 192,
        r: 88,
        dash: 552.64
    },
}

export interface VsfProgressProps {
    value?: number,
    label?: string,
    variant?: VsfProgressVariantsKeys,
    type?: VsfProgressTypesKeys,
}
const DEFAULT_VALUES = {
    value: 0,
    label: 'Loading',
    variant: VsfProgressVariants.base,
    type: VsfProgressTypes.circle
};
export default function VsfProgress(props: VsfProgressProps) {
    const state = useStore({
        get defaults(): Required<VsfProgressProps> {
            return DEFAULT_VALUES as unknown as Required<VsfProgressProps>;
        },
        get useVariant(): VsfProgressVariantsKeys {
            return validator(
                Object.keys(VsfProgressVariants),
                props.variant,
                state.defaults.variant);
        },
        get useType() {
            return validator(
                Object.keys(VsfProgressTypes),
                props.type,
                state.defaults.type);
        },
        get useValue() {
            return props.value || state.defaults.value;
        },
        get useLabel() {
            return props.label || state.defaults.label;
        },
        get showText() {
            return state.useVariant !== VsfProgressVariants.sm && state.useVariant !== VsfProgressVariants.base
        },
        get strokeWidth() {
            switch (state.useVariant) {
                case VsfProgressVariants.xl:
                    return 3;
                case VsfProgressVariants['2xl']:
                    return 4;
                case VsfProgressVariants['3xl']:
                    return 8;
                default:
                    return 2;
            }
        }
    });

    return (
        <>
            <Show
                when={state.useType === VsfProgressTypes.circle}
                else={
                    <label class="flex">
                        <progress
                            id="progressbar"
                            value={state.useValue}
                            max="100"
                            class="progress-linear"
                        />
                        <span class="text-xs ml-1 font-medium font-body">{state.useValue}%</span>
                    </label>
                }>
                <div
                    role="progressbar"
                    aria-valuenow={state.useValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={state.useLabel}
                >
                    <svg
                        role="img"
                        width={svgSizes[state.useVariant].icon}
                        height={svgSizes[state.useVariant].icon}
                        stroke-width={state.strokeWidth}
                        class={state.showText ? '' : '-rotate-90'}
                        viewPort={`0 0 ${svgSizes[state.useVariant].icon} ${svgSizes[state.useVariant].icon}`}
                    >
                        <circle
                            r={svgSizes[state.useVariant].r}
                            cx={svgSizes[state.useVariant].icon / 2}
                            cy={svgSizes[state.useVariant].icon / 2}
                            stroke="#e6e6e6"
                            fill="none"
                            stroke-dasharray={`${svgSizes[state.useVariant].dash} ${svgSizes[state.useVariant].dash}`}
                            class={state.showText ? 'origin-center rotate-[-90deg]' : ''}
                        />
                        <circle
                            r={svgSizes[state.useVariant].r}
                            cx={svgSizes[state.useVariant].icon / 2}
                            cy={svgSizes[state.useVariant].icon / 2}
                            stroke="#16A34A"
                            fill="none"
                            stroke-dasharray={`${svgSizes[state.useVariant].dash * ((props.value || DEFAULT_VALUES.value) / 100)}, ${svgSizes[state.useVariant].dash}`}
                            class={`transition-all ease-in-out duration-[600ms] ${state.showText ? 'origin-center rotate-[-90deg]' : ''}`}
                        />
                        <Show when={state.showText}>
                            <text
                                text-anchor="middle"
                                alignment-baseline="central"
                                class={`font-medium stroke-0 fill-gray-900 font-body stroke-black
                ${state.useVariant === VsfProgressVariants.lg ||
                                        state.useVariant === VsfProgressVariants.xl
                                        ? 'text-xs ' : ''}
                ${state.useVariant === VsfProgressVariants['3xl'] ? 'text-2xl' : ''}
              `}
                                x="50%"
                                y="50%"
                            >{state.useValue}%</text>
                        </Show>
                    </svg>
                </div>
            </Show>
        </>
    )
}
