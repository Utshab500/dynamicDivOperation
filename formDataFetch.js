$(".update").click(function(){
	var mother = $(this).parent().parent();
	var formObject = mother.find("form");
	var formData = [];
	formObject.map(function(obj) {
		formData.push($(formObject[obj]).serializeArray());
	});
	console.log(formData);
});