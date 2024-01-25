<template>
    <el-aside width="300px">
        <el-menu default-active="1">
            <div style="text-align: center">
                <h1>图书管理系统</h1>
            </div>
            <el-divider style="margin: 5px 0 5px 0" />
            <el-menu-item index="1">
                <el-icon><Sort /></el-icon>图书借还
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon><Notebook /></el-icon>图书管理
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><CreditCard /></el-icon>违规管理
            </el-menu-item>

            <el-sub-menu index="4">
                <template #title>
                    <el-icon><User /></el-icon>读者管理
                </template>
                <el-menu-item-group index="4">
                    <el-menu-item index="4-1">管理员</el-menu-item>
                    <el-menu-item index="4-2">读者</el-menu-item>
                    <el-menu-item index="4-3">读者身份</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
    <el-main></el-main>
</template>

<script>
import { Sort, Notebook, CreditCard, User } from "@element-plus/icons-vue";

export default {
    components: {
        Sort,
        Notebook,
        CreditCard,
        User,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.el-aside,
.el-menu {
    height: 100%;
}

h1 {
    margin: 0;
    padding: 15px;
}
</style>
