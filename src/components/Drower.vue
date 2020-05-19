<template>
  <div>
    <button type="submit"><img src="../assets/module.png" @click="value1 = true" type="primary"></button>
    <Drawer :closable="false" width="640px" v-model="value1">

      <div class="top1">
        <span>德胜麻将/卡五星麻将</span>
        <button class="topBtn">
          <Icon type="ios-remove-circle" style="width:15px;height: 15px;" />
        </button>
      </div>
      <hr />
      <div class="top1">
        <div class="inner">
          <span style="color: #18B566;">进行中</span>
          <div class="left">
            <div style="background-color: gray;color:white;font-size: 15px; width: 20px; height: 20px; text-align: center;">1</div>
            <span style="margin-left:5px;font-size: 15px;">例子一</span>
          </div>
        </div>
        <Button type="primary">完成</Button>
      </div>
      <table>
        <tr>
          <td><label style="margin-right: 30px;">时间:</label></td>
          <td rolspan="2">
            <div class="left">
              <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
              <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </div>
          </td>
          <td>
            <div style="color: #42B983; "><img src="../assets/time.png" /> 4h2m</div>
          </td>
        </tr>
        <tr>
          <td>描述</td>
          <td width="250px"><Input v-model="decvalue" type="textarea" :rows="4" :cols="5" style="margin-top: 10px;"
              placeholder="Enter something..." /></td>
        </tr>
        <tr>
          <td><label style="margin-right: 30px;">附件:</label></td>
          <td>
            <div class="unleft">
              <label style="margin-right: 30px;">http://localhost:8080/#/</label>
              <label style="margin-right: 30px;">http://localhost:8080/#/</label>
              <Upload action="//jsonplaceholder.typicode.com/posts/" style="margin-top: 10px">
                <Button icon="ios-cloud-upload-outline">添加附件</Button>
              </Upload>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label style="margin-right: 30px;">优先级</label>
          </td>
          <td>
            <i-select v-model="model1" id="project" style="width:150px">
              <i-option v-for="item in prioty" :value="item">{{ item }}</i-option>
            </i-select>
          </td>
        </tr>
        <tr>
          <td>
           <label style="margin-right: 30px;">标签</label>
          </td>
          <td>
            <CheckboxGroup v-model="value" style="margin-top:10px ;">
              <Checkbox label="香蕉" border></Checkbox>
              <Checkbox label="苹果" border></Checkbox>
              <Checkbox label="西瓜" border></Checkbox>
            </CheckboxGroup>
          </td>
        </tr>
        <tr>
          <td>
            <label style="margin-right: 30px;">指派对象</label>
          </td>
          <td>
            <Button type="primary" shape="circle">所梁</Button>
            <Button type="primary" shape="circle">+</Button>
          </td>
        </tr>
      </table>
      <hr />
      <div class="left">
        <span style="margin: 15px;">09:34</span>
        <span style="margin: 15px;">哈哈</span>
        <span style="margin: 15px;">创建了任务</span>
      </div>
    </Drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: false,
        topName: "德胜麻将/卡五星",
        decvalue: '',
        model1: '',
        prioty: [1, 2, 3, 4],
        value:[],
      }
    },
    methods:{
    }
  }
</script>

<style>
  .top1 {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
  }

  .top1 .inner {
    display: flex;
    flex-direction: column;
  }

  .left {
    display: flex;
    flex-direction: row;
  }

  .unleft {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .topBtn {
    border: none;
    background: none;
    position: relative;
  }

  /*按钮点击效果  */
  button:active {
    top: 2px;
  }

</style>
