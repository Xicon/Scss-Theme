# Scss-Theme

> Vite + Vue + Typescript - Scss User **Customize** Theme Template
> 
> Vite + Vue + Typescript 的 Scss 基本 可扩展的 自定义 主题 模板

## 前置条件
+ 熟悉 `Vue`的基本使用,了解`Vue`的`单组件`的使用
+ 熟悉`scss`的使用
+ 一个聪明的脑子

## 配置
> 默认提供3种简单的主题色(浅色,深色,粉色)

1. 找到配置文件:

`<project>\src\assets\style\setting_varibble.scss`

2. 添加你的自定义主题色

示例:

```scss
// 字体颜色 start

$light-color: #17a2b8 !default; // 浅色  
$dark-color: #333333 !default; // 深色  
$pink-color: #dc3545 !default; // 粉色  

+ $yello-color: #dc3545 !default; // 黄色主题颜色字体  


// 字体颜色 end

// 背景颜色 start

$light-bc: #cccccc;  
$dark-bc: #fff;  
$pink-bc: #1234;  

+ $yellow-bc: #fff; // 黄色主题背景颜色  

// 背景颜色 end

```

3. 在 `<project>/src/assets/style/theme`目录下创建你的`SCSS`==主题==文件

示例:
> 右键新建文件 或 终端创建:

```shell
new-item yellow.scss // PowerShell
type nul>yellow.scss // CMD

```

`yellow.scss`
```scss
@charset "UTF-8";  
  
@import "../setting/varibble";  
  
@mixin yellow($theme: yellow) {  
 color: $yellow-color;  
 background-color: $yellow-bc;  
}
```

4. 导入

`main.js`
```js
import './assets/style/theme/theme.css'
```

## 使用

`Vue 3.x 顶层setup语法`
```js
<script setup>

import { ref, reactive } from 'vue' // 导入Vue 3.x 响应式创建方法

// 创建一个默认的主题
const theme = ref('dark')  

// 创建可选的主题列表,变量是你定义的主题名,刚刚创建了 `yellow` 主题文件
const themes = reactive([  
 { label: '深色', value: 'dark' },  
 { label: '浅色', value: 'linght' },  
 { label: '粉色', value: 'pink' },
+ { label: '黄色', value: 'yellow' },
])

</script>

<template>
	<select  
	 v-model="theme">  
	 <option  
	 v-for="(theme,i) in themes"  
	 :label="theme.label"  
	 :value="theme.value"  
	 :key="`${theme}${i}`"  
	 >  
	 </option>  
</select>
<div :class="theme"  >  
 This is a test passage  
</div>
</template>
```

`Vue 3.x setup语法`
```js
<script>  
import { ref, reactive } from 'vue'  
export default {  
 name:'<your component name>',  
 setup(){  
 const theme = ref('dark')  
 const themes =reactive([  
 { label: '深色', value: 'dark' },  
 { label: '浅色', value: 'linght' },  
 { label: '粉色', value: 'pink' }])  
  
 return{  
 theme,  
 themes  
 }  
 }  
}
</script>

<template>
	<select  
	 v-model="theme">  
	 <option  
	 v-for="(theme,i) in themes"  
	 :label="theme.label"  
	 :value="theme.value"  
	 :key="`${theme}${i}`"  
	 >  
	 </option>  
</select>
<div :class="theme"  >  
 This is a test passage  
</div>
</template>
```

`Vue 2.x 语法`
```js
<script>  
export default {  
 name:'<your component name>',  
 data(){  
 const theme = 'dark'  
 const themes = [  
 { label: '深色', value: 'dark' },  
 { label: '浅色', value: 'linght' },  
 { label: '粉色', value: 'pink' }]  
 },  
}  
</script>

<template>
	<select  
	 v-model="theme">  
	 <option  
	 v-for="(theme,i) in themes"  
	 :label="theme.label"  
	 :value="theme.value"  
	 :key="`${theme}${i}`"  
	 >  
	 </option>  
</select>
<div :class="theme"  >  
 This is a test passage  
</div>
</template>
```