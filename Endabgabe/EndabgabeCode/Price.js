"use strict";
var GardenSimulator;
(function (GardenSimulator) {
    class Price {
        currentPrice;
        minPrice;
        maxPrice;
        constructor(_minPrice, _maxPrice) {
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
            this.currentPrice = Math.round((_minPrice + _maxPrice) / 2);
        }
        updatePrice() {
            // Zufälliger neuer Preis zwischen minimal und maximal Preis wird generiert
            this.currentPrice = Math.round(Math.random() * (this.maxPrice - this.minPrice) + this.minPrice);
        }
    }
    GardenSimulator.Price = Price;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Price.js.map