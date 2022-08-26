import { useStore } from '@builder.io/mitosis';

export interface VsfOverlayProps {
  absolute?: boolean;
  onClick?: (e: Event) => void;
}

const DEFAULT_VALUES = {};

export default function VsfOverlay(props: VsfOverlayProps) {
  const state = useStore({
    get positionClass() {
      return props.absolute ? 'absolute' : 'fixed';
    },
  });

  return (
    <>
      <div
        onClick={(e) => props.onClick(e)}
        class={`w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-500 opacity-50 ${state.positionClass}`}
      />
    </>
  );
}
