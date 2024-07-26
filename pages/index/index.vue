<template>
	<view class="default">
		<view class="header">
			<view ><image src="../../static/menu.png" class="menu"></image></view>
			<view ><image src="../../static/date.png" class="date" @click="show=true"></image></view>
			<view ><image src="../../static/ref.png" class="ref" @click="Refresh()"></image></view>
		</view>
		<view>
			<u-datetime-picker
			 :show="show" 
			  v-model="date"
			  mode="year-month"
			  @confirm="handleChange"
			  @cancel="show = false"
			  :closeOnClickOverlay="true"
			  @close="show = false"
			></u-datetime-picker>
		</view>
		<view class="content">
			<view class="current">
				<view class="one">上月</view>
				<view class="two">{{respData.last}}</view>
			</view>
			<view class="yiqian">
				<view class="three">本月</view>
				<view class="four">{{respData.current}}</view>
			</view>
		</view>	
	<scroll-view scroll-y class="scroll">
		<view class="bottom" v-for="item in sortDate">
			<view >
				<viewData :items="respData.list[item]" :dateStr="item"></viewData>
			</view>
		</view>
	</scroll-view>
	</view>
	<view class="add" @click="alterShow=true">
	</view>
	<up-popup :show="alterShow" mode="top"  @close="alterShow = false" @open="alterShow = true" :round="10" overlayStyle="rgba(255,255,255,0.3)">
		<view class="alterContent">
			<view class="input">
				<up-input
				class="i1"
					placeholder="描述"
					prefixIcon="edit-pen"
					prefixIconStyle="font-size: 22px;color: #909399"
					v-model="subData.content"
				></up-input>
				<up-input
				class="i1"
					placeholder="数量"
					prefixIcon="list-dot"
					type="digit"
					prefixIconStyle="font-size: 22px;color: #909399"
					v-model="subData.size"
				></up-input>
			</view>
			<view class="button">
				<up-button text="取消" class="b1" @click="alterShow = false"></up-button>
				<up-button text="确定" color="red" class="b1" @click="submit()"></up-button>
			</view>
		</view>
	</up-popup>
</template>

<script setup>
import { ref } from "vue";
import {apiGetAll,apiInsert} from "@/api/apis.js"
import {onLoad} from '@dcloudio/uni-app'

let show = ref(false)
let date = ref("2024-07")

let handleChange = (e)=>{
	show.value = false
}

let alterShow = ref(false)

const Refresh = ()=>{
	getData()
}

let subData = ref({})
const submit = async ()=>{
	alterShow.value = false
	let res = await apiInsert(subData.value)
	getData()
}

let respData = ref({})
let sortDate = ref()

const getData = ()=>{
	apiGetAll().then(res=>{
		respData.value = res.data
		sortDate.value = Object.keys(res.data.list).sort((a, b) => {
			// 假设 format_date 是 ISO 8601 格式的日期字符串，可以直接比较
			return new Date(b) - new Date(a);
		});
	})
}

onLoad(()=>{
	getData()
})

</script>

<style lang="scss" scoped>
	.default{
		background-color: rgba(199, 237, 204, 1.0);
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 50rpx;
	}
	.header{
		box-sizing: border-box;
		width: 100vw;
		height: 100rpx;
		background-color: rgba(255, 255, 255, 0.5);
		display: flex;
		padding: 20rpx 20rpx 0rpx 20rpx;
		// justify-content: space-between;
		.menu{
			width: 64rpx;
			height: 64rpx;
			margin-right: 20rpx;
		}
		.date{
			width: 64rpx;
			height: 64rpx;
		}
		.ref{
			width: 64rpx;
			height: 68rpx;
			margin-left: 20rpx;
		}
	}
	.content{
		width: 90vw;
		height: 300rpx;
		margin: 20rpx auto;
		background-color: rgba(255, 255, 255, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 60rpx;
		.current{
			width: 40vw;
			height: 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.one{
				width: 30vw;
				height: 40%;
				font-size: 50rpx;
				text-align: center;
			}
			.two{
				width: 30vw;
				height: 40%;
				font-size: 50rpx;
				text-align: center;
			}
		}
		.yiqian{
			width: 40vw;
			height: 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-left: 1px solid black;
			.three{
				width: 30vw;
				height: 40%;
				font-size: 50rpx;
				text-align: center;
			}
			.four{
				width: 30vw;
				height: 40%;
				font-size: 50rpx;
				text-align: center;
			}
		}
	}
	.bottom{
		width: 80vw;
		box-sizing: border-box;
		margin: 20rpx auto;
		padding: 60rpx 20rpx;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20rpx;
	}
	.add{
		position: fixed;
		bottom: 10vh;
		right: 10rpx;
		width: 80rpx;
		height: 80rpx;
		background-image: url("../../static/add.png");
		background-size: cover;
		opacity: 0.6;
	}
	.alterContent{
		width: 100%;
		height: 500rpx;
		box-sizing: border-box;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50rpx;
		background-color: rgba(255, 255, 255, 0.3);
		.input{
			.i1{
				width: 400rpx;
				margin-top: 50rpx;
			}
		}
		.button{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			.b1{
				margin-top: 50rpx;
				width: 100rpx;
			}
		}
	}
	.scroll{
		width: 90vw;
		height: 60vh;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 20rpx 20rpx;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20rpx;
	}
</style>
