/*
* @Author: name
* @Date:   2019-03-05 11:33:20
* @Last Modified by:   name
* @Last Modified time: 2019-03-05 11:35:47
*/

//获取首页
function getIndexData() {
    $.ajax({
        async: false,
        type: "get",
        url: host + api_home,
        data: {},
        success: function(msg) {
            var data = JSON.parse(msg);
            var html = '';
            for(i = 0; i < data.length; i++){

            }
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
        }
    });
}





//获取公司动态类型
function getActiveTypeData() {
    $.ajax({
        async: false,
        type: "post",
        url:"http://hyu6209260001.my3w.com/public/index/api/active_type_api",
        // url:"47.110.254.11:80",
        data: {
        },
        success: function(msg) {
        var data = JSON.parse(msg);
        if (data.msg == 1) {
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取公司动态列表
function getActiveData() {
    $.ajax({
        async: false,
        type: "post",
        url:"http://hyu6209260001.my3w.com/public/index/api/active_api",
        // url:"47.110.254.11:80",
        data: {
        },
        success: function(msg) {
        var data = JSON.parse(msg);
        if (data.msg == 1) {
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取招聘列表
 function getJobData() {
    $.ajax({
        async: false,
        type: "post",
        url:"http://hyu6209260001.my3w.com/public/index/api/job_api",
        // url:"47.110.254.11:80",
        data: {
        },
        success: function(ret) {
        console.log(ret);
        var data = JSON.parse(ret);
        if (data.ret == 1) {
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown) {
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}