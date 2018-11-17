$(document).on('click', '.my-add', function () {
	let mother = $(this).closest('.mother');
	let child = $(this).closest('.child').clone();
	
	/**
	 * *********************************************$(this).attr('class').split(" ")[1];*******************************
	 * Below two lines are rquired only because of Other Accused portion and the *
	 * "else" part as well. These parts are not required in general.			 *
	 * ***************************************************************************
	 */
	let classes = $(this).attr('class').split(' ');
	let slno = $(mother.children()[0]).find("input[name='SLNO']").val();
	child.find("input, textarea").val("");
	child.find("select").val("select");
	child.find(".upload, .view, .event-log").hide();
	mother.append(child);
	mother.children().map(function (obj){
		if(!classes.includes('other-accused')) {
			$(mother.children()[obj]).find("input[name='SLNO']").val(slno);
			slno++;
		}
		else {
			$(mother.children()[obj]).find("input[name='SLNO']").val(parseInt(slno)+parseInt(obj));
		}
	});
	
	/**
	 * ************************************************************
	 * This is to initializing the class properties and bind with *
	 * un-rendered(not rendered) objects 						  *
	 * ************************************************************
	 */
	$(".number").keypress(function(event) {
		numberFiledValidate(event);
	});
	jQuery('.datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true,
        format: "dd/mm/yyyy"
    });
});

$(document).on('click', '.my-del', function () {
	let mother = $(this).closest('.mother');
	
	/**
	 * ****************************************************************************
	 * Below two lines are rquired only because of Other Accused portion and the *
	 * "else" part as well. These parts are not required in general.			 *
	 * ***************************************************************************
	 */
	let classes = $(this).attr('class').split(' ');
	let slno = $(mother.children()[0]).find("input[name='SLNO']").val();
	
	if(mother.children().size() == 1) {
		alert("Sorry you cannot remove the last one");
		return;
	}
	let child = $(this).closest('.child').remove();
	mother.children().map(function (obj){
		if(!classes.includes('other-accused')) {
			$(mother.children()[obj]).find("input[name='SLNO']").val(obj+1);
		}
		else {
			$(mother.children()[obj]).find("input[name='SLNO']").val(parseInt(slno)+parseInt(obj));
		}
	});
});