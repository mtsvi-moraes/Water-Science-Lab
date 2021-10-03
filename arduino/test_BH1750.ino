#include <Wire.h> //INCLUSÃO DE BIBLIOTECA
#include <BH1750.h> //INCLUSÃO DE BIBLIOTECA

BH1750 lightMeter; //CRIA UMA INSTÂNCIA

void setup(){
  Serial.begin(9600); //INICIALIZA A SERIAL
  Wire.begin(); //INICIALIZA O I2C BUS
  lightMeter.begin(); //INICIALIZA A MEDIÇÃO DE LUMINOSIDADE
}

void loop() {
  float lux = lightMeter.readLightLevel(); //VARIÁVEL RECEBE O VALOR DE LUMINOSIDADE MEDIDO
  Serial.print("Luminosidade: "); //IMPRIME O TEXTO NA SERIAL
  Serial.print(lux); //IMPRIME NA SERIAL O VALOR DE LUMINOSIDADE MEDIDO
  Serial.println(" lux"); //IMPRIME O TEXTO NA SERIAL
  delay(1000); //INTERVALO DE 1 SEGUNDO
}
