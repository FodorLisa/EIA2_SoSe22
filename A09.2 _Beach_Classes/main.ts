namespace BeachClasses {
    //Bei mir hat das ganze mit den Animationen nicht so richtig funktioniert und ich habe den Fehler nicht gefunden.
    //Habe aber versucht alles so gut es geht zu beschreiben

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    // Cloud-Arrays für Animation
    let allClouds: Cloud[] = [];
    let oneBoat: Boat[] = [];
    let allBirds: Birds[] = [];

    // Start
    function handleLoad(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        //Hintergund mittels einer Klasse erstellen
        let bG: Background = new Background();
        console.log(bG);

        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Boot erstellen
        createBoat(1);

        //Erscheinen der Vögel
        for (let i: number = 0; i < 7; i++) {
            let newBird: Birds = new Birds();
            newBird.x = Math.random() * crc2.canvas.width;
            newBird.y = Math.random() * 100;
            newBird.speed = (Math.random() < 0.5 ? -1 : 1) * 2;
            allBirds[i] = newBird;
        }
        //Wolken platzieren
        for (let i: number = 0; i < 10; i++) {
            let newCloud: Cloud = new Cloud();
            newCloud.x = Math.random() * crc2.canvas.width;
            newCloud.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            allClouds.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        window.setTimeout(animate, 10);
    } // close load-function
    //Funktion Boot
    function createBoat(_n: number): void {
        for (let index: number = 0; index < _n; index++) {
            let boat1: Boat = new Boat();
            boat1.x = 0;
            boat1.y = 50;
            boat1.speed = (Math.random() + 1) * 0.5;
            oneBoat.push(boat1);
        }
    }
    // ANIMATIONEN:

    // Funktion um Vögel und Wolken zu animieren
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < allClouds.length; i++) {
            allClouds[i].moveForward();
        }

        drawClouds();

        for (let i: number = 0; i < allBirds.length; i++) {
            let b: Birds = allBirds[i];
            b.update();
        }

        for (let i: number = 0; i < oneBoat.length; i++) {
            let boat: Boat = oneBoat[i];
            boat.moveForward();
            boat.drawBoat();
        }

        window.setTimeout(animate, 10);
    } //animate zu

    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds(): void {
        for (let i: number = 0; i < allClouds.length; i++)
            allClouds[i].drawCloud();
    }
}
