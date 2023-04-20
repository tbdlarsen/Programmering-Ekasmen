//Knight som er nedarvet af pawn
class Knight extends Piece{

    //Knight constructor
    constructor(x,y){

        //Super() bliver brugt til at fremkalde contructoren fra Pawn (Forældre), hvilket gør at der er tiladselse til brugen af Pawn constructorens egenskaber 
        super(x,y);

        //Lokation i forhold til spritesheet (justeret med 0,025 for at brikkerne står perfekt i midtel af deres felt)
        this.piece = 3.025;

    }

    Movement(x,x2,y,y2){

        let absX = abs(x2-x);
        let absY = abs(y2-y);
        

        //1:8 (N:V)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 1 && y2-y == 2) {
          this.x -= absX*this.grid;
          this.y -= absY*this.grid; 
        }
  
        //2:8 (N:Ø)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -1 && y2-y == 2) {
          this.x += absX*this.grid;
          this.y -= absY*this.grid; 
        }
  
        //3:8 (V:N)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 2 && y2-y == 1) {
          this.x -= absX*this.grid;
          this.y -= absY*this.grid; 
        }
  
        //4:8 (V:S)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 2 && y2-y == -1) {
          this.x -= absX*this.grid;
          this.y += absY*this.grid; 
        }
  
        //5:8 (Ø:N)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -2 && y2-y == 1) {
          this.x += absX*this.grid;
          this.y -= absY*this.grid; 
        }
  
        //6:8 (Ø:S)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -2 && y2-y == -1) {
          this.x += absX*this.grid;
          this.y += absY*this.grid; 
        }
  
        //7:8 (S:V)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == 1 && y2-y == -2) {
          this.x -= absX*this.grid;
          this.y += absY*this.grid; 
        }
  
        //8:8 (S:Ø)
        if((this.x + this.grid)/this.grid == x2 && (this.y + this.grid)/this.grid == y2 && x2-x == -1 && y2-y == -2) {
          this.x += absX*this.grid;
          this.y += absY*this.grid; 
        }
  
      }






    }
   
