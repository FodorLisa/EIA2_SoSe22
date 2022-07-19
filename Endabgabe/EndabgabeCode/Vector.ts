namespace GardenSimulator {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x = this.x * _factor;
            this.y = this.y * _factor;
        }

        scaleWithVector(_factorVector: Vector): void {
            this.x = this.x * _factorVector.x;
            this.y = this.y * _factorVector.y;
        }

        add(_addend: Vector): void {
            this.x = this.x + _addend.x;
            this.y = this.y + _addend.y;
        }

        subtract(_subtrahend: Vector): void {
            this.x = this.x - _subtrahend.x;
            this.y = this.y - _subtrahend.y;
        }
    }
}
