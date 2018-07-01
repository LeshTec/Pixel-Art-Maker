// Select color input
// Select size input
	var width, height, color;
// When size is submitted by the user, call makeGrid()
	$(documnet).ready(function() {
	$("#sizePicker").submit(function makeGrid(x, y) {
		$("table tr").remove();
		var rows =$("input_height").val();
		var cols = $("input_width").val();
		for (var i = 1; i <= rows; i++) {
			$("table").append("<tr></tr>");
			for (var j = 1; j <=cols; j++){
				$("tr:last").append("<td></td>");
				$("td").attr("class", "cells");
			}
		}
		grid.preventDefault();

	// Adding color to the cells
	$("td").click(function addColor()){
		color = $("#coloPicker").val();

		if ($(this).attr("style")){
			$(this).removeAttr("style")
		} else {
			#(this).attr("style, background-color:" + color);
		}
	}
