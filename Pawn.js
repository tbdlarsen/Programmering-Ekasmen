let x;
let y;
let spritesheet;
let SpriteSheet[];
 
class Pawn {
    constructor(x,y) {
        this.x = 0;
        this.y = 0;
    }
    
    preload() {
        spritesheet = loadImage("Spritesheet.png");
        


    }

    image() {
        let widthSpritesheet = spritesheet.width/6;
        let heightSpritesheet= spritesheet.height/2;
        
        for(let y = 0; y < 2; y++) {
            SpriteSheet[y] = [];
            
            for (let x = 0; x < 6; x++) {
                SpriteSheet[y][x] = spritesheet.get(x*widthSpritesheet,y*heightSpritesheet,widthSpritesheet,heightSpritesheet);
            }
        }



    }

    visual() {
        image(spritesheet,200,200);

    }

    








}