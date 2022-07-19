namespace GardenSimulator {
    export class EmptyField extends GardenElement {
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            crc2.beginPath();
            crc2.rect(0, 0, 100, 100);
            crc2.fillStyle = "#BBA786";
            crc2.fill();

            crc2.restore();
        }
    }
}
