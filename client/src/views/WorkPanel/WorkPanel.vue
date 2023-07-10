<!-- @format -->

<template>
	<div class="work-panel flex justify-between bg-slate-200">
		<div class="work-panel-left bg-slate-900 item px-3">
            <div class="avator w-full text-white h-16 flex items-center justify-between">
                 <el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                 <el-button link >
                <el-icon class=" text-white"><More /></el-icon>

                 </el-button>
            </div>
			<el-upload
				class="upload-demo rounded-md text-sm text-white"
				drag
				action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
				multiple
			>
				<el-icon size='large' class=" mr-2"><Plus /> </el-icon>
				<span class="">
					new Chat
				</span>
			</el-upload>
            <div class="record h-10 rounded-md bg-blue-700"></div>

		</div>

		<div class="work-panel-center bg-white mx-1 p-3 item">
			<div class="pdf">
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
				<div class="title">Chat</div>
				<div class="actions">
					<el-button
						link
						type="info"
					>
						<el-icon size="large"><Share /></el-icon>
					</el-button>
					<el-button
						link
						type="info"
					>
						<el-icon size="large"><EditPen /></el-icon>
					</el-button>
					<el-button
						link
						type="info"
					>
						<el-icon size="large"><Download /></el-icon>
					</el-button>
					<el-button
						link
						type="info"
					>
						<el-icon size="large"><Refresh /></el-icon>
					</el-button>
					<el-button
						link
						type="info"
					>
						<el-icon size="large"><Delete /></el-icon>
					</el-button>
				</div>
			</div>

			<div class="chat-content overflow-y-auto flex-auto">
				<div class="message shadow-lg p-2 mt-5 mr-8 bg-zinc-100 text-slate-800 text-sm tracking-wider break-all rounded-md">
					欢迎查看程晓杰前端开发的个人简历！ 本文详细介绍了程晓杰的基本信息、工作经历、项目经历、工作技能和���我评价。
					以下是三个问题供您参考：
				</div>

				<div class="message shadow-lg p-2 mt-5 ml-8 bg-blue-500 text-white text-sm tracking-wider break-all rounded-md">
                    如何使用？
				</div>

				<div class="message shadow-lg p-2 mt-5 mr-8 bg-zinc-100 text-slate-800 text-sm tracking-wider break-all rounded-md">
					欢迎查看程晓杰前端开发的个人简历！ 本文详细介绍了程晓杰的基本信息、工作经历、项目经历、工作技能和���我评价。
					以下是三个问题供您参考：
				</div>
			</div>

			<div class="send-message mb-1">
				<el-input placeholder="Ask any question...">
					<template #append>
						<el-button
							type="primary"
							class="bg-blue-600"
						>
							<el-icon><Promotion /></el-icon>
						</el-button>
					</template>
				</el-input>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ElMessage, ElButton, ElInput, ElUpload,ElAvatar } from 'element-plus';
import { EditPen, Refresh, Download, Delete, Share, Promotion, UploadFilled,Plus,More } from '@element-plus/icons-vue';
</script>

<style lang="scss">
.work-panel {
	width: 100vw;
	height: 100vh;

	.item {
	}
	&-left {
		flex: 0 0 400px;
        .el-upload-dragger{
        background-color: rgb(100, 116, 139);
        height:60px;
        padding:0;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
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
