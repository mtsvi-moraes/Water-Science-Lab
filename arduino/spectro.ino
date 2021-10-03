//#include <Keyboard.h>

//arduino Uno
/*
const int b = 3;
const int r = 5;
const int g = 6;
#define sinal A0
*/

//arduino nano

const int b = 11;
const int r = 10;
const int g = 9;
#define sinal A7

#define tamanho 13
int lista[tamanho];

int i = 1;//17
String texto = "";
boolean LUZ(int i);
int moda(int v[]);

int wait = 18;//48;//2;
//83;//82;//9;
int captura = 0;
int valor;

void setup() { 
  pinMode(b, OUTPUT);
  pinMode(r, OUTPUT);
  pinMode(g, OUTPUT);
  pinMode(sinal, INPUT);
  Serial.begin(9600);
  
  //Inicializa a Emulacao do Teclado no Arduino Pro Micro
  //Keyboard.begin();
}

void loop (){

  //Keyboard.print("AAAA");
  //Keyboard.press(KEY_RETURN);
  //Keyboard.release(KEY_RETURN);

  if(i==1){
    LUZ(i);
    i=5;
  }
  else if (i==5){
    LUZ(i);
    wait = 12;
    i = 17;
  }
  else if (i==17){
    LUZ(i);
    wait = 2;
    i = 0;
  }
}

boolean LUZ(int i){
  
  bool fim = false;
  bool teste = true;
  int val = 0;
  int red = 255;
  int green = 0;
  int blue = 0;
  int count = 0;
  
//9
//15  17 19
//130,182,235
//77  82  87
//27 28 31 32 33  34 
//ruim 1,3, 10 e 39

  //VERFMELHO
  analogWrite(r, red);
  analogWrite(g, green);
  analogWrite(b, blue);  

  while(teste){
    delay(wait);
    if(count==50){
      count=0;
      //serial
      Serial.println(texto);
      texto = "";
    }
    count++;


    for (int i=0; i<tamanho; i++){
      int valor = analogRead(sinal);
      lista[i] = valor;
    }
    int captura = moda(lista);
    //captura = analogRead(sinal);
    texto = texto + captura+";";//+"\t";
    //plot
    //Serial.println(captura);
    //Serial.println((String)" R: "+red+"  G: "+green+"  B: "+blue+" CAPTURA: "+analogRead(sinal));
    //Serial.println((String)" R: "+red+"  G: "+green+"  B: "+blue+" CAPTURA: "+analogRead(sinal) + " count: "+count);// + " texto "+texto);
    delay(wait);

    //AMARELO
    if(red==255 && green<255 && blue==0){
      green=val;
      val= val+i>255 ? 255 : val+i;
      analogWrite(g, green);
    }
    //VERDE
    if(red>0 && green==255 && blue==0){
      red=val;
      val= val-i<0 ? 0 : val-i;
      analogWrite(r, red);
    }
    //CIANO
    if(red==0 && green==255 && blue<255){
      blue=val;
    val= val+i>255 ? 255 : val+i;
    analogWrite(b, blue);
    }
    //AZUL
    if(red==0 && green>0 && blue==255){
      green=val;
      val= val-i<0 ? 0 : val-i;
      analogWrite(g, green);
    }
    //ROSA
    if(red<255 && green==0 && blue==255){
      red=val;
      val=val+i>255 ? 255 : val+i;
      analogWrite(r, red);
    }
    //VERMELHO
    if(red==255 && green==0 && blue>0){
      blue=val;
      val= val-i<0 ? 0 : val-i;
      analogWrite(b, blue);
      fim=true;
    }else if(fim==true){
      analogWrite(r, 0);
      teste = false;
    }    
  }
  Serial.println("***");
  //Serial.println((String)"FIM: " + count);
  //Serial.println(texto);
  texto="";
  return true;
}

int moda(int v[]){
  int i, j, aux_array[tamanho];
  int aux = 0;
  int moda = 0;
  
  for(i=0;i<tamanho;i++){
    for(j=i+1;j<tamanho;j++){
      if(v[i]==v[j]){
        aux_array[i]++;
          if(aux_array[i]>aux){
            aux=aux_array[i];
            moda=v[i];
            //Serial.println(moda);
          }
      }
    }
    aux_array[i]=0;
  }
  if(aux == 0){
    return -1;
  }
  return moda;
}
