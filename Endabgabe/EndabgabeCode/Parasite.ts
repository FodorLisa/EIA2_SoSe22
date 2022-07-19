namespace GardenSimulator {
    export class Parasite extends GardenElement {
        startPosition: Vector;
        targetPosition: Vector;
        speed: number;

        constructor(_size: Vector, _targetPosition: Vector) {
            super(new Vector(-1000, -1000), _size);
            this.startPosition = this.generateStartPosition();
            this.position = new Vector(this.startPosition.x, this.startPosition.y);
            this.targetPosition = _targetPosition;
            this.speed = Math.random() * 150 + 50;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            crc2.beginPath();
            crc2.ellipse(50, 50, 20, 40, Math.PI / 16, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#111";
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(75, 60, 25, 10, Math.PI / 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(25, 50, 10, 25, Math.PI / 3.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#fff";
            crc2.fill();

            crc2.restore();
        }

        move(_timeslice: number): void {
            // Prüfen, ob Parasit seine finale Position in x-Richtung noch nicht erreicht hat
            if ((this.startPosition.x < this.targetPosition.x && this.position.x < this.targetPosition.x) || (this.startPosition.x > this.targetPosition.x && this.position.x > this.targetPosition.x)) {
                this.position.x = this.position.x + (this.targetPosition.x - this.startPosition.x) / this.speed;
            }

            // Prüfen, ob Parasit seine finale Position in y-Richtung noch nicht erreicht hat
            if ((this.startPosition.y < this.targetPosition.y && this.position.y < this.targetPosition.y) || (this.startPosition.y > this.targetPosition.y && this.position.y > this.targetPosition.y)) {
                this.position.y = this.position.y + (this.targetPosition.y - this.startPosition.y) / this.speed;
            }
        }

        private generateStartPosition(): Vector {
            let newStartPosition: Vector;
            let canvas: HTMLCanvasElement = document.querySelector("canvas");

            if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    // start on top
                    newStartPosition = new Vector(canvas.width * Math.random(), -100);
                } else {
                    // start on bottom
                    newStartPosition = new Vector(canvas.width * Math.random(), canvas.height + 100);
                }
            } else {
                if (Math.random() < 0.5) {
                    // start on left
                    newStartPosition = new Vector(-100, canvas.height * Math.random());
                } else {
                    // start on right
                    newStartPosition = new Vector(canvas.width + 100, canvas.height * Math.random());
                }
            }

            return newStartPosition;
        }
    }
}
