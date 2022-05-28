var BeachClasses;
(function (BeachClasses) {
    var Cloud = /** @class */ (function () {
        function Cloud() {
        }
        Cloud.prototype.drawCloud = function () {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            BeachClasses.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            BeachClasses.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            BeachClasses.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            BeachClasses.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.fillStyle = "#FFFFFF";
            BeachClasses.crc2.fill();
        };
        Cloud.prototype.moveForward = function () {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + BeachClasses.crc2.canvas.width;
            }
            if (this.x > BeachClasses.crc2.canvas.width) {
                this.x = this.x - BeachClasses.crc2.canvas.width;
            }
        };
        return Cloud;
    }()); // Close class
    BeachClasses.Cloud = Cloud;
})(BeachClasses || (BeachClasses = {})); // End namespace
//# sourceMappingURL=Cloud.js.map