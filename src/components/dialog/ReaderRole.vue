<template>
    <el-dialog :title="title" v-model="isVisible" @closed="closed">
        <el-form :model="readerRoleInfo" label-width="80px">
            <el-form-item label="编号" v-if="kind === 1">
                <el-input
                    v-model="readerRoleInfo.id"
                    :disabled="true"
                ></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-input
                    v-model="readerRoleInfo.name"
                    :disabled="!isEditing"
                ></el-input>
            </el-form-item>
            <el-form-item label="可借数量">
                <el-input
                    v-model="readerRoleInfo.number"
                    :disabled="!isEditing"
                ></el-input>
            </el-form-item>
            <el-form-item label="可借时长">
                <el-input
                    v-model="readerRoleInfo.duration"
                    :disabled="!isEditing"
                ></el-input>
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button
                @click="handleModify()"
                type="primary"
                v-if="kind === 1 && !isEditing"
                >编辑</el-button
            >
            <el-button
                @click="handleSave()"
                type="primary"
                v-if="kind === 0 || isEditing"
                >保存</el-button
            >
            <el-button @click="handleCancel()">取消</el-button>
        </template>
    </el-dialog>
</template>

<script>
import * as api from "../../api/readerRole";

export default {
    name: "ReaderRoleDialog",
    props: {
        title: {
            type: String,
            default: "读者角色",
        },
        // 0 - 添加 1 - 修改
        kind: {
            type: Number,
            default: 1,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        closed: { type: Function },
        // 此时前端已经存在一份显示信息
        // 我们只需要将他传入进来即可，不需要额外向后端请求资源
        info: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            readerRoleInfo: {},
            isEditing: false,

            isVisible: this.visible,
        };
    },
    watch: {
        // 通过监听切换双向绑定
        isVisible() {
            this.$emit("update:visible", this.isVisible);
        },
    },
    async mounted() {
        if (this.kind === 0) {
            this.isEditing = true;
        } else if (this.kind === 1) {
            this.readerRoleInfo = this.info;
        }
    },
    // 当组件更新时会调用次数的函数
    updated() {
        this.isEditing = this.kind === 0;
        this.readerRoleInfo = this.info;
        this.isVisible = this.visible;
    },
    methods: {
        handleModify() {
            this.isEditing = true;
        },
        handleCancel() {
            this.isVisible = false;
            this.isEditing = false;
        },
        async handleSave() {
            switch (this.kind) {
                case 0:
                    // 添加新角色
                    var result = await api.insertReaderRole(
                        this.readerRoleInfo
                    );

                    this.readerRoleInfo = {};
                    break;
                case 1:
                    // 修改角色
                    var result = await api.updateReaderRole(
                        this.readerRoleInfo
                    );
                    break;
            }

            this.isEditing = false;
            this.isVisible = false;
            if (result.code === 0) {
                console.log("ok");
            }
        },
    },
};
</script>
