$(function(){
	$("#addImageBtn").click(function(e) {
		$("#addImage").click();
	});
	
	$("#addVideoBtn").click(function(e) {
		$("#addVideo").click();
	});
		
	$("#add").on("click", function(){
		event.preventDefault();
		var name=$("#name").val();
		var author=$("#author").val();
		var instructions=$("#instructions").val();
		var ingredients=$("#ingredients").val();
		if (name && author && instructions && ingredients){
			alert("Вашата рецепта беше добавена успешно!");
			location.replace("account.html")
		}else {
			alert("Моля, попълнете всички полета!");
		}
	})	
})

