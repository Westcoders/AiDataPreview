<!-- @format -->

<template>
	<div class="work-panel flex text-xs justify-between bg-slate-200">
		<div class="work-panel-left bg-slate-900 flex flex-col justify-between item px-3">
			<div class="avator w-full text-white h-16 my-2 flex items-center justify-between">
				<div class="flex items-center justify-start">
					<el-avatar
						:size="35"
						src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
					/>
					<span class="ml-3 text-s">路飞</span>
				</div>
				<el-button link>
					<el-icon
						size="large"
						class="text-white"
					>
						<More />
					</el-icon>
				</el-button>
			</div>
			<div class="flex-auto pr-1 overflow-y-auto scroll-m-0 scroll-ml-1">
				<ElCollapse
					v-model="test"
					class="text-white border-none tracking-wider break-all"
				>
					<ElCollapseItem
						class="bg-slate-900"
						title="文件目录"
						name="1"
					>
						<template #title>
							<el-icon class="mr-1">
								<Memo />
							</el-icon>
							我的文件
						</template>
						<div class="w-full text-xs h-max text-white flex flex-wrap flex-row justify-between">
							<div
								v-for="(item, index) in files"
								:key="item.key"
								style="width: 176px"
								class="relative h-6 box-border mx-1 flex-none mt-3 rounded-md bg-blue-900 px-1 flex items-center justify-center"
							>
								<div
									v-if="index > 2"
									class="w-full z-10 rounded-md h-full bg-slate-700/50 absolute"
								></div>
								<el-icon
									v-if="index < 3"
									class="z-10 absolute right-1"
								>
									<Select />
								</el-icon>
								<el-icon>
									<Document />
								</el-icon>
								<div class="flex-auto ml-2">{{ item.name }}</div>
							</div>
						</div>
					</ElCollapseItem>
					<ElCollapseItem name="3">
						<template #title>
							<el-icon class="mr-1">
								<DataAnalysis />
							</el-icon>
							行业数据
						</template>
						<div class="w-full h-full flex items-center justify-center flex-col">
							<div
								class="p-0"
								style="width: 350px; height: 250px"
								id="myChart1"
							></div>
							<div
								class="p-0"
								style="width: 350px; height: 250px"
								id="myChart2"
							></div>
						</div>
					</ElCollapseItem>
				</ElCollapse>
			</div>
		</div>

		<div class="work-panel-center relative overflow-auto bg-white mx-1 p-3 item">
			<div class="absolute flex justify-between right-3 top-6 w-5 h-32 flex-col items-center">
								<div>
					<el-button
						link
						type="info"
					>
						<el-icon size="large">
							<Search class="font-bold" />
						</el-icon>
					</el-button>
				</div>
				<div>
					<el-button
						link
						type="info"
					>
						<el-icon size="large">
							<Plus />
						</el-icon>
					</el-button>
				</div>
				<div>
					<el-button
						link
						type="info"
					>
						<el-icon size="large">
							<Minus />
						</el-icon>
					</el-button>
				</div>

			</div>
			<img
				src="../../assets/pdf2.png"
				class="mb-6"
				alt=""
			/>
			<div class="h-screen box-border pt-3">
				<el-upload
					class="upload-demo mt-5 mx-6"
					drag
					action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
					multiple
				>
					<el-icon class="el-icon--upload"><upload-filled /></el-icon>
					<div class="el-upload__text">
						拖入你的文件到这里 或
						<em>点击上传</em>
					</div>
					<template #tip>
						<div class="el-upload__tip">支持格式：pdf/word/ecxel；文件大小：不要超过 500Mb</div>
					</template>
				</el-upload>
			</div>
		</div>

		<div class="work-panel-right bg-white item flex justify-between flex-col p-3">
			<div class="chat-header flex justify-between">
				<div class="title flex items-center">Chat</div>
				<div class="actions">
					<div
						style="right: 45px; top: 14px"
						class="absolute top-3 z-10 text-sm text-gray-400"
					>
						中
					</div>
					<el-button
						link
						type="info"
					>
						<!-- <el-icon size="large">
							<Refresh />
						</el-icon> -->
					</el-button>
					<el-button
						link
						type="info"
					>
						<el-icon size="large">
							<Delete />
						</el-icon>
					</el-button>
				</div>
			</div>

			<div class="chat-content overflow-y-auto flex-auto">
				<div class="message shadow-lg p-2 mt-5 mr-8 bg-zinc-200 text-slate-800 tracking-wider break-all rounded-md">
					<div class="mt-1">
						由于红外线的能量较低，不足以导致分子键能的断裂，因此气体分子吸收红外线辐射后没有化学反应发生，而只是阻挡热量自地球向外逃逸，相当于地球和外层空间的一个绝热层，即
						“温室” 的作用。
					</div>
					<div class="mt-1">
						参考：
						<ul class="pl-6">
							<li
								v-for="item in tips"
								:key="item.position"
								class="text-blue-700 list-disc list-outside"
							>
								{{ item.desp }}
							</li>
						</ul>
					</div>
				</div>

				<div class="message shadow-lg p-2 mt-5 ml-8 bg-blue-900 text-white tracking-wider break-all rounded-md">
					温室气体排放的来源以及影响？
				</div>

				<div class="message shadow-lg p-2 mt-5 mr-8 bg-zinc-200 text-slate-800 tracking-wider break-all rounded-md">
					<div class="mt-1">
						温室气体排放来源多为世界重工业发展产生、汽车尾气等，温室气体一旦超出大气标准，便会造成温室效应，使全球气温上升，威胁人类生存。因此，控制温室气体排放已成为全人类面临的一个主要问题。
					</div>
					<div class="mt-1">
						参考：
						<ul class="pl-6">
							<li
								v-for="item in tips"
								:key="item.position"
								class="text-blue-700 list-disc list-outside"
							>
								{{ item.desp }}
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="send-message mb-1">
				<el-input placeholder="Ask any question...">
					<template #append>
						<el-button
							type="primary"
							class="bg-blue-600"
						>
							<el-icon>
								<Promotion />
							</el-icon>
						</el-button>
					</template>
				</el-input>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { ElMessage, ElButton, ElInput, ElUpload, ElAvatar, ElCollapse, ElCollapseItem } from 'element-plus';
import {
	Minus,
	CircleCheckFilled,
	Refresh,
	Memo,
	Document,
	Delete,
	Search,
	CircleCheck,
	UploadFilled,
	Promotion,
	Select,
	Plus,
	More,
	ChatDotRound,
	DataAnalysis,
} from '@element-plus/icons-vue';
import * as echarts from 'echarts';
import { loadPdf } from './loadPdf';
import { chart1, chart2 } from './charts';
const test = ref(['1']);

const files = [
	{ name: '2021年碳排放数据.pdf', key: '1' },
	{ name: '2022年碳排放数据.pdf', key: '2' },
	{ name: '2023年碳排放数据.pdf', key: '3' },
	{ name: '碳排放标准.docx', key: '4' },
	{ name: '全国排放数据.doc', key: '5' },
];
const tips = [
	{ desp: '碳排放权交易管理办法', position: '2' },
	{ desp: '排放贸易机制、联合履约机制', position: '3' },
	{ desp: '《全国碳排放权交易配额总量设定与分配实施方案》', position: '1' },
];

onMounted(() => {
	// 基于准备好的dom，初始化echarts实例
	var myChart1 = echarts.init(document.getElementById('myChart1'), '', { height: 300, width: 350 });
	var myChart2 = echarts.init(document.getElementById('myChart2'), '', { height: 300, width: 350 });
	// 绘制图表
	myChart1.setOption(chart1);
	myChart2.setOption(chart2);
	// loadPdf()
});
</script>

<style lang="scss">
.work-panel {
	width: 100vw;
	height: 100vh;

	.item {
	}

	&-left {
		flex: 0 0 400px;

		.el-upload-dragger {
			background-color: rgb(100, 116, 139);
			height: 60px;
			padding: 0;
			line-height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.el-collapse {
			& :first-child {
				.el-collapse-item__wrap {
					--tw-bg-opacity: 1;
					border: 0;
					overflow-y: auto;
					height: max-content;
					max-height: 200px;
					background-color: rgb(15 23 42 / var(--tw-bg-opacity));
				}
			}
		}
		.el-collapse-item__header {
			color: white;
			font-weight: 700;
			--tw-bg-opacity: 1;
			background-color: rgb(15 23 42 / var(--tw-bg-opacity));
			border: none;
			margin-top: 12px;
		}

		.el-collapse-item__wrap {
			--tw-bg-opacity: 1;
			border: 0;
			overflow-y: auto;
			height: 600px;
			background-color: rgb(15 23 42 / var(--tw-bg-opacity));
		}
	}

	&-center {
		flex: 1 1 auto;
	}

	&-right {
		flex: 0 0 400px;

		.chat-header {
			.title {
				width: 50%;
			}
		}
	}
}
</style>
