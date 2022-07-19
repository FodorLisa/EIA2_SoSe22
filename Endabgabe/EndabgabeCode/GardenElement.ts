namespace GardenSimulator {
    export abstract class GardenElement {
        position: Vector;
        size: Vector;

        constructor(_position: Vector, _size: Vector) {
            this.position = _position;
            this.size = _size;
        }

        abstract draw(): void;

        isHit(_hitPosition: Vector): boolean {
            let isElementHit: boolean =
                _hitPosition.x > this.position.x &&
                _hitPosition.x < this.position.x + this.size.x &&
                _hitPosition.y > this.position.y &&
                _hitPosition.y < this.position.y + this.size.y;

            return isElementHit;
        }
    }
}
