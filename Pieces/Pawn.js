

//Knight som er nedarvet af pawn
class Pawn extends Piece{

    //Knight constructor
    constructor(x,y){

        //Super() bliver brugt til at fremkalde contructoren fra Pawn (Forældre), hvilket gør at der er tiladselse til brugen af Pawn constructorens egenskaber 
        super(x,y);

        //Lokation i forhold til spritesheet (justeret med 0,020 for at brikkerne står perfekt i midtel af deres felt)
        this.piece = 5.020;

    }
   
}