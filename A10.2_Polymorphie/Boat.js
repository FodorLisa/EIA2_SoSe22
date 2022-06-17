"use strict";
var BeachClasses10;
(function (BeachClasses10) {
    class Boat extends SuperclassMoveable {
        x;
        y;
        speed;
        constructor(x, y) {
            super(x, y);
            this.moveForward();
            this.drawBoat();
        }
        //Methode DrawBoat
        drawBoat() {
            BeachClasses10.crc2.beginPath();
            BeachClasses10.crc2.moveTo(this.x + 300, this.y + 150);
            BeachClasses10.crc2.lineTo(this.x + 50, this.y + 150);
            BeachClasses10.crc2.lineTo(this.x + 100, this.y + 200);
            BeachClasses10.crc2.lineTo(this.x + 250, this.y + 200);
            BeachClasses10.crc2.closePath();
            BeachClasses10.crc2.stroke();
            BeachClasses10.crc2.fillStyle = "#a5682a";
            BeachClasses10.crc2.lineWidth = 0.5;
            BeachClasses10.crc2.fill();
            BeachClasses10.crc2.beginPath();
            BeachClasses10.crc2.moveTo(this.x + 175, this.y + 10);
            BeachClasses10.crc2.lineTo(this.x + 175, this.y + 150);
            BeachClasses10.crc2.lineTo(this.x + 180, this.y + 150);
            BeachClasses10.crc2.lineTo(this.x + 180, this.y + 10);
            BeachClasses10.crc2.closePath();
            BeachClasses10.crc2.stroke();
            BeachClasses10.crc2.fillStyle = "#a5682a";
            BeachClasses10.crc2.lineWidth = 0.5;
            BeachClasses10.crc2.fill();
            BeachClasses10.crc2.beginPath();
            BeachClasses10.crc2.moveTo(this.x + 90, this.y + 140);
            BeachClasses10.crc2.lineTo(this.x + 180, this.y + 140);
            BeachClasses10.crc2.lineTo(this.x + 180, this.y + 10);
            BeachClasses10.crc2.closePath();
            BeachClasses10.crc2.stroke();
            BeachClasses10.crc2.fillStyle = "#fff";
            BeachClasses10.crc2.lineWidth = 0.5;
            BeachClasses10.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + BeachClasses10.crc2.canvas.width;
            }
            if (this.x > BeachClasses10.crc2.canvas.width) {
                this.x = this.x - BeachClasses10.crc2.canvas.width;
            }
        }
    }
    BeachClasses10.Boat = Boat;
})(BeachClasses10 || (BeachClasses10 = {}));
//# sourceMappingURL=Boat.js.map