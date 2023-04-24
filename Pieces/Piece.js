//Class
class Piece {

    //Piece constructor
    constructor(x,y) {

        //Spritesheet
        this.spritesheet;
        this.grid = 100;
       
        //Størrelse på spritesheet
        this.billedWidth = 640;
        this.billedHeight = 213;

        //Position af billede og brik
        this.x = x*(width/8);
        this.y = y*(height/8);

        //Lokation i forhold til spritesheet 
        this.piece = 0;
    }


    //Visual funktion som viser en del af spritesheetet. 
    visual(color){    
        image(spritesheet,this.x,this.y,this.billedWidth/6,this.billedHeight/2,
        this.piece*(this.billedWidth/6),color*(this.billedHeight/2),1*(this.billedWidth/6),1*(this.billedHeight/2)); //Syntax: Refference image() nederst    
    }
    
    //Update funktion som updatere en visuel firkant, som viser spillerens valgte brik, ud fra musens lokation
    update(){

        //Musens position (firkant)
        this.distX = ceil(((this.x-mouseX)/width)*8);
        this.distY = ceil(((this.y-mouseY)/height)*8);

        //Musens position (grid-koordinatsystem)
        this.distX2 = ceil(((mouseX)/width)*8);
        this.distY2 = ceil(((mouseY)/height)*8);

        //if statement som viser en visuel firkant bag den brik som spillerens mus er på
        if (this.distX < 1 && this.distX >= 0 &&
            this.distY < 1 && this.distY >= 0){
            fill(255,1,0);
            rect(this.x,this.y,100);
        }
        
        //Musens koordinater i forhold til grid/spillepladen (8x8) 
        //print(this.distX2,this.distY2);

    }

}



