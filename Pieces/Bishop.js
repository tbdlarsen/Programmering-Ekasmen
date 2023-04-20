//Bishop som er nedarvet af pawn
class Bishop extends Piece{

    //Bishop constructor
    constructor(x,y){

        //Super() bliver brugt til at fremkalde contructoren fra Pawn (Forældre), hvilket gør at der er tiladselse til brugen af Pawn constructorens egenskaber 
        super(x,y);

        //Lokation i forhold til spritesheet (justeret med 0,025 for at brikkerne står perfekt i midtel af deres felt)
        this.piece = 2.025;
    
    }
    Movement(x,x2,y,y2){
        //Bishop - Mulige bevægelser 
    
        let absX = abs(x2-x);
        let absY = abs(y2-y);
        
      
             //1:4 (NV)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x >= 1 && y2-y >= 1 && (x2-x)/(y2-y) == 1) {
            this.x -= absX*this.grid;
            this.y -= absY*this.grid; 
        }

        //2:4 (NØ)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x <= -1 && y2-y >= 1 && (x2-x)/(y2-y) == -1) {
            this.x +=  (absX)*this.grid;
            this.y -= (absY)*this.grid; 
        }

        //3:4 (SV)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x >= 1 && y2-y <= -1 && (x2-x)/(y2-y) == -1) {
            this.x -= (absX)*this.grid;
            this.y += (absY)*this.grid; 
        }

        //4:4 (SØ)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x <= -1 && y2-y <= -1 && (x2-x)/(y2-y) == 1) {
            this.x += (absX)*this.grid;
            this.y += (absY)*this.grid; 
        }
          



    }
}
