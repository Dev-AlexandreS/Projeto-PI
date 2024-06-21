<!-- int echo = 5;
int trig = 4;
int pinLed = 2;

void setup() {
  pinMode(echo, INPUT);
  pinMode(trig, OUTPUT);
  pinMode(pinLed, OUTPUT);
  Serial.begin(9600);
}

long duracao, distancia, antiga_dist;
int maxDist = 336;

void loop() {
  digitalWrite(trig, HIGH);
  delay(15);
  digitalWrite(trig, LOW);
  duracao = pulseIn(echo, HIGH);  //devolve a distancia do pulso em ms
  distancia = duracao / 58;
  if (antiga_dist != distancia && antiga_dist != distancia + 1 && antiga_dist != distancia - 1) {
    Serial.println(distancia);
    antiga_dist = distancia;
  }

  delay(500);
  
if (antiga_dist >= 3) {
 
    digitalWrite(pinLed, HIGH);
    delay(200);
    
} 

else {
    digitalWrite(pinLed, LOW);
    delay(200);
  }
} -->