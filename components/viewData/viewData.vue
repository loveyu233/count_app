<template>
	<view class="tong">
		<view class="top">
			<view class="date">
				{{dateStr}} 
			</view>
			<view class="count">
				{{count}}
			</view>
		</view>
		<view class="bottom">
			<view class="item" v-for="item in props.items" :key="item.id">
				<view>
					<image src="../../static/baozi.png"></image>{{item.content}}
				</view>
				<view>
					{{item.size}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	let count = ref(0)
	const props = defineProps(["items","dateStr"])
	props.items.sort((a,b)=>{
		return !(new Date(a.CreatedAt) - new Date(b.CreatedAt))
	})
	for (let i = 0; i < props.items.length;i++){
		count.value += props.items[i].size
	}
	console.log(props.items);
</script>

<style lang="scss" scoped>
.tong{
	display: flex;
	flex-direction: column;
	margin: 0 30rpx;
	justify-content: center;
	align-items: center;
}
.top{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
	border-bottom: 1px solid black;
	padding-bottom: 8rpx;
}
.bottom{
	width: 100%;
	.item{
		padding: 10rpx 10rpx;
		margin: 10rpx 10rpx;
		width: 100%;
		display: flex;
		vertical-align:top;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding-right: 50rpx;
	}
}
image{
	width: 40rpx;
	height: 40rpx;
	margin-top: 10rpx 10rpx;
	vertical-align: bottom;
	margin-right: 20rpx;
	margin-left: 10rpx;
}
</style>