import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path')
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		// 别名
		alias: [
			{ find: '@', replacement: resolve(__dirname, 'src') + '/' }, // src 目录下
			{ find: '@img', replacement: resolve(__dirname, 'public/images') + '/' }, // 图片文件夹
		],
		extensions: ['.js', '.ts', '.json'], // 引入时忽略的文件扩展名列表
	},
})