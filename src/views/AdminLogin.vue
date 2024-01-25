<template>
    <div id="basic-container">
        <div id="center-container">
            <div id="title-container">
                <p id="title">欢迎使用<br />图书馆管理系统</p>
            </div>
            <div id="main-container">
                <h1>管理员登录</h1>
                <el-form :model="loginInfo">
                    <el-form-item label="工号">
                        <el-input v-model="loginInfo.id"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="loginInfo.password"></el-input>
                    </el-form-item>
                </el-form>

                <el-button
                    @click="login()"
                    style="width: 100%"
                    type="primary"
                    round
                    >登录</el-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginInfo: {
                id: 1,
                password: 123456,
            },
        };
    },
    methods: {
        login() {
            console.log(this.loginInfo);
        },
    },
};
</script>

<style scoped>
#basic-container {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    height: 100%;

    background-color: #efefef;
}

#center-container {
    width: 800px;
    height: 500px;

    background-color: white;

    display: flex;
    flex-direction: row;
}
#title-container {
    width: 40%;
    height: 100%;

    margin: 0px;

    background-color: #409eff;

    text-align: center;
    color: white;
}
#title {
    font-size: 24px;
    margin-top: 50%;
    line-height: 150%;
    transform: translateY(+50%);
}
#main-container {
    width: 60%;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
