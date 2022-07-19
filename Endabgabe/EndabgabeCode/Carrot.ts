namespace GardenSimulator {
    export class Carrot extends PlantedField {
        constructor(_position: Vector, _size: Vector) {
            super(_position, _size, 40, 90, 15, 20, 80, 10, 25, 3);
        }

        draw(): void {
            super.draw();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            // Karotte malen
            if (this.ageInDays < this.growthDurationInDays / 3) {
                // kleine Karotte
                crc2.beginPath();
                crc2.arc(50, 94, 5, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "#ed9121";
                crc2.fill();
            } else if (this.ageInDays < this.growthDurationInDays) {
                // mittlere Karotte
                crc2.beginPath();
                crc2.ellipse(60, 80, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "#ed9121";
                crc2.fill();

                crc2.beginPath();
                crc2.ellipse(40, 90, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "#ed9121";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(50, 75);
                crc2.lineTo(50, 100);
                crc2.closePath();
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(50, 96);
                crc2.lineTo(35, 87);
                crc2.lineWidth = 0.5;
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(50, 86);
                crc2.lineTo(65, 77);
                crc2.lineWidth = 0.5;
                crc2.stroke();
            } else {
                // große Karotte
                crc2.beginPath();
                crc2.moveTo(50, 80);
                crc2.lineTo(40, 81);
                crc2.lineTo(46, 100);
                crc2.lineTo(58, 100);
                crc2.lineTo(65, 80);
                crc2.closePath();
                crc2.stroke();
                crc2.fillStyle = "#ed9121";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(44, 76);
                crc2.lineTo(52, 82);
                crc2.lineTo(47, 70);
                crc2.closePath();
                crc2.stroke();
                crc2.fillStyle = "#008000";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(60, 76);
                crc2.lineTo(52, 60);
                crc2.lineTo(53, 85);
                crc2.closePath();
                crc2.stroke();
                crc2.fillStyle = "#008000";
                crc2.fill();
            }

            crc2.restore();
        }
    }
}
