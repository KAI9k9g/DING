<template>

</template>

<script>
  export default {

    created()
    {

      this._isMobile()
    },
    methods: {
      _isMobile() {
          let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
          return flag;
      },

    },
    beforeCreate()
    {
      let dns = window.location.hostname;//获取IP地址
      let urls = document.URL;
      this.$http.post
      (
        "http://www.tp5vue.com/index.php/index/Ding_Ding_Talk/getParems" ,// 请求url
        {url:urls},
		{emulateJSON:true}//是否设置跨路由
	  ).then(function(res){
		  console.log(res.data.url);
	  })
    }
  }
</script>

<style>
</style>
