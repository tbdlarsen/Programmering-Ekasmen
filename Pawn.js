class Pawn {
    constructor(x,y) {
        //Variabler til constructer
        this.x = x;
        this.y = y;
        this.spritesheet;
        this.billedX = 0;
        this.billedY = 0;
        this.billedWidth = 640;
        this.billedHeight = 213;
    }

    //Visual funktion som viser en del af spritesheetet. 
    visual() {
        image(spritesheet,this.billedX,this.billedY,this.billedWidth/6,this.billedHeight/2,
        1*(this.billedWidth/6),0*(this.billedHeight/2),1*(this.billedWidth/6),1*(this.billedHeight/2)); //Syntax: Refference image() nederst
    }



} 