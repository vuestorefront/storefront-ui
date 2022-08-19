<template>
    <div class="e-page">
        <div class="e-page-component">
            <VsfButton :size="sizeModel" :variant="variantModel" :disabled="disabledModel">Hello</VsfButton>
        </div>
        <div class="e-page-controls">
            <table>
                <tr>
                    <td>Size</td>
                    <td>
                        <div v-for="size in VsfButtonSizes" :key="size">
                            <label>
                                {{ size }}
                                <input v-model="sizeModel" type="radio" name="size" :value="size">
                            </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Variant</td>
                    <td>
                        <div v-for="variant in VsfButtonVariants" :key="variant">
                            <label>
                                {{ variant }}
                                <input v-model="variantModel" type="radio" name="variant" :value="variant">
                            </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Disabled</td>
                    <td>
                        <label>
                            {{ disabled }}
                            <input v-model="disabledModel" type="checkbox" name="disabled" :value="disabled">
                        </label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfButton, { VsfButtonVariants, VsfButtonSizes } from '../../output/blocks/VsfButton/VsfButton.vue'

export default defineComponent({
    name: 'VsfButtonExample',
    components: {
        VsfButton
    },
    setup() {
        return {
            VsfButtonVariants,
            VsfButtonSizes,
            propValue: ref(0),
            variantModel: ref(),
            disabledModel: ref(),
            sizeModel: ref(''),
        };
    },
});
</script>
