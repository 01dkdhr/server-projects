<template>
    <div id="tools" class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="my-4">工具箱合集</h4>
            </div>
            <div v-for="(tool, index) in toolList" 
                :key="index"
                class="col-6 col-sm-4 col-md-3 col-lg-2 tool-list"
                @click="openTool(tool)"> 

                <div class="tool-item">
                    {{tool.showName}}
                </div>
            </div>
        </div>

        <div class="tool-container" v-if="currentTool !== null">
            <div class="row">
                <h5 class="my-4">{{currentTool.showName}}</h5>
            </div>
            
            <jsonParser class="col-12 clear-pd" v-show="currentTool.token == 'jsonParser'"></jsonParser>
        </div>
    </div>
</template>

<script>
import jsonParser from '@components/tools/components/jsonParser/index.vue';

export default {
    components: {
        jsonParser
    },
    data() {
        return {
            toolList: [
                { token: 'jsonParser', showName: 'json解析' }
            ],
            openedToolList: [],
            currentTool: null
        };
    },
    methods: {
        openTool(tool) {
            if (this.currentTool && this.currentTool.token == tool.token) {
                return;
            }

            if (this.openedToolList.indexOf(tool) < 0) {
                this.openedToolList.push(tool);    
            }
            this.currentTool = tool;
        }    
    }
}
</script>

<style lang="scss" scoped>
.my-4 {
    color: cadetblue;
    cursor: default;
    user-select: none;
}
.tool-list {
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

.tool-container {
    margin-top: 30px;
    border-top: 1px solid rgb(188, 222, 238);
}
</style>