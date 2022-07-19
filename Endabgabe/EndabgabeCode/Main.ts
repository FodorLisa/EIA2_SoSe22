namespace GardenSimulator {
    // Load listener registrieren
    window.addEventListener("load", handleLoad);

    // globale variablen für Spielzustand erstellen...
    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let days: number = 0;
    let hours: number = 0;
    let minutes: number = 0;

    let playerMoney: number;

    let pricePumpkinSeedling: Price;
    let priceCarrotSeedling: Price;
    let priceRadishSeedling: Price;
    let priceSaladSeedling: Price;
    let priceCornSeedling: Price;
    let priceFertilizer: Price;
    let pricePesticide: Price;
    let sellingPricePumpkin: Price;
    let sellingPriceCarrot: Price;
    let sellingPriceRadish: Price;
    let sellingPriceSalad: Price;
    let sellingPriceCorn: Price;

    let fields: GardenElement[] = [];
    let parasites: Parasite[] = [];

    let selectedUserAction: UserAction;
    let selectedCropType: CropType;

    function handleLoad(): void {
        // Klick listener auf Start Button registrieren
        document.getElementById("start").addEventListener("click", startGame);
    }

    function startGame(): void {
        // Canvas auswählen und 2D-Context auslesen
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d")!;

        // FormData aus Formular auslesen
        let formData: FormData = new FormData(document.forms[0]);

        // Initiales Spielerkapital aus FormData auslesen
        playerMoney = Number(formData.get("seedCapital"));

        // Preisspannen aus FormData auslesen
        pricePumpkinSeedling = new Price(
            Number(formData.get("minPumpkinSeedling")),
            Number(formData.get("maxPumpkinSeedling"))
        );
        priceCarrotSeedling = new Price(
            Number(formData.get("minCarrotSeedling")),
            Number(formData.get("maxCarrotSeedling"))
        );
        priceRadishSeedling = new Price(
            Number(formData.get("minRadishSeedling")),
            Number(formData.get("maxRadishSeedling"))
        );
        priceSaladSeedling = new Price(
            Number(formData.get("minSaladSeedling")),
            Number(formData.get("maxSaladSeedling"))
        );
        priceCornSeedling = new Price(Number(formData.get("minCornSeedling")), Number(formData.get("maxCornSeedling")));
        priceFertilizer = new Price(Number(formData.get("minFertilizer")), Number(formData.get("maxFertilizer")));
        pricePesticide = new Price(Number(formData.get("minPesticide")), Number(formData.get("maxPesticide")));
        sellingPricePumpkin = new Price(Number(formData.get("minPumpkin")), Number(formData.get("maxPumpkin")));
        sellingPriceCarrot = new Price(Number(formData.get("minCarrot")), Number(formData.get("maxCarrot")));
        sellingPriceRadish = new Price(Number(formData.get("minRadish")), Number(formData.get("maxRadish")));
        sellingPriceSalad = new Price(Number(formData.get("minSalad")), Number(formData.get("maxSalad")));
        sellingPriceCorn = new Price(Number(formData.get("minCorn")), Number(formData.get("maxCorn")));

        // Setup Formular ausblenden
        let gameSetupElement: HTMLElement = document.getElementById("setup");
        gameSetupElement.classList.add("hidden");

        // Spieloberfläche einblenden
        let gameElement: HTMLElement = document.getElementById("game");
        gameElement.classList.remove("hidden");

        // 40 leere Felder erstellen und auf Canvas verteilen...
        let gapBetweenFields: number = 25;
        let fieldWidth: number = 125;
        let fieldHeight: number = 125;

        let x: number = gapBetweenFields;
        let y: number = gapBetweenFields;

        for (let i = 0; i < 40; i++) {
            // leeres Feld erzeugen
            let newField: EmptyField = new EmptyField(new Vector(x, y), new Vector(fieldWidth, fieldHeight));

            // neues Feld in Felder-Liste hinzufügen
            fields.push(newField);

            // x & y für Position von nächstem Feld berechnen
            x = x + fieldWidth + gapBetweenFields;
            if (x + fieldWidth + gapBetweenFields > canvas.width) {
                x = gapBetweenFields;
                y = y + fieldHeight + gapBetweenFields;
            }
        }

        // Click listener auf Aktions-Buttons registrieren...
        // Kürbis pflanzen Aktion
        document.getElementById("plantPumpkin").addEventListener("click", function () {
            selectedUserAction = UserAction.PLANT;
            selectedCropType = CropType.PUMPKIN;
        });
        // Karotte pflanzen Aktion
        document.getElementById("plantCarrot").addEventListener("click", function () {
            selectedUserAction = UserAction.PLANT;
            selectedCropType = CropType.CARROT;
        });
        // Radischen pflanzen Aktion
        document.getElementById("plantRadish").addEventListener("click", function () {
            selectedUserAction = UserAction.PLANT;
            selectedCropType = CropType.RADISH;
        });
        // Salat pflanzen Aktion
        document.getElementById("plantSalad").addEventListener("click", function () {
            selectedUserAction = UserAction.PLANT;
            selectedCropType = CropType.SALAD;
        });
        // Mais pflanzen Aktion
        document.getElementById("plantCorn").addEventListener("click", function () {
            selectedUserAction = UserAction.PLANT;
            selectedCropType = CropType.CORN;
        });
        // Feld bewässern Aktion
        document.getElementById("waterField").addEventListener("click", function () {
            selectedUserAction = UserAction.WATER;
        });
        // Feld düngen Aktion
        document.getElementById("fertilizeField").addEventListener("click", function () {
            selectedUserAction = UserAction.FERTILIZE;
        });
        // Schädling bekämpfen Aktion
        document.getElementById("fightPest").addEventListener("click", function () {
            selectedUserAction = UserAction.FIGHT_PEST;
        });
        // Feld ernten Aktion
        document.getElementById("harvestField").addEventListener("click", function () {
            selectedUserAction = UserAction.HARVEST;
        });

        // Klick Listener auf canvas registrieren
        document.querySelector("canvas").addEventListener("click", function (event: MouseEvent) {
            // Klickposition im Canvas bestimmen
            let x: number = event.clientX - (event.target as HTMLCanvasElement).offsetLeft;
            let y: number = event.clientY - (event.target as HTMLCanvasElement).offsetTop;
            let clickPosition: Vector = new Vector(x, y);

            // Prüfen ob Nutzeraktion überhaupt ausgewählt ist
            if (selectedUserAction !== undefined) {
                // Prüfen, ob Schädling bekämpft werden soll, oder Feld bearbeitet wird.
                if (selectedUserAction === UserAction.FIGHT_PEST) {
                    fightPest(clickPosition);
                } else {
                    farmField(clickPosition);
                }
            }

            // Ausgewählte Aktion & zu pflanzende Gemüsteart zurücksetzen
            selectedUserAction = undefined;
            selectedCropType = undefined;
        });

        // Interval starten, das Spielfeld rendert
        setInterval(renderGame, 20);
        // Interval starten, das die Marktpreise aktualisiert
        setInterval(updateMarketPrices, 20000);
        // Interval starten, das die Spielzeit fortschreiten lässt
        setInterval(updateGameTime, 300);
        // Interval starten, das einen Parasiten erscheinen lässt
        setInterval(spawnParasite, 800);
    }

    function renderGame(): void {
        // canvas leeren indem weißes Rechteck über alles gemalt wird.
        crc2.beginPath();
        crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        // Über alle Felder iterieren
        for (let field of fields) {
            // Prüfen ob Feld bepflanzt ist
            if (field instanceof PlantedField) {
                // Prüfen ob Feld von irgendeinem Schädling befallen ist und bei Bedarf die
                // "isPestInfested" Eigenschaft des Feldes aktualisiert
                field.isPestInfested = false;
                for (let parasite of parasites) {
                    if (field.isHit(parasite.position) === true) {
                        field.isPestInfested = true;
                        // Sobald 1 Schädling gefunden wurde, der auf dem Feld sitzt,
                        // wird nicht weiter gesucht und mit "break" abgebrochen
                        break;
                    }
                }
            }

            // Feld zeichnen
            field.draw();
        }

        // Über alle Parasiten iterieren
        for (let parasite of parasites) {
            // Parasit zeichnen
            parasite.draw();
            // Parasit bewegen
            parasite.move(1);
        }

        // Anzeige des Spielerkapitals aktualisieren
        let playerMoneyElement: HTMLElement = document.getElementById("playerMoney");
        playerMoneyElement.innerHTML = playerMoney.toString();

        // Angezeigte Marktpreise aktualisieren
        renderMarketPrices();

        // Anzeige der Spielzeit aktualisieren
        let gameTimeElement: HTMLElement = document.getElementById("gameTime");
        gameTimeElement.innerHTML = "Day: " + days + ", " + hours + ":" + minutes;
    }

    function renderMarketPrices(): void {
        // Angezeigte Preise für Setzlinge aktualisieren
        let pumpkinSeedlingElement: HTMLElement = document.getElementById("pumpkinSeedlingPrice");
        pumpkinSeedlingElement.innerHTML = pricePumpkinSeedling.currentPrice.toString();
        let carrotSeedlingElement: HTMLElement = document.getElementById("carrotSeedlingPrice");
        carrotSeedlingElement.innerHTML = priceCarrotSeedling.currentPrice.toString();
        let radishSeedlingElement: HTMLElement = document.getElementById("radishSeedlingPrice");
        radishSeedlingElement.innerHTML = priceRadishSeedling.currentPrice.toString();
        let saladSeedlingElement: HTMLElement = document.getElementById("saladSeedlingPrice");
        saladSeedlingElement.innerHTML = priceSaladSeedling.currentPrice.toString();
        let cornSeedlingElement: HTMLElement = document.getElementById("cornSeedlingPrice");
        cornSeedlingElement.innerHTML = priceCornSeedling.currentPrice.toString();

        // Angezeigte Preise für Dünger und Pestizid aktualisieren
        let fertilizerElement: HTMLElement = document.getElementById("fertilizerPrice");
        fertilizerElement.innerHTML = priceFertilizer.currentPrice.toString();
        let pesticideElement: HTMLElement = document.getElementById("pesticidePrice");
        pesticideElement.innerHTML = pricePesticide.currentPrice.toString();

        // Angezeigte Verkaufspreise aktualisieren
        let pumpkinElement: HTMLElement = document.getElementById("pumpkinSellingPrice");
        pumpkinElement.innerHTML = sellingPricePumpkin.currentPrice.toString();
        let carrotElement: HTMLElement = document.getElementById("carrotSellingPrice");
        carrotElement.innerHTML = sellingPriceCarrot.currentPrice.toString();
        let radishElement: HTMLElement = document.getElementById("radishSellingPrice");
        radishElement.innerHTML = sellingPriceRadish.currentPrice.toString();
        let saladElement: HTMLElement = document.getElementById("saladSellingPrice");
        saladElement.innerHTML = sellingPriceSalad.currentPrice.toString();
        let cornElement: HTMLElement = document.getElementById("cornSellingPrice");
        cornElement.innerHTML = sellingPriceCorn.currentPrice.toString();
    }

    function updateMarketPrices(): void {
        // neue Preise für Setzlinge generieren
        pricePumpkinSeedling.updatePrice();
        priceCarrotSeedling.updatePrice();
        priceRadishSeedling.updatePrice();
        priceSaladSeedling.updatePrice();
        priceCornSeedling.updatePrice();

        // Neue Preise für Dünger und Pestizid generieren
        priceFertilizer.updatePrice();
        pricePesticide.updatePrice();

        // Neue Verkaufspreise generieren
        sellingPricePumpkin.updatePrice();
        sellingPriceCarrot.updatePrice();
        sellingPriceRadish.updatePrice();
        sellingPriceSalad.updatePrice();
        sellingPriceCorn.updatePrice();
    }

    function updateGameTime(): void {
        minutes = minutes + 20;

        // Prüfen, ob die Stunde schon "voll" is
        if (minutes >= 60) {
            // Wenn Stunde voll, dann Stunden hochzählen und Minuten zurücksetzen
            hours = hours + 1;
            minutes = 0;
        }

        // Prüfen, ob Tag schon "voll" ist
        if (hours >= 24) {
            // Wenn Tag voll, dann Tage hochzählen, Stunden zurücksetzen und Tag simulieren
            days = days + 1;
            hours = 0;
            simulateNextDay();
        }
    }

    function simulateNextDay(): void {
        // Über alle Felder iterieren
        for (let i = 0; i < fields.length; i++) {
            // Feld an Stelle i aus Felderliste auslesen
            let field: GardenElement = fields[i];

            // Prüfen ob Feld bepflanzt ist
            if (field instanceof PlantedField) {
                // simuliere dass Feld 1 Tag älter wird
                field.simulateDay();

                // Prüfe ob Feld tot ist
                if (field.isDead() === true) {
                    // wenn Feld tot, entferne Parasiten auf Feld
                    for (let j = 0; j < parasites.length; j++) {
                        let parasite: Parasite = parasites[j];
                        if (field.isHit(parasite.position) === true) {
                            parasites.splice(j, 1);
                        }
                    }

                    // Leeres Feld an Stelle von bepflanztem Feld packen
                    fields[i] = new EmptyField(field.position, field.size);
                }
            }
        }
    }

    function spawnParasite(): void {
        // https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
        let targetField: GardenElement = fields[Math.floor(Math.random() * fields.length)];

        // Prüfe ob bepflanztes Feld
        if (targetField instanceof PlantedField) {
            // Zielposition bestimmen
            let x: number = targetField.position.x + Math.random() * targetField.size.x;
            let y: number = targetField.position.y + Math.random() * targetField.size.y;
            let targetPosition: Vector = new Vector(x, y);

            // Zufällige Größe zwischen 25 und 35 bestimmen
            let sizeValue: number = Math.random() * 10 + 25;
            let size: Vector = new Vector(sizeValue, sizeValue);

            // Parasit erzeugen
            let newParasite: Parasite = new Parasite(size, targetPosition);

            // Parasit in Parasitenliste legen
            parasites.push(newParasite);
        }
    }

    function farmField(_clickPosition: Vector): void {
        // Über alle Felder aus Felder-Liste iterieren
        for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
            let field: GardenElement = fields[fieldIndex];

            // Prüfen, ob Feld angeklickt wurde
            if (field.isHit(_clickPosition) === true) {
                // Je nach gewählter Aktion wird die entsprechende Funktion aufgerufen.
                switch (selectedUserAction) {
                    case UserAction.WATER:
                        waterField(fieldIndex);
                        break;
                    case UserAction.FERTILIZE:
                        fertilizeField(fieldIndex);
                        break;
                    case UserAction.HARVEST:
                        harvestField(fieldIndex);
                        break;
                    case UserAction.PLANT:
                        plantCrop(fieldIndex);
                        break;
                }
            }
        }
    }

    function waterField(_fieldIndex: number): void {
        // Feld aus Felderliste auslesen
        let field: GardenElement = fields[_fieldIndex];

        // Prüfen ob Feld bepflanzt
        if (field instanceof PlantedField) {
            // Feld bewässern
            field.waterField(40);
        }
    }

    function fertilizeField(_fieldIndex: number): void {
        // Feld aus Felderliste auslesen
        let field: GardenElement = fields[_fieldIndex];

        // Prüfen ob Feld bepflanzt
        if (field instanceof PlantedField) {
            // Feld düngen
            field.fertilizeField(30);

            // Kosten vom Spielerkapital abziehen
            playerMoney = playerMoney - priceFertilizer.currentPrice;
        }
    }

    function plantCrop(_fieldIndex: number): void {
        // Feld aus Felderliste auslesen
        let field: GardenElement = fields[_fieldIndex];

        // Prüfen ob Feld leer
        if (field instanceof EmptyField) {
            switch (selectedCropType) {
                case CropType.PUMPKIN:
                    // Leeres Feld durch Pumpkin ersetzen
                    fields[_fieldIndex] = new Pumpkin(field.position, field.size);
                    // Preis für Pumpkin von Spielerkapital abziehen
                    playerMoney = playerMoney - pricePumpkinSeedling.currentPrice;
                    break;
                case CropType.CARROT:
                    // Leeres Feld durch Carrot ersetzen
                    fields[_fieldIndex] = new Carrot(field.position, field.size);
                    // Preis für Carrot von Spielerkapital abziehen
                    playerMoney = playerMoney - priceCarrotSeedling.currentPrice;
                    break;
                case CropType.RADISH:
                    // Leeres Feld durch Radish ersetzen
                    fields[_fieldIndex] = new Radish(field.position, field.size);
                    // Preis für Radish von Spielerkapital abziehen
                    playerMoney = playerMoney - priceRadishSeedling.currentPrice;
                    break;
                case CropType.SALAD:
                    // Leeres Feld durch Salad ersetzen
                    fields[_fieldIndex] = new Salad(field.position, field.size);
                    // Preis für Salad von Spielerkapital abziehen
                    playerMoney = playerMoney - priceSaladSeedling.currentPrice;
                    break;
                case CropType.CORN:
                    // Leeres Feld durch Corn ersetzen
                    fields[_fieldIndex] = new Corn(field.position, field.size);
                    // Preis für Corn von Spielerkapital abziehen
                    playerMoney = playerMoney - priceCornSeedling.currentPrice;
                    break;
            }
        }
    }

    function harvestField(_fieldIndex: number): void {
        // Feld aus Felderliste auslesen
        let field: GardenElement = fields[_fieldIndex];

        // Prüfen ob Feld bepflanzt ist und ob es geerntet werden kann
        if (field instanceof PlantedField && field.isSellable() === true) {
            // Prüfen welche Art das bepflanzte Feld ist
            if (field instanceof Pumpkin) {
                playerMoney = playerMoney + sellingPricePumpkin.currentPrice;
            } else if (field instanceof Carrot) {
                playerMoney = playerMoney + sellingPriceCarrot.currentPrice;
            } else if (field instanceof Radish) {
                playerMoney = playerMoney + sellingPriceRadish.currentPrice;
            } else if (field instanceof Salad) {
                playerMoney = playerMoney + sellingPriceSalad.currentPrice;
            } else if (field instanceof Corn) {
                playerMoney = playerMoney + sellingPriceCorn.currentPrice;
            }

            // Bepflanztes Feld durch leeres Feld ersetzen
            fields[_fieldIndex] = new EmptyField(field.position, field.size);
        }
    }

    function fightPest(_clickPosition: Vector): void {
        let isPestRemoved: boolean = false;

        for (let parasiteIndex = 0; parasiteIndex < parasites.length; parasiteIndex++) {
            // Parasit an Stelle parasiteIndex aus parasites Liste auslesen
            let parasite: Parasite = parasites[parasiteIndex];

            // Prüfen ob Parasit angeklickt wurde
            if (parasite.isHit(_clickPosition) === true) {
                isPestRemoved = true;
                // Parasit aus parasites Liste entfernen
                parasites.splice(parasiteIndex, 1);
            }
        }

        // Prüfen ob min 1 Parasit entfernt wurde
        if (isPestRemoved === true) {
            // Kosten für Pestizid von Spielerkapital abziehen
            playerMoney = playerMoney - pricePesticide.currentPrice;
        }
    }
}
