var numero1,numero2,op,res=0;

$(document).ready(function(){
	$("#calc").click(function(){
		numero1 = parseFloat($("#num1").val());
		numero2 = parseFloat($("#num2").val());
		op = $("#Op").val();
		switch(op)
		{
			case "Suma":
			res = numero1 + numero2;
			break;
			case "Resta":
			res = numero1 - numero2;
			break;
			case "Multiplicacion":
			res = numero1 * numero2;
			break;
			case "Division":
			res = numero1 / numero2;
			break;
			case "Modulo":
			res = numero1 % numero2;
			break;
		}
		$("#label").val(res);
	});
});
