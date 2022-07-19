"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class PlantedField extends GardenSimulator.GardenElement {
        waterLevel;
        waterLowerBound;
        waterUpperBound;
        waterConsumption;
        fertilizerLevel;
        fertilizerLowerBound;
        fertilizerUpperBound;
        fertilizerConsumption;
        isPestInfested;
        ageInDays;
        growthDurationInDays;
        daysUntilDeath;
        sickDays;
        constructor(_position, _size, _waterLowerBound, _waterUpperBound, _waterConsumption, _fertilizerLowerBound, _fertilizerUpperBound, _fertilizerConsumption, _growthDurationInDays, _daysUntilDeath) {
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
        isSellable() {
            let isPlantSellable = this.ageInDays >= this.growthDurationInDays;
            return isPlantSellable;
        }
        isDead() {
            let isPlantDead = this.sickDays >= this.daysUntilDeath;
            return isPlantDead;
        }
        waterField(_waterAmount) {
            this.waterLevel = this.waterLevel + _waterAmount;
            if (this.waterLevel > 100) {
                this.waterLevel = 100;
            }
        }
        fertilizeField(_fertilizerAmount) {
            this.fertilizerLevel = this.fertilizerLevel + _fertilizerAmount;
            if (this.fertilizerLevel > 100) {
                this.fertilizerLevel = 100;
            }
        }
        simulateDay() {
            this.ageInDays = this.ageInDays + 1;
            // Prüfen ob Pflanze krank ist oder nicht
            if (this.waterLevel < this.waterLowerBound ||
                this.waterLevel > this.waterUpperBound ||
                this.fertilizerLevel < this.fertilizerLowerBound ||
                this.fertilizerLevel > this.fertilizerUpperBound ||
                this.isPestInfested === true) {
                this.sickDays = this.sickDays + 1;
            }
            else {
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
        draw() {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            // Hintergrund aka Erde
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 0, 100, 100);
            if (this.isPestInfested === true) {
                // parasit sitzt drauf
                GardenSimulator.crc2.fillStyle = "#5c694f";
            }
            else if (this.waterLevel > this.waterUpperBound) {
                // zu viel wasser
                GardenSimulator.crc2.fillStyle = "#5B4431";
            }
            else if (this.fertilizerLevel > this.fertilizerUpperBound) {
                // zu viel dünger
                GardenSimulator.crc2.fillStyle = "#5B4431";
            }
            else if (this.waterLevel < this.waterLowerBound) {
                // zu wenig wasser
                GardenSimulator.crc2.fillStyle = "#C8BDA7";
            }
            else if (this.fertilizerLevel < this.fertilizerLowerBound) {
                // zu wenig dünger
                GardenSimulator.crc2.fillStyle = "#C8BDA7";
            }
            else {
                // pflanze gesund und glücklich
                GardenSimulator.crc2.fillStyle = "#A9946D";
            }
            GardenSimulator.crc2.fill();
            // Wasserstandsanzeige
            // zu viel wasser bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.rect(0, 0, 10, 100 - this.waterUpperBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // optimale wasser bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 100 - this.waterUpperBound, 10, 100 - (100 - this.waterUpperBound) - this.waterLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(86, 240, 0, 0.7)";
            GardenSimulator.crc2.fill();
            // zu wenig wasser bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 100 - this.waterLowerBound, 10, this.waterLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // aktueller Wasserstand
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(2, 100 - this.waterLevel, 6, this.waterLevel);
            GardenSimulator.crc2.fillStyle = "#1D2F82";
            GardenSimulator.crc2.fill();
            // Düngerstandsanzeige
            // zu viel Dünger Bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.rect(90, 0, 10, 100 - this.fertilizerUpperBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // optimaler Dünger Bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(90, 100 - this.fertilizerUpperBound, 10, 100 - (100 - this.fertilizerUpperBound) - this.fertilizerLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(86, 240, 0, 0.7)";
            GardenSimulator.crc2.fill();
            // zu wenig Dünger Bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(90, 100 - this.fertilizerLowerBound, 10, this.fertilizerLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // aktueller Düngerstand
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(92, 100 - this.fertilizerLevel, 6, this.fertilizerLevel);
            GardenSimulator.crc2.fillStyle = "#FFC300";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        }
    }
    GardenSimulator.PlantedField = PlantedField;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=PlantedField.js.map