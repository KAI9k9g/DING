<template>
  <div id="app">
    <div id="header">
      <div id="headerLeft">
        <a href="#">Logo图标</a>
      </div>
      <div id="headerRight">
          <ul>
            <li v-for=' (value,index) in msgModule' @click="result(index)" :class="resultNum==index?'byclick':''">
              <a href="#">{{value}}</a>
             </li>
          </ul>
      </div>
    </div>
    <div id="MainBody">
      <div v-show="this.num!=2">
        <Task ref="" :mynum="num"></Task>
      </div>
      <div v-show="this.num==2">
        <action></action>
      </div>
      <!-- <router-view></router-view> -->
    </div>

  </div>

</template>

<script>

  import Task from "../pages/Task";
  import action from "../pages/Action"
  export default {
    name:"app",
    components:
    {
      Task,
      action,
    },
    data () {
      return {
        msgModule: ["任务","项目","状态"],
        num:"", //当前坐标
        byclick:"byclick",
        task:'',
      }
    },
    
    methods:
    {
        result(index)
        {
          return this.num = index;
        },

    },
    computed:
    {
      resultNum()
      {
        return this.num;
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  body
  {
    margin: 0;
    padding: 0;
    background-color:#F0F0F0;
  }
  #app
  {
     width:100%;
  }
  #header
  {
    height: 100px;
    background-color:#0074D9;
    margin-bottom: 10px;
  }
  #headerLeft
  {
    height: 100px;
    width: 20%;
    float: left;
  }
  #headerRight
  {
     font-size: 100%;
     height: 100px;
     width: 80%;
     margin-left: 20% ;
  }
  #headerRight ul
  {
    margin: 0;
  }
  #headerRight li
  {
    width: 15%;
    height: 100px;
    line-height:100px;
    display: block;
    overflow: hidden;
    float: left;
    text-align: center;

    /* background-color: #0000; */
  }
  #header a
  {
    color:aliceblue;
    display: block;
    line-height:100px;
    margin-left:2% ;
    text-decoration: none; /* 去除下划线 */
  }
  #header a:visited
  {

  }
 #headerRight li a:hover
  {
    color:saddlebrown;
  }
  .byclick
  {

    background-color: #005599;
  }
  #MainBody
  {
    /* margin: 0; */
    margin: 0 auto;
    width: 98%;

  }
</style>
