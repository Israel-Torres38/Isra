import paho.mqtt.client as mqtt
import time
import datetime

x=datetime.datetime.now()


def on_message(client,obj,msg):
    print(msg.topic+" "+str(msg.qos)+" "+msg.payload.decode('utf-8'))

topic="iatorres@hotmail.es/test1"
mqttc=mqtt.Client()
mqttc.on_message=on_message
mqttc.username_pw_set("iatorres@hotmail.es","israel123torres")
mqttc.connect("maqiatto.com",1883)
mqttc.subscribe(topic,0)
rc=0
print("Se ha Establecido Conexion")
i=0    
while rc==0:
  time.sleep(2)
  rc=mqttc.loop()
  mqttc.publish("iatorres@hotmail.es/test", "Hora="+str(x.hour))
  i=i+1

	
	
    
