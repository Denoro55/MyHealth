$(function(){({init:function(){var e;(e=$(".slider-item")).length,$(".toggler-item").on("click",function(){var t=$(this).index();e.fadeOut(500),e.eq(t).fadeIn(500),$(".toggler-item").removeClass("toggler-active"),$(this).addClass("toggler-active")})}}).init()});