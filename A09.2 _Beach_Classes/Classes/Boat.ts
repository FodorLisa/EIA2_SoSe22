namespace BeachClasses {

    export class Boat {
        x: number;
        y: number;
        speed: number;

        //Methode DrawBoat
        drawBoat(_x:number , _y:number): void {
            crc2.beginPath();
            crc2.moveTo(_x + 300, _y +150);
            crc2.lineTo(_x + 50, _y + 150);
            crc2.lineTo(_x + 100, _y + 200);
            crc2.lineTo(_x + 250, _y + 200);
            crc2.closePath();
            crc2.stroke( );
            crc2.fillStyle = "#a5682a";
            crc2.lineWidth = 0.5;
            crc2.fill();
    
            crc2.beginPath();
            crc2.moveTo(_x + 175, _y + 10);
            crc2.lineTo(_x + 175, _y + 150);
            crc2.lineTo(_x + 180, _y + 150);
            crc2.lineTo(_x + 180, _y + 10);
            crc2.closePath();
            crc2.stroke( );
            crc2.fillStyle = "#a5682a";
            crc2.lineWidth = 0.5;
            crc2.fill();
    
            crc2.beginPath();
            crc2.moveTo(_x + 90, _y + 140);
            crc2.lineTo(_x + 180, _y + 140);
            crc2.lineTo(_x + 180, _y + 10);
            crc2.closePath();
            crc2.stroke( );
            crc2.fillStyle = "#fff";
            crc2.lineWidth = 0.5;
            crc2.fill();
        }
        moveForward(): void {
            this.x += this.speed * (+0.5) ; // - nach links und + nach rechts           
        }
    }}