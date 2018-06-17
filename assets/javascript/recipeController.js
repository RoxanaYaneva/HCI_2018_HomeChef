$(function () {
	$("#addImageBtn").click(function (e) {
		$("#addImage").click();
	});

	$("#addVideoBtn").click(function (e) {
		$("#addVideo").click();
	});

	$("#add").on("click", function () {
		event.preventDefault();
		var name = $("#name").val();
		var author = $("#author").val();
		var instructions = $("#instructions").val();
		var ingredients = $("#ingredients").val();
		if (name && author && instructions && ingredients) {
			$("div.addInfo").eq(1).show();
			$("div.addInfo").eq(0).hide();
			setInterval(function () { location.replace("account.html") }, 1400);
		} else {
			$("div.addInfo").eq(0).show();
			$("div.addInfo").eq(1).hide();
		}
	})

	$("#competition").on("click", function(){
		event.preventDefault();
		var comp=$("#comp option:selected").val();
		$("div.addInfo span").text(comp);
		$("div.addInfo").eq(0).show();
		setInterval(function () { location.replace("account.html") }, 2000);
	})


	$("#commentButton").on('click', function(){
		event.preventDefault();
		var textarea=$('#comment').val();
		if(textarea!=''){
			$("div.addInfo").eq(0).show();
			$('#comment').val('');
			setInterval(function () {  $("div.addInfo").eq(0).hide();}, 1400);
		}
	})


	$("#search").on("click", function(){
		if($("#filter").val()){
			$("#searchResults").show();
			$("#mainSection").hide();
		}
	})


	$("input[type=checkbox]").on('click', function(){
		$("#searchResults").show();
		$("#mainSection").hide();
	})

	$(".popularDiv h3:first-of-type").on("click", function(){
		$("#mainSection").show();
		$("#mainSection>div").eq(2).hide();
		$("#mainSection>div").eq(1).show();
		$("#searchResults").hide();
	})

	$(".popularDiv h3:last-of-type").on("click", function(){
		$("#mainSection").show();
		$("#mainSection>div").eq(1).hide();
		$("#mainSection>div").eq(2).show();
		$("#searchResults").hide();
	})


})

