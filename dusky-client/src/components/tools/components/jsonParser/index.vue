<template>
    <div id="tool-json-parser">
        <textarea class="w-100 input-area" v-model.trim="jsonStr">
        </textarea>

        <div class="w-100 result">
            {{jsonStr}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jsonStr: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .input-area {
        min-height: 200px;
    }
    .result {
        margin-top: 10px;
        height: 500px;
        border: 1px solid rgb(169, 169, 169);
    }
</style>

