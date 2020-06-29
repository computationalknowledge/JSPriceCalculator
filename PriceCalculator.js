<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<p> TO DO: Add CSS so the user's final selections appears in a CSS Flex
    <hr>
<form id="carform" autocomplete="off">
	<label>
		<input id="sunroof" type="checkbox" value="750" data-itemname="Sunroof">
		Sunroof: $700
	</label>
    <hr>
	<label>
		<input id="gps" type="checkbox" value="5000" data-itemname="Built-in GPS">
		Built-in GPS: $500
	</label>
    <hr>
    <label>
		<input id="Power Steering" type="checkbox" value="1000" data-itemname="Power Steering">
		Power Steering: $1000
	</label>


</form>
<hr>
<div>
	Selections:
	<div id="selections"></div>
	
	Total Price: <span id="price"></span>
</div>

<script>
var price = 20000;
document.getElementById('price').innerHTML = price;

var options = document.getElementById('carform').querySelectorAll('input');
for(var i=0; i<options.length; i++){
	options[i].onclick = handleOption;
}

function handleOption(){
	var itemPrice = Number(this.value);
	if(this.checked){
		price += itemPrice;
	}
	else{
		price -= itemPrice;
	}

	showSelections();
	document.getElementById('price').innerHTML = price;
}

function showSelections(){
	var list = [];
	var checkedOnes = document.getElementById('carform').querySelectorAll('input:checked');
	for(var i=0; i<checkedOnes.length; i++){
		var itemname = checkedOnes[i].getAttribute('data-itemname');
		list.push(itemname);
	}
	document.getElementById('selections').innerHTML = list.join('<br>');
}
</script>


</body>
</html>
