function comprobarTelefono(elemento){
	var esValido=false;
		if(comprobarNumero(elemento)){
			if(comprobarLongitud(elemento,9)){
				if(elemento.value.charAt(0)==6 || elemento.value.charAt(0)==7 || elemento.value.charAt(0)==9){
					elemento.parentNode.className='form-group col-5 is-valid';
					esValido = true;
			}else{
					elemento.parentNode.className='form-group col-5 is-invalid';
					esValido=false;
				}
			}else{
				esValido=false;
				elemento.parentNode.className='form-group col-5 is-invalid';
			}
		}else{				
			elemento.parentNode.className='form-group col-5 is-valid';
			esValido=false;
		}
	if(!esValido){
		elemento.nextSibling.className='text-danger';
		elemento.className = "form-control is-invalid";
	}else{
		elemento.nextSibling.className='text-danger d-none';
        elemento.className = 'form-control is-valid';
	}
	console.log(esValido);
	return esValido;
}


function comprobarEmail(elemento) {
    let valido = false;
    if (elemento.value != "") {
        const expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expresion.test(elemento.value)) {
            elemento.parentNode.className = 'form-group col-5 is-invalid';
            valido = false;
        } else {
            elemento.parentNode.className = 'form-group col-5 is-valid';
            valido = true;
        }
    } else {
        elemento.parentNode.className = 'form-group col-5 is-invalid';
        valido = false;
    }
    if (!valido) {
        elemento.nextSibling.className = 'text-danger';
		elemento.className = 'form-control is-invalid'
        
    } else {
        elemento.nextSibling.className = 'text-danger d-none';
        elemento.className = 'form-control is-valid';
    }

	console.log(valido);
    return valido;
}

function comprobarNumero(elemento){
	var esNumero=false;
	if(elemento.value!=""){
		if(isNaN(parseInt(elemento.value))){
			esNumero=false;
			elemento.parentNode.className='form-group col-5 is-invalid';
		}else{
			elemento.parentNode.className='form-group col-5 is-valid';
			esNumero=true;
		}
		if(!esNumero){
			elemento.nextSibling.className='text-danger';
			elemento.className = 'form-control is-invalid'
		}else{
			elemento.nextSibling.className='text-danger d-none';
			elemento.className = 'form-control is-valid'

		}
		console.log(esNumero);
	}
	return esNumero;
}

function comprobarLongitud(elemento,longitudRequerida){
	var esValida=true;
	if(elemento.value!="")
		if(elemento.value.length !== longitudRequerida ){
			elemento.parentNode.className='form-group col-5 is-invalid';
			esValida=false;
		}else
			elemento.parentNode.className='form-group col-5 is-valid';
	else{
		elemento.parentNode.className='form-group col-5 is-invalid';
		esValida=false;
	}
	if(!esValida){
		elemento.nextSibling.className='text-danger';
		elemento.className = 'form-control is-invalid'

	}else{
		elemento.nextSibling.className='text-danger d-none';
		elemento.className = 'form-control is-valid'
	}

	console.log(esValida);
	return esValida;
}

function comprobarNulo(elemento){
	var esValido=false;
	if(elemento.value==""){
		elemento.parentNode.className='form-group col-5 has-error has-feedback';
		esValido=false;
	}else{
		elemento.parentNode.className='form-group col-5 has-success has-feedback';
		esValido=true;
	}
	if(!esValido){
		elemento.nextSibling.className='text-danger';
		elemento.className = 'form-control is-invalid'
	}else{
		elemento.nextSibling.className='text-danger d-none';
        elemento.className = 'form-control is-valid';
	}
}