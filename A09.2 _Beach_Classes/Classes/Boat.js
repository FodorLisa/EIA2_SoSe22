"use strict";
var BeachClasses;
(function (BeachClasses) {
    class Boat {
        x;
        y;
        speed;
        //Methode DrawBoat
        drawBoat(_x, _y) {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 300, _y + 150);
            BeachClasses.crc2.lineTo(_x + 50, _y + 150);
            BeachClasses.crc2.lineTo(_x + 100, _y + 200);
            BeachClasses.crc2.lineTo(_x + 250, _y + 200);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#a5682a";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 175, _y + 10);
            BeachClasses.crc2.lineTo(_x + 175, _y + 150);
            BeachClasses.crc2.lineTo(_x + 180, _y + 150);
            BeachClasses.crc2.lineTo(_x + 180, _y + 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#a5682a";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 90, _y + 140);
            BeachClasses.crc2.lineTo(_x + 180, _y + 140);
            BeachClasses.crc2.lineTo(_x + 180, _y + 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#fff";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.5); // - nach links und + nach rechts           
        }
    }
    BeachClasses.Boat = Boat;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Boat.js.map