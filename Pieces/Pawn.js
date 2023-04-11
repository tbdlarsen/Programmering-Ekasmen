class Pawn {
    constructor(x,y) {
        //spritesheet
        this.spritesheet;
       
        //størrelse på spritesheet
        this.billedWidth = 640;
        this.billedHeight = 213;



        //position af billede og brik
        this.x = x*(width/8);
        this.y = y*(height/8);
        this.piece = 5;
    }

    //Visual funktion som viser en del af spritesheetet. 
    visual(color){    
        image(spritesheet,this.x,this.y,this.billedWidth/6,this.billedHeight/2,
        this.piece*(this.billedWidth/6),color*(this.billedHeight/2),1*(this.billedWidth/6),1*(this.billedHeight/2)); //Syntax: Refference image() nederst    
    }
    
    update(){

        this.distX = ceil(((this.x-mouseX)/width)*8);
        this.distY = ceil(((this.y-mouseY)/height)*8);

        if (this.distX < 1 && this.distX >= 0 &&
            this.distY < 1 && this.distY >= 0){
            fill(255,1,0);
            rect(this.x,this.y,100)
               


            
            
       
            

            
        


        }
    
        print(this.distX,this.distY);
    




    }




}



