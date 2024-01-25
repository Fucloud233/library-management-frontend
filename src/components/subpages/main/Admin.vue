<template>
    <el-form :inline="true" :model="searchInfo">
        <el-form-item>
            <el-select
                v-model="searchInfo.kind"
                style="width: 120px"
                placeholder="查询类型"
            >
                <el-option
                    v-for="kind in searchKinds"
                    :key="kind.value"
                    :label="kind.label"
                    :value="kind.value"
                ></el-option>
            </el-select>
            <el-input
                style="width: 200px"
                v-model="searchInfo.content"
                placeholder="请输入"
                clearable
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item label="操作">
            <el-button type="success">添加</el-button>
        </el-form-item>
    </el-form>
    <el-divider />
    <el-table :data="adminList">
        <el-table-column prop="id" label="工号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="privilege" label="级别" />
        <el-table-column label="操作">
            <template #default>
                <div style="display: inline">
                    <el-button type="info" size="small" text
                        >修改密码</el-button
                    >
                    <el-button type="danger" size="small" text>删除</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            searchInfo: {},
            searchKinds: [
                {
                    value: 1,
                    label: "编号",
                },
                {
                    value: 2,
                    label: "姓名",
                },
                {
                    value: 3,
                    label: "电话",
                },
            ],
            adminList: [
                {
                    id: 1,
                    name: "张三",
                    phone: "12345678910",
                    privilege: 1,
                },
                {
                    id: 2,
                    name: "李四",
                    phone: "12345678911",
                    privilege: 2,
                },
                {
                    id: 3,
                    name: "王二麻子",
                    phone: "12345678912",
                    privilege: 3,
                },
            ],
        };
    },
};
</script>

<style scoped>
/* .el-form {
    display: flex;
    flex-direction: row;
} */
</style>
