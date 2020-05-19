<template>
  <div id="actionMain">
    <div id="actionLeft">
      <span style="font-size: 20px;"> 今日剩余工作共计</span>
      <div class="myTask">
        <div class="taskItem">
          <div style="display: flex;flex-direction: column;">
            <span style="font-size: 20px; color: #000000;text-align: center;">10</span>
            <span style="font-size: 20px;"> 我的任务</span>
          </div>
          <Tag type="border" color="yellow">无逾期任务</Tag>
        </div>
        <div class="taskItem">
          <div style="display: flex;flex-direction: column;">
            <span style="font-size: 20px; color: #000000;text-align: center;">10</span>
            <span style="font-size: 20px;"> 我的任务</span>
          </div>
          <Tag type="border" color="yellow">逾期任务10</Tag>
        </div>
      </div>
    </div>
    <div id="actionRight">
      <Tabs value="name1">
        <TabPane label="我的通知" name="name1">
          <div>
            <span style="font-size: 15px;">4月13日09:01</span>
            <span style="font-size: 15px; margin-left:20px;">缩量</span>
            <span style="font-size: 15px; margin-left:20px;">解决了卡五星</span>
            <span style="font-size: 15px; margin-left:20px;">自动听牌</span>
          </div>
        </TabPane>
        <TabPane label="最新动态" name="name2">
          <div>
            <span style="font-size: 15px;">4月13日09:01</span>
            <span style="font-size: 15px; margin-left:20px;">缩量</span>
            <span style="font-size: 15px; margin-left:20px;">解决了卡五星</span>
            <span style="font-size: 15px; margin-left:20px;">自动听牌</span>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
</script>

<style>
  #actionLeft {
    width: 50%;
    height: 100%;
    float: left;
    overflow: auto;
  }

  #actionLeft .myTask {
    height: 100px;
    width: 50%;

    display: flex;
    justify-content: space-between;
  }

  .taskItem {
    width: 55%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #actionRight {
    margin-left: 60%;
    width: 40%;
    height: 100%;
    /*  overflow: auto;
    display: flex; */
  }

  #actionMain {
    height: 700px;
    with: 100%;
    padding: 0;
    margin: 0;
  }
</style>
