import { useStore, Show } from '@builder.io/mitosis';

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
    slotBefore: any,
    slotAfter: any,
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
            switch (state.useVariantProp) {
                case VsfTagVariants.base:
                    return 'bg-gray-100 text-gray-600'
                case VsfTagVariants.info:
                    return 'bg-secondary-100 text-secondary-800'
                case VsfTagVariants.positive:
                    return 'bg-primary-100 text-primary-600'
                case VsfTagVariants.warning:
                    return 'bg-warning-100 text-warning-700'
                case VsfTagVariants.error:
                    return 'bg-negative-100 text-negative-700'
                case VsfTagVariants.disabled:
                    return 'bg-gray-100 text-gray-500 opacity-50'
                default:
                    return 'bg-gray-100 text-gray-600'
            }
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
            switch (state.useVariantProp) {
            case VsfTagVariants.base:
                return 'border-l-gray-600'
            case VsfTagVariants.info:
                return 'border-l-secondary-800'
            case VsfTagVariants.positive:
                return 'border-l-primary-600'
            case VsfTagVariants.warning:
                return 'border-l-warning-600'
            case VsfTagVariants.error:
                return 'border-l-negative-600'
            case VsfTagVariants.disabled:
                return 'border-gray-500 opacity-50'
            default:
                return 'border-l-gray-600'
            }
        },
        get badgeColors() {
            switch (state.useVariantProp) {
            case VsfTagVariants.base:
                return 'bg-gray-600'
            case VsfTagVariants.info:
                return 'bg-secondary-800'
            case VsfTagVariants.positive:
                return 'bg-primary-600'
            case VsfTagVariants.warning:
                return 'bg-warning-600'
            case VsfTagVariants.error:
                return 'bg-negative-600'
            case VsfTagVariants.disabled:
                return 'bg-gray-500 opacity-50'
            default:
                return 'bg-gray-600'
            }
        }
    });
    return (
        <>
            <Show when={!state.useBadgeProp} else={
                <div className='inline-flex items-center'>
                    <div
                        className={`${state.useSizeProp === 'sm' ? 'h-6 text-xs' : 'h-8 text-sm'} flex direction-row`}
                    >
                        <div
                            className={`${state.badgeColors} inline-flex items-center font-medium text-white fill-white font-body direction-row`}
                        >
                            <Show when={props.slotBefore}>
                                <span
                                    className={`${state.useSizeProp === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} flex direction-row ml-2`}
                                >
                                    {props.slotBefore}
                                </span>
                            </Show>
                            <span className="mx-2"> {props.children} </span>
                        </div>
                        <div
                            className={`border-t-0 border-b-transparent border-t-transparent bg-transparent ${state.badgeBorderColors} ${state.badgeSizes}`}
                        ></div>
                    </div>
                </div>
            }>
                <div
                    className={`${state.tagVariants} ${state.tagSizes} inline-flex font-normal rounded-md font-body items-center`}
                >
                    <div className={props.slotBefore ? 'mr-1' : ''}>{props.slotBefore}</div>
                    {props.children}
                    <div className={props.slotAfter ? 'ml-1' : ''}>{props.slotAfter}</div>
                </div>
            </Show>
        </>
  );
}
