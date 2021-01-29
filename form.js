class form{
constructor(){
 this.button=createButton("PLAY")   
 
}
hide(){
this.button.hide();

}
display(){
   
   
this. button.position(600,300)

this.button.mousePressed(()=>{
    this.button.hide();
    sound.play()
    sound2.play()
    jacky.visible=true
bg2.visible=true
bg1.visible=false



})
}
}