// Select color input
// Select size input
	var width, height, color;
// When size is submitted by the user, call makeGrid()
	$("#sizePicker").submit(function (event)){
		event.preventDefault();
		height = $("inputHeight").val();
		width = $("inputwidth").val();
		makeGrid(height, width);
	}

	function makeGrid(x, y) {
		$("tr").remove();

	// Your code goes here!
		for (var i = 1; 1 <= x; 1++){
			$("#pixelCanvas").append("<tr id=table" + 1 + "></tr>");
			for (var j = 1; j <= y; j++) {
				$("#table" + 1).append("<td></td>");
		}
	}

	// Adding color to the cells
	$("td").click(function addColor()){
		color = $("#coloPicker").val();

		if ($(this).attr("style")){
			$(this).removeAttr("style")
		} else {
			#(this).attr("style, background-color:" + color);
		}
	}