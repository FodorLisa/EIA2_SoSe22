"use strict";
var BeachClasses10;
(function (BeachClasses10) {
    //Ich habe versucht die Superclass einzufügen, aber ich habe wohl einen Denkfehler. 
    //Würde versuchen das ganze nochmal hinzubekommen aber diese Woche war es mir leider nicht möglich. 
    window.addEventListener("load", handleLoad);
    let canvas;
    let imgData;
    // Cloud-Arrays für Animation
    let allClouds = [];
    let oneBoat = [];
    let allBirds = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        BeachClasses10.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        let bG = new BeachClasses10.Background;
        console.log(bG);
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = BeachClasses10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Boot erstellen
        createBoat(1);
        //Erscheinen der Vögel
        for (let i = 0; i < 3; i++) {
            let b = new BeachClasses10.Birds();
            allBirds[i] = b;
        }
        //Wolken platzieren
        for (let i = 0; i < 10; i++) {
            let allClouds = new BeachClasses10.Cloud();
            allClouds.x = Math.random() * BeachClasses10.crc2.canvas.width;
            allClouds.y = Math.random() * BeachClasses10.crc2.canvas.height - 550;
            allClouds.speed = (Math.random() + 1) * 0.5;
            allClouds.push(allClouds); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    //Funktion Boot
    function createBoat(_n) {
        for (let index = 0; index < _n; index++) {
            let boat1 = new BeachClasses10.Boat();
            oneBoat.push(boat1);
        }
    }
    // ANIMATIONEN:
    // Funktion um Vögel und Wolken zu animieren 
    function animate() {
        BeachClasses10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < allClouds.length; i++) {
            allClouds[i].moveForward();
            if (allClouds[i].x > +1300) {
                allClouds[i].x = canvas.width - 2000;
            }
        }
        drawClouds();
        for (let i = 0; i < allBirds.length; i++) {
            let b = allBirds[i];
            b.update();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds() {
        for (let i = 0; i < allClouds.length; i++)
            allClouds[i].drawCloud();
    }
})(BeachClasses10 || (BeachClasses10 = {}));
//# sourceMappingURL=main.js.map