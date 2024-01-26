<template>
    <el-form
        :inline="true"
        :model="searchInfo"
        label-width="80px"
        label-position="left"
    >
        <!-- 操作按钮 -->
        <el-form-item label="操作">
            <el-button type="success">添加</el-button>
            <el-button type="success">批量添加</el-button>
        </el-form-item>
        <br />

        <!-- 查询字段 -->
        <el-form-item label="查询类型">
            <el-select
                v-model="searchInfo.kind"
                style="width: 100px"
                :default-first-option="true"
                @change="this.searchInfo.content = undefined"
            >
                <el-option
                    v-for="kind in searchKinds"
                    :key="kind.value"
                    :label="kind.label"
                    :value="kind.value"
                ></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-input
                style="width: 200px"
                v-model="searchInfo.content"
                placeholder="请输入"
                clearable
            ></el-input>
        </el-form-item>

        <!-- 根据角色筛选 -->
        <el-form-item label="角色">
            <el-select v-model="searchInfo.role" style="width: 100px">
                <el-option
                    v-for="role in searchOptions"
                    :key="role.id"
                    :label="role.name"
                    :value="role.id"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button @click="handleQuery()" type="primary">查询</el-button>
        </el-form-item>
        <br />
    </el-form>
    <el-divider />
    <el-table :data="list" :border="true" :stripe="true">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="roleName" label="角色" />
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

    <!-- 表格分页 -->
    <div style="padding-top: 15px">
        <el-pagination
            layout="prev, pager, next"
            :total="listLength"
            v-model:current-page="pageNum"
            :page-size="pageSize"
            @change="handleQuery()"
        />
    </div>
</template>

<script>
import { getReaderList } from "../../../api/reader";
import { getReaderRoleOptions } from "../../../api/readerRole";

export default {
    data() {
        return {
            searchInfo: {
                kind: 1,
                content: undefined,
                role: -1,
            },
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
            searchOptions: [],
            list: [],
            listLength: 0,
            pageNum: 0,
            pageSize: 5,
        };
    },
    mounted() {
        this.update();
        this.getOptions();
    },
    methods: {
        async update() {
            let result = await getReaderList();
            if (result.code !== 0) {
                return;
            }

            this.list = result.data.list;
            this.listLength = result.data.length;
        },
        async getOptions() {
            let result = await getReaderRoleOptions();
            if (result.code !== 0) {
                return;
            }
            this.searchOptions = result.data;
            this.searchOptions.unshift({
                id: -1,
                name: "无",
            });
        },
        async handleQuery() {
            var condition = {};

            // 1. 如果内容为空，则不作为查询条件
            const content = this.searchInfo.content;
            if (content !== "" && content !== undefined) {
                switch (this.searchInfo.kind) {
                    case 1:
                        condition.id = content;
                        break;
                    case 2:
                        condition.name = content;
                        break;
                    case 3:
                        condition.phone = content;
                        break;
                }
            }

            // 2. 如果角色为空，则不作为查询条件
            const role = this.searchInfo.role;
            if (role !== -1) {
                condition.roleId = role;
            }

            // 3. 分页
            condition.pageNum = this.pageNum - 1;
            condition.pageSize = this.pageSize;

            let result = await getReaderList(condition);
            if (result.code !== 0) {
                console.log("err:", result);
                return;
            }

            this.list = result.data.list;
            this.listLength = result.data.length;
        },
    },
};
</script>
