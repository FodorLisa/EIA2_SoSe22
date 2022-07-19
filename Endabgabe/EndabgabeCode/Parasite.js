"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Parasite extends GardenSimulator.GardenElement {
        startPosition;
        targetPosition;
        speed;
        constructor(_size, _targetPosition) {
            super(new GardenSimulator.Vector(-1000, -1000), _size);
            this.startPosition = this.generateStartPosition();
            this.position = new GardenSimulator.Vector(this.startPosition.x, this.startPosition.y);
            this.targetPosition = _targetPosition;
            this.speed = Math.random() * 150 + 50;
        }
        draw() {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.ellipse(50, 50, 20, 40, Math.PI / 16, 0, 2 * Math.PI);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.fillStyle = "#111";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.ellipse(75, 60, 25, 10, Math.PI / 3, 0, 2 * Math.PI);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.fillStyle = "white";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.ellipse(25, 50, 10, 25, Math.PI / 3.5, 0, 2 * Math.PI);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.fillStyle = "#fff";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        }
        move(_timeslice) {
            // Prüfen, ob Parasit seine finale Position in x-Richtung noch nicht erreicht hat
            if ((this.startPosition.x < this.targetPosition.x && this.position.x < this.targetPosition.x) || (this.startPosition.x > this.targetPosition.x && this.position.x > this.targetPosition.x)) {
                this.position.x = this.position.x + (this.targetPosition.x - this.startPosition.x) / this.speed;
            }
            // Prüfen, ob Parasit seine finale Position in y-Richtung noch nicht erreicht hat
            if ((this.startPosition.y < this.targetPosition.y && this.position.y < this.targetPosition.y) || (this.startPosition.y > this.targetPosition.y && this.position.y > this.targetPosition.y)) {
                this.position.y = this.position.y + (this.targetPosition.y - this.startPosition.y) / this.speed;
            }
        }
        generateStartPosition() {
            let newStartPosition;
            let canvas = document.querySelector("canvas");
            if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    // start on top
                    newStartPosition = new GardenSimulator.Vector(canvas.width * Math.random(), -100);
                }
                else {
                    // start on bottom
                    newStartPosition = new GardenSimulator.Vector(canvas.width * Math.random(), canvas.height + 100);
                }
            }
            else {
                if (Math.random() < 0.5) {
                    // start on left
                    newStartPosition = new GardenSimulator.Vector(-100, canvas.height * Math.random());
                }
                else {
                    // start on right
                    newStartPosition = new GardenSimulator.Vector(canvas.width + 100, canvas.height * Math.random());
                }
            }
            return newStartPosition;
        }
    }
    GardenSimulator.Parasite = Parasite;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Parasite.js.map