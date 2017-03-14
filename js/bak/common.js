$(function(){
	$('#js_cloud').cloud({	
		hwratio				: 1.5,		//height/width ratio
		enable				: false,	//enable effect on mouse move
		draggable			: true,		//enable mouse drag
		gravitydriven		: true,		//enable effect on mobile device movement
		template			: 1,		//number of template (0-10) or function
		maxspeed			: 5,		//maximum rotation speed
		attenuation			: 0.1,		//attenuation
		perspective			: 1,		//perspective koefficient
		sensitivityx		: 0.02,		//if sensitivity=0 no effect will be applied
		sensitivityy		: 0.02,		//negative values invert mouse			
		fadein				: 400,		//fadein on start (in ms)
		fog					: 0.3,		//fog index
		zsort				: true,		//sort by z
		fps					: 60,		//default fps limit
		fpsmobile			: 60,		//default fps limit on mobile devices
		scale				: 0.8,		//scale template
		imgscale			: 0.7,		//scale images (works only if they are direct children of cloud)
		onclick             : someFunction	//function to execute on tag click
	}); 
	function someFunction(v){
		if(typeof v == 'undefined') v = 'tag';
		else v = v;
		init(v);
	}
})
var array1 = [
	'img/slice/1/1-1.jpg',
	['img/slice/1/1-2-1.jpg','img/slice/1/1-2-2.jpg'],
	'img/slice/1/1-3.jpg',
	'img/slice/1/1-4.jpg',
	'img/slice/1/1-5.jpg',
	['img/slice/1/1-6-1.jpg','img/slice/1/1-6-2.jpg','img/slice/1/1-6-3.jpg']
	],
	array2 = [
		'img/slice/2/2-1.jpg',
		'img/slice/2/2-2.jpg',
		'img/slice/2/2-3.jpg',
		['img/slice/2/2-4-1.jpg','img/slice/2/2-4-2.jpg'],
		['img/slice/2/2-5-1.jpg','img/slice/2/2-5-2.jpg','img/slice/2/2-5-3.jpg','img/slice/2/2-5-4.jpg']
	],
	array3 = [
		'img/slice/3/3-1.jpg',
		'img/slice/3/3-2.jpg',
		['img/slice/3/3-3-1.jpg','img/slice/3/3-3-2.jpg','img/slice/3/3-3-3.jpg'],
		['img/slice/3/3-4-1.jpg','img/slice/3/3-4-2.jpg','img/slice/3/3-4-3.jpg'],
		['img/slice/3/3-5-1.jpg','img/slice/3/3-5-2.jpg','img/slice/3/3-5-3.jpg'],
		'img/slice/3/3-6.jpg'
	],
	array4 = [
    'img/slice/4/4-1.jpg',
    'img/slice/4/4-2.jpg',
    'img/slice/4/4-3.jpg'
],
array5 = [
    'img/slice/5/5-1.jpg',
    ['img/slice/5/5-2-1.jpg','img/slice/5/5-2-2.jpg'],
    ['img/slice/5/5-3-1.jpg','img/slice/5/5-3-2.jpg','img/slice/5/5-3-3.jpg','img/slice/5/5-3-4.jpg'],
    'img/slice/5/5-4.jpg'
],
array6 = [
    'img/slice/6/6-1.jpg',
    'img/slice/6/6-2.jpg',
    'img/slice/6/6-3.jpg',
    'img/slice/6/6-4.jpg',
    'img/slice/6/6-5.jpg'
],
array7 = [
    'img/slice/7/7-1.jpg',
    'img/slice/7/7-2.jpg',
    'img/slice/7/7-3.jpg',
    'img/slice/7/7-4.jpg',
    'img/slice/7/7-5.jpg'
];
var init = function(v){
	var myArray = eval('(array' + v + ')');	
	var html = "";
	var destroyer = '<a href="javascript:;" id="js_destory">返回</a>';
		
	for(var i=0;i<myArray.length;i++){	
		var _type = typeof(myArray[i]);
		if(_type == 'string'){
			html += '<div class="section" style="background-image:url('+myArray[i]+')"><div class="fp-down"><i class="fa fa-angle-double-down"></i></div></div>';
		}else if(_type == 'object'){
			html += '<div class="section">';
			for(var j=0;j<myArray[i].length;j++){
				html += '<div class="slide" style="background-image:url('+myArray[i][j]+')"></div>';
			}
			html += '<div class="fp-down"><i class="fa fa-angle-double-down"></i></div></div>';
		}	
	}
	$('#js_fullpage').append(html).addClass('animated fadeInUp');
	$('body').append(destroyer);
	$('#js_cloud').addClass('animated slideOutUp');
	document.getElementById('js_cloud').addEventListener("webkitAnimationEnd",fullpageHandler.init());	
}
var fullpageHandler = {
	init:function(){
		setTimeout(function(){
			$('#js_fullpage').removeClass('animated fadeInUp').fullpage({
				css3:true,
				scrollingSpeed:300,
				loopHorizontal:false
			});
		var	arrowLeft = '<i class="fa fa-angle-double-left"></i>',
			arrowRight = '<i class="fa fa-angle-double-right"></i>',
			arrowDown = '<i class="fa fa-angle-double-down"></i>';
			$('.fp-next').html(arrowRight);
			$('.fp-prev').html(arrowLeft);
		},350);
	},
	destory:function(){
		$.fn.fullpage.destroy('all');
	}
}
var destoryFullPage = (function(){
	$(document).on('click','#js_destory',function(){
		fullpageHandler.destory();
		$('#js_fullpage').empty();
		$('#js_destory').remove();
		$('#js_cloud').removeClass('slideOutUp').addClass('slideInDown');
	})
})()