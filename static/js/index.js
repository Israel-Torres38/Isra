// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);7
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  
  var info,activar,texHora,valor,Sactivar,HCom,Ntank;
  
  info=["","",""];
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "iatorres@hotmail.es",
    password: "israel123torres",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("iatorres@hotmail.es/test");

	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    val=document.getElementById('meter5');
    console.log(message.payloadString);
    info=message.payloadString.split(",");
    activar=parseInt(info[0]);//valor de activacin
    valor=parseInt(info[1]);//valor de hora
    val.value=valor;
    Activar();
  }

  function ObtenerDatos(){
	
    var hora1=document.getElementById('HoraS').value;
    
	texHora=hora1;
	if(texHora==""){
		alert("Ingrese Todos los Parámetros")
	}else{
		texDia.innerText=texHora;
		Cerrar();
	}

		
}

function Activar(){
    
	if((texto.innerText=='Encender'|| activar==1)&&(valor!=0)){
		texto.innerText=" Apagar ";
        animacion.src="/static/images/reg1.gif";
        message = new Paho.MQTT.Message("1,"+texHora);
        message.destinationName = "iatorres@hotmail.es/test1";
        client.send(message);
    }
    else
	{
		texto.innerText='Encender';
        animacion.src="/static/images/reg.png"
        message = new Paho.MQTT.Message("0,"+texHora);//cambia el nombre a apagar
        message.destinationName = "iatorres@hotmail.es/test1";
        client.send(message);
	}
}
function enviarH(){
    message = new Paho.MQTT.Message("0,"+texHora);//q este descativado y hora
	message.destinationName = "iatorres@hotmail.es/test1";
	client.send(message);
}

  
  
