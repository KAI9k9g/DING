<template>
  <!-- 导航栏 -->
  <div id="navigator">
    <div class="naRight">
      <!-- 添加任务 -->
      <info :index="this.page.index"></info>
    </div>
    <div :class="this.page.index==0?'naLeft':'newNaLeft'" >
      <div class="screen" v-show="!Selected&&this.page.index==0">
        <Date-picker type="date" placeholder="选择日期" style="width: 150px"></Date-picker>
        <i-select :model.sync="model1" style="width:150px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" style="width:150px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" style="width:150px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <i-select :model.sync="model1" style="width:150px">
          <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <button type="submit" class="screenBtn" @click="btnClick">取消筛选</button>
      </div>
      <button type="submit" class="editButton" v-show="Selected&&this.page.index==0" @click="btnClick"><img src="../assets/menu-pull-down.png" /></button>
      <span v-show="this.page.index==1">{{this.page.name}}</span>
    </div>
  </div>
</template>

<script>
  import Info from "../components/Info";
  export default
  {
    components:
    {
      Info,
    },
    props:
    {
      "page":[Object],
    },
    data(){
      return {
        Selected: true,
        model1: '',
        test:1,
        cityList: [{ //这个是模拟筛选数据
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
      }
    },
    methods:
    {
      btnClick() {
        this.Selected = !this.Selected;
      },
    }
  }
</script>

<style>
  #navigator .naLeft {
    width: 80%;
    height: 150px;
    margin-left: 5%;
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    align-items: center;
  }
 .newNaLeft {
    width: 80%;
    height: 150px;
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
    margin-right: 5%;
    align-items: center;
  }
</style>
