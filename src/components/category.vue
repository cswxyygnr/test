<template>
  <div class="contain">
    <h3>{{ title }}分类</h3>
    <!-- <li v-for="(item,index) in listData" :key="index">{{ item }}</li> -->

    <!-- 定义一个默认插槽,等待使用者进行填充 -->
    <slot>此处是默认值,没有传具体标签或结构时显示</slot>
    <slot name="center">123</slot>
    <slot name="foot">123</slot>

    <!-- 作用域插槽,即数据在子组件中,但是要生成的数据结构由使用者定 -->
    <!-- <slot :games="games"></slot> -->
  </div>
</template>

<script>
export default {
  name: 'cateGory',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  },
}
</script>

<style>
.contain {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 300px;
  background-color: skyblue;
}

h3 {
  margin-top: 0;
  background-color: orange;
}

img {
  width: 100%;
}
</style>