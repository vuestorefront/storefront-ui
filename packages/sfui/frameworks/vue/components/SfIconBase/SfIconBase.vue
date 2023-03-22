<script lang="ts">
import { type PropType, h, defineComponent, computed, toRefs } from 'vue';
import { SfIconSize } from '@storefront-ui/vue';

export default defineComponent({
  name: 'SfIconBase',
  props: {
    content: {
      type: String,
      default: undefined,
    },
    size: {
      type: String as PropType<`${SfIconSize}`>,
      default: SfIconSize.base,
    },
  },
  setup(props, ctx) {
    const { size, content } = toRefs(props);
    const slotDefaultContent = computed(() => ctx.slots.default?.());

    const sizeClasses = computed(() => {
      switch (size.value) {
        case SfIconSize.xs:
          return 'w-4 h-4';
        case SfIconSize.sm:
          return 'w-5 h-5';
        case SfIconSize.lg:
          return 'w-8 h-8';
        case SfIconSize.xl:
          return 'w-10 h-10';
        case SfIconSize['2xl']:
          return 'w-14 h-14';
        case SfIconSize['3xl']:
          return 'w-24 h-24';
        case SfIconSize['4xl']:
          return 'w-48 h-48';
        default:
          return 'w-6 h-6';
      }
    });

    const svgAttrs = computed(() => {
      const attrs: Record<string, string> = {
        xmlns: 'http://www.w3.org/2000/svg',
        class: `inline-block fill-current ${sizeClasses.value}`,
      };
      if (!slotDefaultContent.value && content.value) attrs.innerHTML = content.value;
      return attrs;
    });

    return () => h('svg', svgAttrs.value, slotDefaultContent.value);
  },
});
</script>
