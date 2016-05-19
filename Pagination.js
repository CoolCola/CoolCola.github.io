(function($){
	function Pagination(obj,params){
		this.params = {
			pageNo:params.pageNo,
			pageSize:params.pageSize,
			pageNow:params.pageNow,
			url:params.url
		};
		ajax:function(){
			$.ajax({url:params.url,context:obj,success:function(result){

			}});
		}
	}
})(jQuery);





















































