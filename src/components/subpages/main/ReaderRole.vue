<template>
    <el-form :inline="true">
        <!-- 操作 -->
        <el-form-item label="操作">
            <el-button @click="handleInsert()" type="success">添加</el-button>
        </el-form-item>
    </el-form>
    <el-divider />
    <el-table :data="readerRoleList" :border="true" :stripe="true">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="角色" />
        <el-table-column prop="number" label="可借数量  " />
        <el-table-column prop="duration" label="可借时长" />
        <el-table-column label="操作">
            <template #default="scope">
                <div style="display: inline">
                    <el-button
                        @click="handleModify(scope.$index)"
                        type="info"
                        size="small"
                        text
                        >修改</el-button
                    >
                    <el-button
                        @click="handleDelete(scope.$index)"
                        type="danger"
                        size="small"
                        text
                        >删除</el-button
                    >
                </div>
            </template>
        </el-table-column>
    </el-table>

    <ReaderRoleDialog
        :info="selectReaderRole"
        :kind="dialogKind"
        :closed="update"
        v-model:visible="showDialog"
    />
</template>

<script>
import { getReaderRole, deleteReaderRole } from "../../../api/readerRole";
import ReaderRoleDialog from "../../dialog/ReaderRole.vue";

export default {
    components: {
        ReaderRoleDialog,
    },
    data() {
        return {
            flag: true,
            readerRoleList: [],
            selectReaderRole: undefined,

            showDialog: false,
            dialogKind: undefined,
        };
    },
    async mounted() {
        this.update();
    },
    methods: {
        handleInsert() {
            this.selectReaderRole = undefined;
            this.dialogKind = 0;
            this.showDialog = true;
        },
        handleDelete(row) {
            deleteReaderRole(this.readerRoleList[row].id);
            this.readerRoleList.splice(row, 1);
        },
        handleModify(row) {
            // console.log(row);
            this.selectReaderRole = this.readerRoleList[row];
            this.dialogKind = 1;
            this.showDialog = true;
        },
        async update() {
            let result = await getReaderRole();
            if (result.code === 0) {
                this.readerRoleList = result.data;
            }
        },
    },
};
</script>
