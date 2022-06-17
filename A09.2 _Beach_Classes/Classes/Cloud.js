"use strict";
var BeachClasses;
(function (BeachClasses) {
    class Cloud {
        x;
        y;
        speed;
        push;
        drawCloud() {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            BeachClasses.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            BeachClasses.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            BeachClasses.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            BeachClasses.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.fillStyle = "#FFFFFF";
            BeachClasses.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.5); // - nach links und + nach rechts           
        }
    } // Close class
    BeachClasses.Cloud = Cloud;
})(BeachClasses || (BeachClasses = {})); // End namespace
//# sourceMappingURL=Cloud.js.map