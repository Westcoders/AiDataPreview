<!-- @format -->

<template>
	<div class="work-panel flex justify-between bg-slate-200">
		<div class="work-panel-left bg-slate-900 flex flex-col justify-between item px-3">
			<div class="avator w-full text-white h-16 my-2 flex items-center justify-between">
				<el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
				<el-button link>
					<el-icon size="large" class=" text-white">
						<More />
					</el-icon>

				</el-button>
			</div>
			<el-upload class="upload-demo rounded-md text-sm text-white " drag
				action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
				<el-icon size='large' class=" mr-2">
					<Plus />
				</el-icon>
				<span class="">
					new Chat
				</span>
			</el-upload>
			<div class="flex-auto pr-1 overflow-y-auto scroll-m-0 scroll-ml-1">
				<ElCollapse v-model="test" class=" text-white border-none tracking-wider break-all">
					<ElCollapseItem class=" bg-slate-900 text-lg" title="文件目录" name="1">
						<div class="record  h-10 rounded-md text-white bg-blue-700 px-2 flex items-center justify-center">
							<el-icon size='large' class=" ">
								<ChatDotRound />
							</el-icon>
							<div class=" flex-auto ml-2">2021年碳排放数据.pdf</div>
						</div>
						<div
							class="record mt-2 h-10 rounded-md text-white bg-blue-700 px-2 flex items-center justify-center">
							<el-icon size='large' class=" ">
								<ChatDotRound />
							</el-icon>
							<div class=" flex-auto ml-2">2021年碳排放数据.pdf</div>
						</div>
					</ElCollapseItem>
					<!-- <ElCollapseItem title="文件目录" name="2">

					</ElCollapseItem> -->
					<ElCollapseItem title="企业数据" class="" name="3">
						<div class=" w-full h-full flex items-center justify-center flex-col">
							<div class="p-0" style="width:350px; height:250px;" id="myChart1"></div>
							<div class="p-0" style="width:350px; height: 250px;" id="myChart2"></div>
							<div class="p-0" style="width:350px; height: 250px;" id="myChart3"></div>
							<div class="p-0" style="width:350px; height: 250px;" id="myChart4"></div>
						</div>

					</ElCollapseItem>
				</ElCollapse>

			</div>
		</div>

		<div class="work-panel-center bg-white mx-1 p-3 item">
			<div class="pdf">
				<el-upload class="upload-demo mt-5 mx-6" drag
					action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
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
				<div class="title">Chat</div>
				<div class="actions">
					<el-button link type="info">
						<el-icon size="large">
							<Share />
						</el-icon>
					</el-button>
					<el-button link type="info">
						<el-icon size="large">
							<EditPen />
						</el-icon>
					</el-button>
					<el-button link type="info">
						<el-icon size="large">
							<Download />
						</el-icon>
					</el-button>
					<el-button link type="info">
						<el-icon size="large">
							<Refresh />
						</el-icon>
					</el-button>
					<el-button link type="info">
						<el-icon size="large">
							<Delete />
						</el-icon>
					</el-button>
				</div>
			</div>

			<div class="chat-content overflow-y-auto flex-auto">
				<div
					class="message shadow-lg p-2 mt-5 mr-8 bg-zinc-100 text-slate-800 text-sm tracking-wider break-all rounded-md">
					欢迎查看程晓杰前端开发的个人简历！ 本文详细介绍了程晓杰的基本信息、工作经历、项目经历、工作技能和���我评价。
					以下是三个问题供您参考：
				</div>

				<div
					class="message shadow-lg p-2 mt-5 ml-8 bg-blue-500 text-white text-sm tracking-wider break-all rounded-md">
					如何使用？
				</div>

				<div
					class="message shadow-lg p-2 mt-5 mr-8 bg-zinc-100 text-slate-800 text-sm tracking-wider break-all rounded-md">
					欢迎查看程晓杰前端开发的个人简历！ 本文详细介绍了程晓杰的基本信息、工作经历、项目经历、工作技能和���我评价。
					以下是三个问题供您参考：
				</div>
			</div>

			<div class="send-message mb-1">
				<el-input placeholder="Ask any question...">
					<template #append>
						<el-button type="primary" class="bg-blue-600">
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
import { onMounted, ref } from 'vue'
import { ElMessage, ElButton, ElInput, ElUpload, ElAvatar, ElCollapse, ElCollapseItem } from 'element-plus';
import { EditPen, Refresh, Download, Delete, Share, Promotion, UploadFilled, Plus, More, ChatDotRound } from '@element-plus/icons-vue';
import * as echarts from 'echarts';
import {loadPdf} from './loadPdf'
const test = ref(['1'])

const options1 = {
	title: {
		text: '数据1'
	},
	tooltip: {},
	xAxis: {
		data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
	},
	yAxis: {},
	series: [
		{
			name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}
	]
}


const options2 = {
	xAxis: {
		data: ['A', 'B', 'C', 'D', 'E']
	},
	yAxis: {},
	series: [
		{
			data: [10, 22, 28, 23, 19],
			type: 'line',
			lineStyle: {
				color: 'green',
				width: 4,
				type: 'dashed'
			}
		}
	]
}
const options3 = {  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]}

  const options4 = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
      ]
    }
  ]
};

const options5 = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310],
      symbolSize: function(value) {
        return value / 10;
      }
    }
  ]
};
onMounted(() => {

	// 基于准备好的dom，初始化echarts实例
	var myChart1 = echarts.init(document.getElementById('myChart1'), '',{height:250,width:350});
	var myChart2 = echarts.init(document.getElementById('myChart2'), '',{height:250,width:350});
	var myChart3 = echarts.init(document.getElementById('myChart3'), '',{height:250,width:350});
	var myChart4 = echarts.init(document.getElementById('myChart4'), '',{height:250,width:350});
	// 绘制图表
	myChart1.setOption(options1);
	myChart2.setOption(options2);
	myChart3.setOption(options4);
	myChart4.setOption(options5);
	loadPdf()
})

</script>

<style lang="scss">
.work-panel {
	width: 100vw;
	height: 100vh;

	.item {}

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

		.el-collapse{
			& :first-child{
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
