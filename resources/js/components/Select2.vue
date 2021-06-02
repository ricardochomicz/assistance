<template>
    <div>
        <select class="form-control">
            <slot></slot>
        </select>
    </div>
</template>

<script>
import Select2 from "select2";
export default {
    props: ["options", "value", "name"],

    mounted() {
        const vm = this;
        $(this.$el)
            .select2({
                data: this.options
            })
            .val(this.value)
            .trigger("change")
            .on("change", function() {
                vm.$emit("input", this.value);
            });
    },
    watch: {
        value: function(param) {
            $(this.$el)
                .val(param)
                .trigger("change");
        },
        options: function(param) {
            $(this.$el).select2({
                data: param
            });
        },
        destroyed: function() {
            $(this.$el)
                .off()
                .select2("destroy");
        }
    }
};
</script>