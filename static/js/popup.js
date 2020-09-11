var overlay = document.getElementById('overlay'),//variables, capa del menu
	popup = document.getElementById('popup'),//clase
	animacion1=document.getElementById('ani'),//anamicaciones imagenes
	texDia=document.getElementById('fecha'),//hora
	animacion=document.getElementById('ani1'),
	texto=document.getElementById('encender');//boton 
	


var texHora,hoy,hora,boot,Min,Hor;
texHora=null;

function Mostrar(){
	//relaciono a boton confihuracion, abre menu poput para q se enucnrte visibel
	overlay.classList.add("active")
	popup.classList.add("active")
	
}

function Cerrar(){//retira esa clse
	overlay.classList.remove('active');
	popup.classList.remove('active');
	enviarH();
}

function Tiempo(){//funcion para calcular la hora y actualizar
	
	hoy=new Date();
	if(hoy.getHours()<10){
		Hor="0"+hoy.getHours();
	}else{
		Hor=hoy.getHours();
	}
	if(hoy.getMinutes()<10){
		Min="0"+hoy.getMinutes();
	}else{
		Min=hoy.getMinutes();
	}
	hora=Hor+":"+Min;
	
	if(hora==texHora){
		animacion1.src="/static/images/reg1.gif";
		boot=1;
	}else{
		animacion1.src="/static/images/reg.png"
		
	}

}


window.onload = function() {
	
	setInterval(Tiempo, 1000);//ms

  }

