class Pawn {
    constructor(x,y) {
        //Variabler til constructer
        this.x = x;
        this.y = y;
        this.spritesheet;
       
       
        this.billedWidth = 640;
        this.billedHeight = 213;
    }

    //Visual funktion som viser en del af spritesheetet. 
    visual(color, piece) {    
        image(spritesheet,this.x,this.y,this.billedWidth/6,this.billedHeight/2,
        piece*(this.billedWidth/6),color*(this.billedHeight/2),1*(this.billedWidth/6),1*(this.billedHeight/2)); //Syntax: Refference image() nederst    
    }
        
}



