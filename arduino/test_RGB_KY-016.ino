const int b = 4;
const int r = 3;
const int g = 2;

int val; //VARIÁVEL DO TIPO INTEIRA

void setup() { 
  pinMode(b, OUTPUT);
  pinMode(r, OUTPUT);
  pinMode(g, OUTPUT);
}

void loop (){
  for(val = 255; val > 0; val --){ //PARA val IGUAL A 255, ENQUANTO val MAIOR QUE 0, DECREMENTA val
      analogWrite(r, val); //PINO RECEBE O VALOR
      analogWrite(b, 255-val); //PINO RECEBE O VALOR
      analogWrite(g, 128-val); //PINO RECEBE O VALOR
      delay (10); //INTERVALO DE 10 MILISSEGUNDOS
  }
  for(val = 0; val < 255; val ++){ //PARA val IGUAL A 0, ENQUANTO val MENOR QUE 255, INCREMENTA val
      analogWrite(r, val); //PINO RECEBE O VALOR
      analogWrite(b, 255-val); //PINO RECEBE O VALOR
      analogWrite(g, 128-val); //PINO RECEBE O VALOR
      delay (10); //INTERVALO DE 10 MILISSEGUNDOS
  }
}
