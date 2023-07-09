<!-- @format -->

<template>
	<!--  -->
	<div class="login absolute text-sm py-2 px-8 bg-white tracking-widest">
		<div class="login-item justify-center text-3xl pt-8 pb-4 font-bold">{{loginType=='login'?'账户登录':'免费注册'}}</div>

		<div class="login-item justify-center text-slate-400 pb-6">
      {{loginType=='login'?'只是逛一逛，没有账号?':'老用户，已有账号?'}}
			<Button
				link
				type="primary"
				class=" "
        @click="onTypeChange"
			>
				<span class="text-slate-950 underline">
          {{loginType=='login'?'免费注册':'直接登录'}}</span>
			</Button>
		</div>

		<div class="mb-1 login-item text-slate-400">
			<div class="text-left w-full">邮箱地址</div>
		</div>
		<div class="login-item mb-4">
			<Input
				size="large"
				class="login-item-input rounded-2xl w-full"
			/>
		</div>

		<div class="mb-1 login-item text-slate-400">
			<div class="text-left w-full">密码</div>
			<el-icon size="large"><Hide /></el-icon>
			<span class="text-left ml-1">Hide</span>
		</div>

		<div class="login-item mb-4">
			<Input
				size="large"
				class="login-item-input rounded-2xl w-full"
			/>
		</div>
    <div class="mb-1 login-item text-slate-400" v-if="loginType=='signUp'">
      <div class="text-left w-full">确认密码</div>
    </div>
    <div class="login-item mb-4" v-if="loginType=='signUp'">
      <Input
        size="large"
        class="login-item-input rounded-2xl w-full"
      />
    </div>
		<div class="login-item mb-1" v-if="loginType=='login'">
			<Button
				link
				type="primary"
				class="sign-up w-full"
			>
				<span class="text-slate-950 w-full text-left text-xs underline">忘记密码?</span>
			</Button>
		</div>

		<div class="login-item mb-2">
			<Button
				type="primary"
				size="large"
				class="w-full bg-blue-500 tracking-widest"
				round
        @click="handleLogin"
			>
				{{loginType=='login'?'登录':'注册'}}
			</Button>
		</div>


		<div class="login-item mb-1">
      <span class="text-slate-950 text-xs w-full text-left">其他方式</span>
      
		</div>

		<div class="login-item justify-between mb-4">
			<Button
				size="large"
				round
				class="w-1/5 border-slate-950"
			>
				<img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" />
			</Button>
			<Button
				size="large"
				round
				class="w-1/5 border-slate-950"
			>
				<img src="https://img.ixintu.com/upload/jpg/20210523/e78d6f9d5c1f056111920719308f8876_31571_512_512.jpg!ys" />
			</Button>
			<Button
				size="large"
				round
				class="w-1/5 border-slate-950"
			>
				<img src="https://img.ixintu.com/upload/jpg/20210523/71574484b8d1a0abd354ed11ea1f61b7_50588_630_630.jpg!ys" />
			</Button>
			<Button
				size="large"
				round
				class="w-1/5 border-slate-950"
			>
				<img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" />
			</Button>
		</div>

		<div class="login-item" v-if="loginType=='login'">
			<Button
				size="large"
				class="w-full border-slate-950"
				round
        @click="handleLogin"
			>
				<span class="text-slate-950 w-full tracking-widest">以游客身份登录</span>
			</Button>
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
				password: '',
				username: '',
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
			this.$store.dispatch('auth/login', user).then(
				() => {
					console.log('Login.vue', user);
					this.$router.push('/');
				},
				(error) => {
					this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
				},
			);
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
	img {
		width: 28x;
		height: 28px;
	}
	&-item {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		&-input {
			.el-input__wrapper {
				border-radius: 9px !important;
			}
		}
	}
	.sign-up {
		span {
			width: 100%;
		}
	}
}
</style>
