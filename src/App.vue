<template>
  <div id="app">
    <cateGory title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
      <a href="">更多美食</a>
    </cateGory>

    <cateGory title="游戏" :listData="games">
      <template #center>
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
        <a href="">单机</a><br />
        <a href="">网络</a>
      </template>
    </cateGory>

    <!-- <cateGory title="游戏"> -->
    <!-- games在categories中由slot传出来的,但结构必须抱在template中,{games}是解构赋值 -->
    <!-- <template slot-scope="{games}">
          <ul>
            <li v-for="(g,index) in games" :key="index">{{ g }}</li>
          </ul>
        </template>
    </cateGory> -->

    <!-- <cateGory title="电影">
      <template slot-scope="{games}">
          <ol>
            <li v-for="(g,index) in games" :key="index">{{ g }}</li>
          </ol>
        </template>
    </cateGory> -->
  </div>
</template>

<script>
import cateGory from './components/category.vue'

export default {
  name: 'App',
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['教父', '拆弹专家', '你好李焕英', '尚硅谷']
    }
  },
  components: {
    cateGory
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}
</style>
