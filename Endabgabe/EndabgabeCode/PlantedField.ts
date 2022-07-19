namespace GardenSimulator {
    export abstract class PlantedField extends GardenElement {
        waterLevel: number;
        waterLowerBound: number;
        waterUpperBound: number;
        waterConsumption: number;
        fertilizerLevel: number;
        fertilizerLowerBound: number;
        fertilizerUpperBound: number;
        fertilizerConsumption: number;
        isPestInfested: boolean;
        ageInDays: number;
        growthDurationInDays: number;
        daysUntilDeath: number;
        sickDays: number;

        constructor(
            _position: Vector,
            _size: Vector,
            _waterLowerBound: number,
            _waterUpperBound: number,
            _waterConsumption: number,
            _fertilizerLowerBound: number,
            _fertilizerUpperBound: number,
            _fertilizerConsumption: number,
            _growthDurationInDays: number,
            _daysUntilDeath: number
        ) {
            super(_position, _size);
            this.waterLowerBound = _waterLowerBound;
            this.waterUpperBound = _waterUpperBound;
            this.waterConsumption = _waterConsumption;
            this.fertilizerLowerBound = _fertilizerLowerBound;
            this.fertilizerUpperBound = _fertilizerUpperBound;
            this.fertilizerConsumption = _fertilizerConsumption;
            this.growthDurationInDays = _growthDurationInDays;
            this.daysUntilDeath = _daysUntilDeath;
            this.waterLevel = 30;
            this.fertilizerLevel = 30;
            this.isPestInfested = false;
            this.ageInDays = 0;
            this.sickDays = 0;
        }

        isSellable(): boolean {
            let isPlantSellable: boolean = this.ageInDays >= this.growthDurationInDays;
            return isPlantSellable;
        }

        isDead(): boolean {
            let isPlantDead: boolean = this.sickDays >= this.daysUntilDeath;
            return isPlantDead;
        }

        waterField(_waterAmount: number): void {
            this.waterLevel = this.waterLevel + _waterAmount;
            if (this.waterLevel > 100) {
                this.waterLevel = 100;
            }
        }

        fertilizeField(_fertilizerAmount: number): void {
            this.fertilizerLevel = this.fertilizerLevel + _fertilizerAmount;
            if (this.fertilizerLevel > 100) {
                this.fertilizerLevel = 100;
            }
        }

        simulateDay(): void {
            this.ageInDays = this.ageInDays + 1;
            // Prüfen ob Pflanze krank ist oder nicht
            if (
                this.waterLevel < this.waterLowerBound ||
                this.waterLevel > this.waterUpperBound ||
                this.fertilizerLevel < this.fertilizerLowerBound ||
                this.fertilizerLevel > this.fertilizerUpperBound ||
                this.isPestInfested === true
            ) {
                this.sickDays = this.sickDays + 1;
            } else {
                this.sickDays = 0;
            }

            // Wasserverbraucht simulieren
            this.waterLevel = this.waterLevel - this.waterConsumption;
            if (this.waterLevel < 0) {
                this.waterLevel = 0;
            }

            // Düngerverbrauch simulieren
            this.fertilizerLevel = this.fertilizerLevel - this.fertilizerConsumption;
            if (this.fertilizerLevel < 0) {
                this.fertilizerLevel = 0;
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            // Hintergrund aka Erde
            crc2.beginPath();
            crc2.rect(0, 0, 100, 100);
            if (this.isPestInfested === true) {
                // parasit sitzt drauf
                crc2.fillStyle = "#5c694f";
            } else if (this.waterLevel > this.waterUpperBound) {
                // zu viel wasser
                crc2.fillStyle = "#5B4431";
            } else if (this.fertilizerLevel > this.fertilizerUpperBound) {
                // zu viel dünger
                crc2.fillStyle = "#5B4431";
            } else if (this.waterLevel < this.waterLowerBound) {
                // zu wenig wasser
                crc2.fillStyle = "#C8BDA7";
            } else if (this.fertilizerLevel < this.fertilizerLowerBound) {
                // zu wenig dünger
                crc2.fillStyle = "#C8BDA7";
            } else {
                // pflanze gesund und glücklich
                crc2.fillStyle = "#A9946D";
            }
            crc2.fill();

            // Wasserstandsanzeige
            // zu viel wasser bereich
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.rect(0, 0, 10, 100 - this.waterUpperBound);
            crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            crc2.fill();

            // optimale wasser bereich
            crc2.beginPath();
            crc2.rect(0, 100 - this.waterUpperBound, 10, 100 - (100 - this.waterUpperBound) - this.waterLowerBound);
            crc2.fillStyle = "rgba(86, 240, 0, 0.7)";
            crc2.fill();

            // zu wenig wasser bereich
            crc2.beginPath();
            crc2.rect(0, 100 - this.waterLowerBound, 10, this.waterLowerBound);
            crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            crc2.fill();

            // aktueller Wasserstand
            crc2.beginPath();
            crc2.rect(2, 100 - this.waterLevel, 6, this.waterLevel);
            crc2.fillStyle = "#1D2F82";
            crc2.fill();

            // Düngerstandsanzeige
            // zu viel Dünger Bereich
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.rect(90, 0, 10, 100 - this.fertilizerUpperBound);
            crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            crc2.fill();

            // optimaler Dünger Bereich
            crc2.beginPath();
            crc2.rect(
                90,
                100 - this.fertilizerUpperBound,
                10,
                100 - (100 - this.fertilizerUpperBound) - this.fertilizerLowerBound
            );
            crc2.fillStyle = "rgba(86, 240, 0, 0.7)";
            crc2.fill();

            // zu wenig Dünger Bereich
            crc2.beginPath();
            crc2.rect(90, 100 - this.fertilizerLowerBound, 10, this.fertilizerLowerBound);
            crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            crc2.fill();

            // aktueller Düngerstand
            crc2.beginPath();
            crc2.rect(92, 100 - this.fertilizerLevel, 6, this.fertilizerLevel);
            crc2.fillStyle = "#FFC300";
            crc2.fill();

            crc2.restore();
        }
    }
}
