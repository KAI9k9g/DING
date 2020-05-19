<template>
  <div>
    <button type="primary" @click="addTask = true">添加{{taskorproject}}</button>
    <Modal title="添加任务" v-model="addTask" :closable="false" class-name="vertical-center-modal" @on-ok="ok" @on-cancel="cancel">
      <table>
        <tr>
          <td>
            <p><label style="margin-right: 30px;">所属项目</label>
            </p>
          </td>
          <td>
            <i-select v-model="model1" id="project" style="width:150px">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </td>
        </tr>
        <tr>
          <td>
            <p><label style="margin-right: 30px;">所属模块</label>
            </p>
          </td>
          <td>
            <i-select v-model="model1" id="module" style="width:150px;margin-top: 10px;">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </td>
        </tr>
        <tr>
          <td>
            <p><label style="margin-right: 30px;">任务名称</label></p>
          </td>
          <td><Input v-model="pname" placeholder="项目名称" style="width: 300px;margin-top: 10px" /></td>
        </tr>
        <tr>
          <td>描述</td>
          <td><Input v-model="decvalue" type="textarea" :rows="4" style="margin-top: 10px;" placeholder="Enter something..." /></td>
        </tr>
        <tr>
          <td>时间</td>
          <td>
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
          </td>
        </tr>
        <tr>
          <td>
            <label style="margin-right: 30px;">附件</label>
          </td>
          <td>
            <Upload action="//jsonplaceholder.typicode.com/posts/" style="margin-top: 10px">
              <Button icon="ios-cloud-upload-outline">文件上传</Button>
            </Upload>
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
            <CheckboxGroup v-model="title" style="margin-top:10px ;">
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
    </Modal>
  </div>
</template>

<script>
  export default {
    props: {
      "index": "",
    },
    data: function() {
      return {
        addTask: false,
        model1: "",
        pname: '',
        decvalue: '',
        taskorproject: '',
        cityList: [{ //这个是模拟筛选数据
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          }
        ],
        prioty: [1, 2, 3, 4],
        title: [],
      }
    },
    watch: {
      index: {
        handler() {
          if (this.index == 1) {
            this.taskorproject = "项目";
          } else if (this.index == 0) {
            this.taskorproject = "任务";
          }
        },
        immediate: true
      }
    },
    methods: {
      ok() {
        this.$Message.info('点击了确定');
      },
      cancel() {
        this.$Message.info('点击了取消');
      },
    },
  }
</script>

<style>
  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
      top: 0;
    }
  }
</style>
