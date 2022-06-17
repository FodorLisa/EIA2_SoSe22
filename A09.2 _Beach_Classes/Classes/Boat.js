"use strict";
var BeachClasses;
(function (BeachClasses) {
    class Boat {
        x;
        y;
        speed;
        //Methode DrawBoat
        drawBoat() {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(this.x + 300, this.y + 150);
            BeachClasses.crc2.lineTo(this.x + 50, this.y + 150);
            BeachClasses.crc2.lineTo(this.x + 100, this.y + 200);
            BeachClasses.crc2.lineTo(this.x + 250, this.y + 200);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#a5682a";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(this.x + 175, this.y + 10);
            BeachClasses.crc2.lineTo(this.x + 175, this.y + 150);
            BeachClasses.crc2.lineTo(this.x + 180, this.y + 150);
            BeachClasses.crc2.lineTo(this.x + 180, this.y + 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#a5682a";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(this.x + 90, this.y + 140);
            BeachClasses.crc2.lineTo(this.x + 180, this.y + 140);
            BeachClasses.crc2.lineTo(this.x + 180, this.y + 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#fff";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + BeachClasses.crc2.canvas.width;
            }
            if (this.x > BeachClasses.crc2.canvas.width) {
                this.x = this.x - BeachClasses.crc2.canvas.width;
            }
        }
    }
    BeachClasses.Boat = Boat;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Boat.js.map