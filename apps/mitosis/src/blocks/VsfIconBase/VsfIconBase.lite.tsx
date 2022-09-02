import { useStore } from '@builder.io/mitosis'

export const VsfIconSize = Object.freeze({
    'xs': 'xs',
    'sm': 'sm',
    'base': 'base',
    'lg': 'lg',
    'xl': 'xl',
    '2xl': '2xl',
    '3xl': '3xl'
});
type VsfIconSizeKeys = keyof typeof VsfIconSize;

// TODO: write separate overwrite components when possible (bug react component create es6 bundle with import, not copying file)
// TODO: think later about if maybe better would be to require user to strip svg element and pass only paths
export interface VsfIconBaseProps {
    content: React.ReactElement[] | React.ReactElement | string;
    size?: VsfIconSizeKeys,
    viewBox: string;
    className?: string;
    ariaLabel?: string;
}
const DEFAULT_VALUES = {
    content: '',
    size: VsfIconSize.base,
};
export default function VsfIconBase(props: VsfIconBaseProps) {
    const state = useStore({
        get useSize() {
            return props.size || DEFAULT_VALUES.size;
        },
        get useContentVue() {
            /* IF-vue */
            if (props.content && typeof props.content === 'string') {
                if (props.content.substring(0, 4) === '<svg') {
                    return props.content.substring(
                        props.content.indexOf('>') + 1,
                        props.content.lastIndexOf('<')
                    );
                } else {
                    return props.content;
                }
            } else {
                return DEFAULT_VALUES.content
            }
            /* ENDIF-vue */
        },
        get useContentReact() {
            /* IF-react */
            const reactElement = props.content as unknown as React.ReactElement[] | React.ReactElement;
            if (
                (reactElement as React.ReactElement[]).length &&
                (reactElement as React.ReactElement[])[0].type === 'svg'
            ) {
                return (reactElement as React.ReactElement[])[0].props.children;
            } else if (!Array.isArray(reactElement)) {
                return reactElement.props.children;
            } else {
                return DEFAULT_VALUES.content;
            }
            /* ENDIF-react */
        },
        get viewBoxFromSvg() {
            /* IF-vue */
            return /viewBox="([^"]+)"/.exec((props.content as string))?.[1]
            /* ENDIF-vue */
            /* IF-react */
            const reactElement = props.content as unknown as React.ReactElement[] | React.ReactElement;
            return (reactElement as React.ReactElement[])?.[0]?.type === 'svg'
                ? (reactElement as React.ReactElement[])?.[0]?.props?.viewbox
                : void 0
            /* ENDIF-react */
        }
    });

    return (
        <svg
            role="img"
            viewBox={state.viewBoxFromSvg || props.viewBox}
            aria-label={props.ariaLabel}
            xmlns="http://www.w3.org/2000/svg"
            class={`vsf-icon vsf-icon-${state.useSize} ${props.className || ''}`}
            v-html="useContentVue"
        >
            /* IF-react */{state.useContentReact}/* ENDIF-react */
        </svg>
    )
}
