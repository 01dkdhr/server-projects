<template>
    <div id="tool-json-parser">
        <textarea class="w-100 input-area" v-model.trim="jsonStr">
        </textarea>

        <div class="col-md-5 mb-3">
            <div class="input-group">
                <label for="select-indent" class="col-sm-2 control-label no-select">缩进量</label>
                <div id="select-indent" class="dropdown">
                    <button id="dropdown-indent" class="dropdown-toggle" data-toggle="dropdown">2</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">2</a>
                        <a class="dropdown-item" href="#">4</a>
                    </div>
                </div>
            </div>
        </div>

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

