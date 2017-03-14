$(function(){
	$('#js_cloud').cloud({	
		hwratio				: 1.5,		//height/width ratio
		enable				: false,	//enable effect on mouse move
		draggable			: true,		//enable mouse drag
		gravitydriven		: true,		//enable effect on mobile device movement
		template			: 1,		//number of template (0-10) or function
		maxspeed			: 1,		//maximum rotation speed
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
	init();
	$('.star-solid').click(function(){
		if(!isCreated){		
			$('#js_cloud').addClass('animated slideOutUp');
			$('#first-screen').addClass('animated fadeOut');
			fullpageHandler.create();
			isCreated = true;
		}else{
			fullpageHandler.jump(1);
		}
	})
	function someFunction(v){
		if(typeof v == 'undefined') v = 'tag';
		else v = v;
		if(!isCreated){			
			$('#js_cloud').addClass('animated slideOutUp');
			$('#first-screen').addClass('animated fadeOut');
			fullpageHandler.create();
			isCreated = true;
		}else{
			fullpageHandler.jump(v);
		}		
	}
})
var isCreated = false;
var array1 = [
	'img/slice/1/1-1.jpg',
	['img/slice/1/1-2-1.jpg','img/slice/1/1-2-2.jpg'],
	'img/slice/1/1-3.jpg',
	'img/slice/1/1-4.jpg',
	'img/slice/1/1-5.jpg',
	['img/slice/1/1-6-1.jpg','img/slice/1/1-6-2.jpg','img/slice/1/1-6-3.jpg'],

		'img/slice/2/2-1.jpg',
		'img/slice/2/2-2.jpg',
		'img/slice/2/2-3.jpg',
		['img/slice/2/2-4-1.jpg','img/slice/2/2-4-2.jpg'],
		['img/slice/2/2-5-1.jpg','img/slice/2/2-5-2.jpg','img/slice/2/2-5-3.jpg','img/slice/2/2-5-4.jpg'],

		'img/slice/3/3-1.jpg',
		'img/slice/3/3-2.jpg',
		['img/slice/3/3-3-1.jpg','img/slice/3/3-3-2.jpg','img/slice/3/3-3-3.jpg'],
		['img/slice/3/3-4-1.jpg','img/slice/3/3-4-2.jpg','img/slice/3/3-4-3.jpg'],
		['img/slice/3/3-5-1.jpg','img/slice/3/3-5-2.jpg','img/slice/3/3-5-3.jpg'],
		'img/slice/3/3-6.jpg',

    'img/slice/4/4-1.jpg',
    ['img/slice/4/4-2-1.jpg','img/slice/4/4-2-2.jpg','img/slice/4/4-2-3.jpg'],
    'img/slice/4/4-3.jpg',
	'img/slice/4/4-4.jpg',
	
    'img/slice/5/5-1.jpg',
    ['img/slice/5/5-2-1.jpg','img/slice/5/5-2-2.jpg'],
    ['img/slice/5/5-3-1.jpg','img/slice/5/5-3-2.jpg','img/slice/5/5-3-3.jpg','img/slice/5/5-3-4.jpg'],
    'img/slice/5/5-4.jpg',

    'img/slice/6/6-1.jpg',
    'img/slice/6/6-2.jpg',
    'img/slice/6/6-3.jpg',
    'img/slice/6/6-4.jpg',
    'img/slice/6/6-5.jpg',

    'img/slice/7/7-1.jpg',
    'img/slice/7/7-2.jpg',
    'img/slice/7/7-3.jpg',
    'img/slice/7/7-4.jpg',
    'img/slice/7/7-5.jpg'
];
var init = function(){
//	var myArray = eval('(array' + v + ')');	
	var myArray = array1;
	var html = "";
	var destroyer = '<a href="javascript:;" class="js_destory">主菜单</a>';
		
	for(var i=0;i<myArray.length;i++){	
		var _type = typeof(myArray[i]);
		if(_type == 'string'){
			html += '<div class="section id'+i+'" style="background-image:url('+myArray[i]+')"><div class="fp-down"><i class="fa fa-angle-double-down"></i></div><a href="javascript:;" class="js_destory">主菜单</a></div>';
		}else if(_type == 'object'){
			html += '<div class="section id'+i+'" >';
			for(var j=0;j<myArray[i].length;j++){
				html += '<div class="slide" style="background-image:url('+myArray[i][j]+')"></div>';
			}
			html += '<div class="fp-down"><i class="fa fa-angle-double-down"></i></div><a href="javascript:;" class="js_destory">主菜单</a></div>';
		}	
	}
	$('#js_fullpage').append(html);
	//$('#js_cloud').addClass('animated slideOutUp');
	//document.getElementById('js_cloud').addEventListener("webkitAnimationEnd",fullpageHandler.init());	
}
var fullpageHandler = {
	create:function(){
		
		setTimeout(function(){
			$('#js_fullpage').removeClass('hide').fullpage({
				css3:true,
				scrollingSpeed:300,
				loopHorizontal:true,
				continuousHorizontal:true
			});
		var	arrowLeft = '<i class="fa fa-angle-double-left"></i>',
			arrowRight = '<i class="fa fa-angle-double-right"></i>',
			arrowDown = '<i class="fa fa-angle-double-down"></i>';
//			$('.fp-next').html(arrowRight);
//			$('.fp-prev').html(arrowLeft);
		},350);
		setInterval(function(){
			$.fn.fullpage.moveSlideRight();
		}, 2000);
	},
	jump:function(v){		
		$('#js_cloud').removeClass('slideInDown').addClass('slideOutUp');
		$('#first-screen').removeClass('fadeIn').addClass('animated fadeOut');
		setTimeout(function(){
			$('#js_fullpage').removeClass('animated slideOutDown');
			switch(v){
				case 1:
					$.fn.fullpage.moveTo(1);
					break;
				case 2:
					$.fn.fullpage.moveTo(7);
					break;
				case 3:
					$.fn.fullpage.moveTo(12);
					break;
				case 4:
					$.fn.fullpage.moveTo(18);
					break;
				case 5:
					$.fn.fullpage.moveTo(22);
					break;
				case 6:
					$.fn.fullpage.moveTo(26);
					break;
				case 7:
					$.fn.fullpage.moveTo(31);
					break;
			}			
		},350)
	},
	destory:function(){
		$.fn.fullpage.destroy('all');
	}
}
var destoryFullPage = (function(){
	$(document).on('click','.js_destory',function(){
		$('#js_fullpage').addClass('animated slideOutDown');
		$('#js_cloud').removeClass('slideOutUp').addClass('slideInDown');
		$('#first-screen').removeClass('fadeOut').addClass('animated fadeIn');
	})
})()