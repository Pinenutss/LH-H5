var appId, timestamp, nonceStr, signature;
var shareUrl = encodeURIComponent(window.location.href);
var share_title = "「湖岸观星台」·闪耀麓湖水岸！",
	share_des = "天玑幻影·天星月影，麓湖式大平层重装登场 ",
	share_link = "http://luxelakes.cdzmd.com/h5/lustars/index.html",
	share_icon = "http://luxelakes.cdzmd.com/h5/lustars/img/icon.png";
$(function () {
    $.when($.ajax({
            url: "/Home/GetJsSdkConfig/?shareurl=" + shareUrl,
            type: "get",
            data: "json",
            success: function(data) {
                appId = data.AppId;
                timestamp = data.timestamp;
                nonceStr = data.nonceStr;
                signature = data.signature;
            },
            error: function() {
                //alert("网络错误，请稍后再试！");
            }
        })
    ).done(function() {

        //微信JS-SDK权限验证配置
        wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'checkJsApi', //判断当前客户端是否支持指定JS接口
                'onMenuShareTimeline', //分享朋友圈接口
                'onMenuShareAppMessage', //分享给朋友接口，如需调用其他接口，依次在后面添加即可
                'onMenuShareQQ', //分享到QQ
                'onMenuShareQZone' //分享到QZone
            ]
        });
        wx.ready(function() {
            wx.checkJsApi({
                jsApiList: [
                    'onMenuShareAppMessage', //分享朋友接口,如需调用其他接口，依次在后面添加即可
                    'onMenuShareTimeline', //分享给朋友圈接口，如需调用其他接口，依次在后面添加即可
                    'onMenuShareQZone', //分享到QZone
                    'onMenuShareQQ' //分享到QQ
                ],
                success: function(res) {
                    //ShareAppMessageFlag = res.checkResult.onMenuShareAppMessage;
                    //ShareTimelineFlag = res.checkResult.onMenuShareTimeline;
                }
            });
            //显示右上角菜单按钮
            //wx.showOptionMenu();wx.showAllNonBaseMenuItem();??

            wx.onMenuShareAppMessage({
                title: share_title,
                link: share_link,
                imgUrl: share_icon,
                desc: share_des,
                //trigger: function () {
                //    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                //},
                success: function() {
                    //$.ajax({
                    //    type: "POST",
                    //    url: "/Campaign/Campaign/UpdateShareNum/",
                    //    dataType: "json",
                    //    data: { "id": cpid, shareType: 1, HasShare: false },
                    //    success: function (res) {
                    //    }
                    //});
                }
            });


            wx.onMenuShareTimeline({
                title: share_title,
                link: share_link,
                imgUrl: share_icon,
                //trigger: function () {

                //},
                success: function() {
                    //$.ajax({
                    //    type: "POST",
                    //    url: "/Campaign/Campaign/UpdateShareNum/",
                    //    dataType: "json",
                    //    data: { "id": cpid, shareType: 2, HasShare: HasShare },
                    //    success: function (res) {
                    //    }
                    //});
                }
            });
            //分享到QQ
            wx.onMenuShareQQ({
                title: share_title,
                link: share_link,
                imgUrl: share_icon,
                desc: share_des,
                success: function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQZone({
                title: share_title,
                link: share_link,
                imgUrl: share_icon,
                desc: share_des,
                success: function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function() {
                    // 用户取消分享后执行的回调函数
                }
            });

        });
    });


});