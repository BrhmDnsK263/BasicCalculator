document.addEventListener('DOMContentLoaded', function(){

	var resultado = document.getElementById("resultado");
	var variableA;
	var variableB;
	var operacion = ""
	var finalizado;	

	function limpiar(){
		resultado.textContent = ""
		finalizado=false
	}

	function resetear(){
		resultado.textContent = ""
		variableA = 0;
		variableB = 0;
		operacion = "";
	}
	function resolver(){
	  var res = 0;
	  switch(operacion){
	    case "+":
	      res = parseFloat(variableA) + parseFloat(variableB);
	      break;
	    case "-":
	        res = parseFloat(variableA) - parseFloat(variableB);
	        break;
	    case "*":
	      res = parseFloat(variableA) * parseFloat(variableB);
	      break;
	    case "/":
	      if(variableB==0){
	      	res = "Infinity"
	      	break;
	      }
	      res = parseFloat(variableA) / parseFloat(variableB);
	      break;
	  }
	  resetear();
	  resultado.textContent = res;
	  finalizado = true;
	}
	

	document.querySelectorAll(".numero").forEach(function(but){
		but.onclick = function(){
			if(finalizado){
				limpiar();
			}			
			resultado.textContent = resultado.textContent + but.innerText
		}
	})
	
	document.querySelector("#decimal").onclick = function(){
		if(resultado.innerText.length == 0){

		}
		else if (resultado.innerText.indexOf('.') != -1){

		}
		else{
			resultado.textContent = resultado.textContent + "."
		}
	}

	document.querySelectorAll(".operator").forEach(function(but){
		but.onclick = function(){
			if(but.innerText=="C"){
				resetear()
			}
			else if(but.innerText=="="){
				variableB = resultado.textContent
				resolver()
			}
			else{
				if(operacion!=""){
					operacion=but.innerText
				}else{
					variableA=resultado.textContent
					operacion=but.innerText
					limpiar()
				}
			}

		}
	})
});