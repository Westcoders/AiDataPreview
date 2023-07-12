<!-- @format -->

<template>
	<div class="login absolute py-3 px-8 bg-white tracking-widest">
		<div @click="submitLogin" class="w-full my-5 text-slate-700  flex justify-center font-bold text-2xl ">扫码登录</div>
		<div class=" relative w-full mt-2  h-96">
			<div class=" absolute w-12 rounded-tl-lg h-12 top-6 left-6 border-solid border-blue-400 border-t-4 border-l-4"></div>
			<div class=" absolute w-12 rounded-tr-lg h-12 top-6 right-6 border-solid border-blue-400 border-t-4 border-r-4"></div>
			<div class=" absolute w-12 rounded-bl-lg h-12 bottom-6 left-6 border-solid border-blue-400 border-b-4 border-l-4"></div>
			<div class=" absolute w-12 rounded-br-lg h-12 bottom-6 right-6 border-solid border-blue-400 border-b-4 border-r-4"></div>
			<img src="../../assets/捕获.PNG" alt="二维码" class="w-full p-12 h-96">
		</div>
	</div>
</template>

<script>
import { ElButton, ElInput, ElSpace, ElIcon } from 'element-plus';
import { Hide, Search, Iphone, ChromeFilled, PhoneFilled } from '@element-plus/icons-vue';
export default {
	components: {
		Button: ElButton,
		Input: ElInput,
		Space: ElSpace,
		ElIcon,
		Search,
		Hide,
		ChromeFilled,
		Iphone,
		PhoneFilled,
	},

	data() {
		return {
      loginType:'login', // signUp
			loginForm: {
				password: '123123',
				username: '1321321',
			},
		};
	},

	methods: {
    onTypeChange(){
      if(this.loginType == 'signUp') return this.loginType = 'login'
      if(this.loginType == 'login') return this.loginType = 'signUp'
    },
		submitLogin() {
			this.handleLogin(this.loginForm);
		},
		handleLogin(user) {
      this.$router.push('/workPanel');
			// this.$store.dispatch('auth/login', user).then(
			// 	() => {
			// 		console.log('Login.vue', user);
			// 	},
			// 	(error) => {
			// 		this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
			// 	},
			// );
		},
	},
};
</script>

<style lang="less">
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15);
@placeholder-text: #a8abb2;
@primary-text: #303133;
.login {
	top: calc(50% - 250px);
	right: calc(50% - 225px);
	width: 450px;
	height: 500px;
	border-radius: 20px;
	box-shadow: @box-shadow-base;
	color: @primary-text;
}
</style>
