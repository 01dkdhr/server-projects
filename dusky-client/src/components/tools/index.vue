<template>
    <div id="tools" class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="my-4">工具箱合集</h4>
            </div>
            <div v-for="(tool, index) in toolList" 
                :key="index"
                class="col-6 col-sm-4 col-md-3 col-lg-2 tool-container"> 

                <div class="tool-item">
                    {{tool}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toolList: ['tool 1', 'too1 2', 'too1 3', 'too1 4', 'too1 5', 'too1 6', 'too1 7', 'too1 8', 'too1 9', 'too1 10']
        };
    }
}
</script>

<style lang="scss" scoped>
.my-4 {
    color: cadetblue;
}
.tool-container {
    padding: 5px;

    .tool-item {
        border: 1px dotted blue;
        cursor: pointer;
        color: cadetblue;

        &:hover {
            background-color: #f8f8f8;
        }
    }
}
</style>