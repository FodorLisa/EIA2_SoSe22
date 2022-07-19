namespace GardenSimulator {
    export class Price {
        currentPrice: number;
        minPrice: number;
        maxPrice: number;

        constructor(_minPrice: number, _maxPrice: number) {
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
            this.currentPrice = Math.round((_minPrice + _maxPrice) / 2);
        }

        updatePrice(): void {
            // Zufälliger neuer Preis zwischen minimal und maximal Preis wird generiert
            this.currentPrice = Math.round(Math.random() * (this.maxPrice - this.minPrice) + this.minPrice);
        }
    }
}
