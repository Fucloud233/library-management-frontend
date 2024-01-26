<template>
    <div id="container">
        <el-aside width="300px">
            <el-menu default-active="1" @select="handleSelect">
                <div style="text-align: center; background-color: #409eff">
                    <h1 style="color: white">图书馆管理系统</h1>
                </div>
                <!-- <el-divider style="margin: 5px 0 5px 0" /> -->
                <el-menu-item index="/affair">
                    <el-icon><Sort /></el-icon>图书借还
                </el-menu-item>
                <el-menu-item index="/book">
                    <el-icon><Notebook /></el-icon>图书管理
                </el-menu-item>
                <el-menu-item index="/violation">
                    <el-icon><CreditCard /></el-icon>违规管理
                </el-menu-item>

                <el-sub-menu index="">
                    <template #title>
                        <el-icon><User /></el-icon>用户管理
                    </template>
                    <el-menu-item index="/admin">管理员</el-menu-item>
                    <el-menu-item index="/reader">读者</el-menu-item>
                    <el-menu-item index="/readerRole">读者身份</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-main> <router-view></router-view> </el-main>
    </div>
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
    methods: {
        handleSelect(key) {
            this.$router.push({
                path: key,
            });
        },
    },
};
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: row;
    height: 100%;
}
.el-aside,
.el-menu {
    height: 100%;
}

h1 {
    margin: 0;
    padding: 15px;
}
</style>
