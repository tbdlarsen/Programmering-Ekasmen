

//Knight som er nedarvet af pawn
class Pawn extends Piece{

    //Knight constructor
    constructor(x,y){

        //Super() bliver brugt til at fremkalde contructoren fra Pawn (Forældre), hvilket gør at der er tiladselse til brugen af Pawn constructorens egenskaber 
        super(x,y);

        //Lokation i forhold til spritesheet (justeret med 0,020 for at brikkerne står perfekt i midtel af deres felt)
        this.piece = 5.020;

    }
   
    Movement(x,x2,y,y2){
        //Mulige bevægelser
            //1:2 (S + 1)
            if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 0 && y2-y == -1) {
            this.y += this.grid; 
            }
            //2:2 (S + 2)
            if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 0 && y2-y == -2) {
                this.y += this.grid*2; 
            }
    }


}