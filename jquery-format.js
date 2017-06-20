(function($){
	var methods = {
		init:function(option) {
			//绑定名称空间为'tooltip'的reposition到window对象的resize事件上
			return this.each(function(){
				$(window).bind('resize.tooltip',methods.repostion);
				//使用jQuery data方法对每个元素跟踪变量
				var $this = $(this),
					data = $this.data('tooltip'),
					tooltip = $('<div/>',{
						text:$this.attr('title');
					});
				if (!data) {
					$this.data('tooltip',{
						target:$this,
						tooltip:tooltip
					});
				}
			});
			
		},
		destory:function(){
			//移除本插件对所有事件的绑定
			return this.each(function(){
				$(window).unbind('.tooltip');
				var $this = $(this),
					data = $this.data('tooltip');

				data.tooltip.remove();
				$this.removeData('tooltip');
			});
		},
		show:function(){

		},
		hide:function(){

		},
		update:function(content){

		}
	};
	$.fn.tooltip = function(method) {
		if (method[method]) {
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || !method) {
			return method.init.apply(this,arguments);
		} else {
			$.error('Method ' + method + 'does not exist on jQuery.tooltip');
		}
	};
})(jQuery);