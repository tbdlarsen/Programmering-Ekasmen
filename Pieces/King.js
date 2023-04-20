//King som er nedarvet af pawn
class King extends Piece{

    //King constructor
    constructor(x,y){

        //Super() bliver brugt til at fremkalde contructoren fra Pawn (Forældre), hvilket gør at der er tiladselse til brugen af Pawn constructorens egenskaber 
        super(x,y);

        //Lokation i forhold til spritesheet (justeret med 0,025 for at brikkerne står perfekt i midtel af deres felt)
        this.piece = 0.025;

    }

    Movement(x,x2,y,y2){
        //1:8 (NV)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 1 && y2-y == 1) {
            this.x -= this.grid;
            this.y -= this.grid; 
        }

        //2:8 (N)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 0 && y2-y == 1) {
            this.y -= this.grid; 
        }

        //3:8 (NØ)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -1 && y2-y == 1) {
            this.x += this.grid;
            this.y -= this.grid; 
        }

        //4:8 (V)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 1 && y2-y == 0) {
            this.x -= this.grid;
             
        }

        //5:8 (Ø)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -1 && y2-y == 0) {
            this.x += this.grid;
            
        }

        //6:8 (SV)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 1 && y2-y == -1) {
            this.x -= this.grid;
            this.y += this.grid; 
        }

        //7:8 (S)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 0 && y2-y == -1) {
            
            this.y += this.grid; 
        }

        //8:8 (SØ)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -1 && y2-y == -1) {
            this.x += this.grid;
            this.y += this.y + this.grid; 
        }


    }
   
}