import { useStore, Show } from '@builder.io/mitosis';
import { classStringFromArray } from '../../functions/domUtils';

export const VsfTagVariants = Object.freeze({
    base: 'base',
    info: 'info',
    positive: 'positive',
    warning: 'warning',
    error: 'error',
    disabled: 'disabled'
})

type VsfTagVariantsKeys = keyof typeof VsfTagVariants;

export const VsfTagSizes = Object.freeze({
    sm: 'sm',
    base: 'base',
})

type VsfTagSizesKeys = keyof typeof VsfTagSizes;

export interface VsfTagProps {
    variant: VsfTagVariantsKeys,
    size: VsfTagSizesKeys,
    slotPrefix?: any,
    slotSuffix?: any,
    children: any,
    badge: Boolean
}

const DEFAULT_VALUES = {
    variant: VsfTagVariants.base,
    size: VsfTagSizes.base,
    badge: false
  };

export default function VsfTag(props: VsfTagProps) {
    const state = useStore({
        get useSizeProp(){
            return props.size || DEFAULT_VALUES.size
        },
        get useVariantProp(){
            return props.variant || DEFAULT_VALUES.variant
        },
        get useBadgeProp(){
            return props.badge || DEFAULT_VALUES.badge
        },
        get tagVariants() {
            return classStringFromArray([
                'inline-flex font-normal rounded-md font-body items-center',
                state.useVariantProp === VsfTagVariants.base ? 'bg-gray-100 text-gray-600' : '',
                state.useVariantProp === VsfTagVariants.info ? 'bg-secondary-100 text-secondary-800' : '',
                state.useVariantProp === VsfTagVariants.positive ? 'bg-primary-100 text-primary-600' : '',
                state.useVariantProp === VsfTagVariants.warning ? 'bg-warning-100 text-warning-700' : '',
                state.useVariantProp === VsfTagVariants.error ? 'bg-negative-100 text-negative-700' : '',
                state.useVariantProp === VsfTagVariants.disabled ? 'bg-gray-100 text-gray-500 opacity-50' : '',
            ]);
        },
        get tagSizes() {
            switch (state.useSizeProp) {
                case VsfTagSizes.sm:
                    return 'px-2 py-1 text-xs'
                default:
                    return 'px-3 py-1 text-sm'
            }
        },
        get badgeSizes() {
            return state.useSizeProp === 'sm' ? 'border-b-[24px] border-l-[12px]' : 'border-b-[32px] border-l-[16px]'
        },
        get badgeBorderColors() {
            return classStringFromArray([
                'border-t-0 border-b-transparent border-t-transparent bg-transparent',
                state.useVariantProp === VsfTagVariants.base ? 'border-l-gray-600' : '',
                state.useVariantProp === VsfTagVariants.info ? 'border-l-secondary-800' : '',
                state.useVariantProp === VsfTagVariants.positive ? 'border-l-primary-600' : '',
                state.useVariantProp === VsfTagVariants.warning ? 'border-l-warning-600' : '',
                state.useVariantProp === VsfTagVariants.error ? 'border-l-negative-600' : '',
                state.useVariantProp === VsfTagVariants.disabled ? 'border-gray-500 opacity-50' : '',
            ]);
        },
        get badgeColors() {
            return classStringFromArray([
                'inline-flex items-center font-medium text-white fill-white font-body direction-row',
                state.useVariantProp === VsfTagVariants.base ? 'bg-gray-600' : '',
                state.useVariantProp === VsfTagVariants.info ? 'bg-secondary-800' : '',
                state.useVariantProp === VsfTagVariants.positive ? 'bg-primary-600' : '',
                state.useVariantProp === VsfTagVariants.warning ? 'bg-warning-600' : '',
                state.useVariantProp === VsfTagVariants.error ? 'bg-negative-600' : '',
                state.useVariantProp === VsfTagVariants.disabled ? 'bg-gray-500 opacity-50' : '',
            ]);
        },
    });
    return (
        <>
            <Show when={!state.useBadgeProp} else={
                <div className='inline-flex items-center'>
                    <div
                        className={`${state.useSizeProp === 'sm' ? 'h-6 text-xs' : 'h-8 text-sm'} flex direction-row`}
                    >
                        <div
                            className={`${state.badgeColors}`}
                        >
                            <Show when={props.slotPrefix}>
                                <span
                                    className={`${state.useSizeProp === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} flex direction-row ml-2`}
                                >
                                    {props.slotPrefix}
                                </span>
                            </Show>
                            <span className="mx-2"> {props.children} </span>
                        </div>
                        <div
                            className={`${state.badgeBorderColors} ${state.badgeSizes}`}
                        ></div>
                    </div>
                </div>
            }>
                <div
                    className={`${state.tagVariants} ${state.tagSizes}`}
                >
                    <Show when={props.slotPrefix}>
                        <div className={`${state.useSizeProp === VsfTagSizes.sm ? 'w-4 h-4' : 'w-5 h-5'} mr-1`}>
                            <>{props.slotPrefix}</>
                        </div>
                    </Show>
                        {props.children}
                    <Show when={props.slotSuffix}>
                        <div className={`${state.useSizeProp === VsfTagSizes.sm ? 'w-4 h-4' : 'w-5 h-5'} ml-1`}>
                            <>{props.slotSuffix}</>
                        </div>
                    </Show>
                </div>
            </Show>
        </>
  );
}
