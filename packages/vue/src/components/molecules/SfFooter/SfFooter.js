import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";
import SfFooterColumnElement from "./_internal/SfFooterColumnElement.vue";

Vue.component("SfFooterColumn", SfFooterColumn);
Vue.component("SfFooterColumnElement", SfFooterColumnElement);

export default {
    props: {
        selected: {
            type: [String, Array],
            default: () => []
        },
        multiple: {
            type: Boolean,
            default: true
        }
    },
    model: {
        event: "update:selected",
        prop: "selected"
    },
    methods: {
        getSelected: function() {
            return this.selected;
        },
        updateSelected: function(data) {
            this.$emit("update:selected", data);
        },
        isMultiple: function() {
            return this.multiple;
        }
    },
    provide() {
        return {
            getSelected: this.getSelected,
            updateSelected: this.updateSelected,
            isMultiple: this.isMultiple
        };
    }
};
