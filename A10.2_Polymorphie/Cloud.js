"use strict";
var BeachClasses10;
(function (BeachClasses10) {
    class Cloud extends SuperclassMovable {
        x;
        y;
        speed;
        constructor(x, y) {
            super(x, y);
            this.moveForward();
            this.drawCloud();
        }
        drawCloud() {
            BeachClasses10.crc2.beginPath();
            BeachClasses10.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            BeachClasses10.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            BeachClasses10.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            BeachClasses10.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            BeachClasses10.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            BeachClasses10.crc2.closePath();
            BeachClasses10.crc2.fillStyle = "#FFFFFF";
            BeachClasses10.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.5); // - nach links und + nach rechts           
        }
    } // Close class
    BeachClasses10.Cloud = Cloud;
})(BeachClasses10 || (BeachClasses10 = {})); // End namespace
//# sourceMappingURL=Cloud.js.map