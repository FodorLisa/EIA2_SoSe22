namespace BeachClasses {

    export class Cloud {

        x: number;
        y: number;
        speed: number;
        push: any;

    
        drawCloud(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

        }

        moveForward(): void {
            this.x += this.speed * (+0.5) ; // - nach links und + nach rechts           
        }

    } // Close class
} // End namespace