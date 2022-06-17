namespace BeachClasses10 {
    export class Boat extends SuperclassMoveable {
        x: number;
        y: number;
        speed: number;

        constructor(x: number, y: number) {
            super(x, y);
            this.moveForward();
            this.drawBoat();
        }

        //Methode DrawBoat
        drawBoat(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 300, this.y + 150);
            crc2.lineTo(this.x + 50, this.y + 150);
            crc2.lineTo(this.x + 100, this.y + 200);
            crc2.lineTo(this.x + 250, this.y + 200);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#a5682a";
            crc2.lineWidth = 0.5;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 175, this.y + 10);
            crc2.lineTo(this.x + 175, this.y + 150);
            crc2.lineTo(this.x + 180, this.y + 150);
            crc2.lineTo(this.x + 180, this.y + 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#a5682a";
            crc2.lineWidth = 0.5;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 90, this.y + 140);
            crc2.lineTo(this.x + 180, this.y + 140);
            crc2.lineTo(this.x + 180, this.y + 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#fff";
            crc2.lineWidth = 0.5;
            crc2.fill();
        }
        moveForward(): void {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + crc2.canvas.width;
            }
            if (this.x > crc2.canvas.width) {
                this.x = this.x - crc2.canvas.width;
            }
        }
    }
}
