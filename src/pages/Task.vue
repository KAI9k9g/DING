<template>
  <div id="taskMain">
    <navigation ref="navigation" :page="page"></navigation>
    <div id="taskMedium">
      <div :class="this.mynum==0?'taskLeft':'newTaskLeft'">
        <ul>
          <li v-for=" (item,index) in msgModule" @click="select(index,item)" :class="result==index?'bySelect':''">{{item}}</li>
        </ul>
      </div>
      <div :class="this.mynum==0?'taskright':'newTaskright'">
        <div v-if="this.mynum==0">
          <div class="taskItem" v-for=" item in task">
            <div class="itemOne">
              <div class="oneTop">
                <div style="margin-left: 5%; display:flex; flex-direct :row">
                  <div style="background-color: gray;color:white;font-size: 15px; width: 20px; height: 20px; text-align: center;">{{item.id}}</div>
                  <span style="margin-left:5px;font-size: 15px;">{{item.tname}}</span>
                </div>
                <div style="margin-left: 5%;">
                  <Tag v-for="  tag in item.cateCount">{{tag}}</Tag>
                </div>
              </div>
              <div class="oneBottom">
                <div style="color: #42B983; margin: 2px;"><img src="../assets/time.png" /> {{setTime(item.time)}}</div>
                <div><img src="../assets/user.png" /> {{item.user}}</div>
                <div><img src="../assets/bag.png" /> {{item.pm}}</div>
                <div><img src="../assets/log.png" /> {{item.attachments}}</div>
                <div>
                  <img src="../assets/message.png" /> {{item.message}}
                </div>
              </div>
            </div>
            <div class="itemTwo">
              <p>进行中</p>
            </div>
            <div class="itemThere">
              <button type="submit"><img src="../assets/accept.png"></button>
            </div>
            <div class="itemFour">
              <Drower></Drower>
            </div>
          </div>
        </div>
        <div class="pItem" v-show="this.mynum==1">
          <div style="font-size: 15px; margin: 15px;">德胜麻将</div>
          <div style="font-size: 15px; margin: 15px;">
            <Tag type="border" color="green">进行中</Tag>
          </div>
          <div style="font-size: 15px; margin: 20px;display: flex;justify-content: flex-end;">
            <div style="margin-left: 10px;">0/2</div>
          </div>
          <div style="font-size: 15px; margin: 15px;"><Progress :percent="25" status="active"></Progress></div>
          <div style="font-size: 15px; margin: 15px;display: flex;justify-content: space-around;align-items:center">
            <div>无逾期任务</div>
            <div>
              <i-button type="primary" shape="circle">哈哈</i-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Drower from "../components/Drower";
  import navigation from "../components/Navigation"
  export default {
    components: {
      Drower,
      navigation,
    },
    props: {
      'mynum': [Number, String],
    },
    data() {
      return {
        msgModule: ['全部', '糖果派对', '水浒传', "黑红梅方", "摇钱树", '明星97'],
        index: '',
        bySelect: 'bySelect',
        add: true,
        temp: '',
        page: {
          index: '',
          name: '全部项目',
        },
        task: '',
      };
    },
    methods: {
      // 控制模块选择
      select(index, item) {
        this.index = index;
        if (this.mynum == 1) {
          this.page.name = item;
        }
      },
      getDate() {
        this.$http.get("http://www.tp5vue.com/index.php/index/Task/getIndexDate").then(response => {
          this.task = response.data;
          console.log(this.task);
        }, (response) => {
          console.log("出错了");
        })
      },
      setTime(time) {
        if (typeof(time) == "string") {
          time = time.split(",");
          switch (time.length) {
            case 1:
              time=time[0];
              break;
            case 2:
              time=time[1]+"h "+time[2]+" m";
              break;
            case 3:
              time=time[0]+"d "+time[1]+"h "+time[2]+" m";
              break;
            case 4:
              time=time[1]+"d "+time[2]+"h "+time[3]+" m";
            default:
              break;
          }
        }
        return time;
      }
    },

    mounted() {
      this.getDate();
    },
    computed: {
      result() {
        return this.index;
      },
      getTime() {
        return this.tem;
      }
    },
    watch: {
      mynum: { //当这个属性发生变化是立即调用
        handler() {
          this.page.index = this.mynum;
          if (this.mynum == 1) {
            this.msgModule = ['全部项目', '我负责的', '我参与的']
            if (!this.index) this.index = 0;
            this.page.name = this.msgModule[this.index];
          } else {
            this.msgModule = ['全部', '糖果派对', '水浒传', "黑红梅方", "摇钱树", '明星97'];
          }
        },
        immediate: true
      },
      temp: {
        handler() {
          let temp = this.temp;
          console.log(typeof(temp) == "string");
          console.log(temp);
        },
        immediate: true
      }
    },

  }
</script>

<style>
  /* 第一层 */
  #navigator {
    display: -webkit-flex;
    /* Safari */
    display: flex;
    height: 150px;
    background-color: white;
    justify-content: space-between;
    align-items: center;
  }

  #navigator .naRight {
    width: 20%;
    float: left;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .naRight button {
    background: #0074D9;
    font-size: 15px;
    text-decoration: none;
    height: 60px;
    width: 70px;
    color: #F0F8FF;
    border: 0px;
    position: relative;
    /** 相对布局 **/

  }

  /*按钮点击效果  */
  button:active {
    top: 2px;
  }

  .editButton {
    height: auto;
    width: auto;
    background: none;
    border: 0px;
    position: relative;
  }


  /* 筛选 */
  .screenBtn {
    height: 30px;
    width: 65px;
    background-color: #0074D9;
    border: 0px;
    color: #D2E0E6;
  }

  .taskright button {
    border: 0px;
  }

  #taskMedium {
    height: 600px;
    margin-top: 10px;
    overflow: auto;

  }

  #taskMedium .taskLeft {
    background-color: white;
    width: 10%;
    height: 100%;
    float: left;
    overflow-y: auto;

  }

  #taskMedium .newTaskLeft {
    background-color: white;
    width: 20%;
    height: 100%;
    float: left;
    overflow-y: auto;

  }

  #taskMedium .newTaskLeft ul {
    margin: 0;
    padding: 0;
  }

  #taskMedium .newTaskLeft li {
    list-style-type: none;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  #taskMedium .taskLeft ul {
    margin: 0;
    padding: 0;
  }

  #taskMedium .taskLeft li {
    list-style-type: none;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  #taskMedium .bySelect {
    background-color: #0074D9;
    color: #F0F8FF;
  }

  /* 右边 */
  #taskMedium .taskright {

    margin-left: 12%;
    width: 88%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  #taskMedium .newTaskright {
    margin-left: 20%;
    width: 78%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: row;

  }

  /* 任务格局 */
  .taskright .taskItem {
    display: flex;
    justify-content: space-around;
    background-color: white;
    width: 100%;
    margin-bottom: 10px;
  }

  .taskItem .itemOne {
    width: 60%;
    height: 150px;
  }

  .itemOne .oneTop {
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .itemOne .oneBottom {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .taskItem .itemTwo {
    width: 20%;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #42B983;
    justify-content: center;
  }

  .taskItem .itemThere {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .taskItem .itemFour {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .taskItem button {
    background: none;
  }

  .pItem {
    height: 230px;
    width: 30%;
    background-color: white;
    margin-left: 3%;
    overflow: auto;
  }
</style>
