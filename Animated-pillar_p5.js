float x=0;
float y=10;
void setup(){
  size(640,360);
  frameRate(2);
}
void draw()
{
  background(0,100,0);  
fill(255);
rect(x,0,80,360);
x=x+10;

if(x==10){
  fill(0,0,255);
  rect(x,0,80,360);
  x=x+10;
  
     }
     if(x==50)
     {
       fill(255,0,0);
  rect(x,0,80,360);
  x=x+10;
     }
     
     if(x==80)
     {
       fill(200,50,100);
  rect(x,0,80,360);
  x=x+10;
      }
  
  if(x==110)
     {
       fill(180,80,100);
  rect(x,0,80,360);
  x=x+10;
     }
     
     if(x==140)
     {
       fill(120,50,150);
  rect(x,0,80,360);
  x=x+10;
  }
  
  if(x==170)
     {
       fill(170,120,80);
  rect(x,0,80,360);
  x=x+10;
}

}

