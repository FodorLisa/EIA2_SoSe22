var BeachClasses;
(function (BeachClasses) {
    //Bei mir hat das ganze mit den Animationen nicht so richtig funktioniert und ich habe den Fehler nicht gefunden.
    //Habe aber versucht alles so gut es geht zu beschreiben
    window.addEventListener("load", handleLoad);
    var canvas;
    var imgData;
    // Cloud-Arrays für Animation
    var allClouds = [];
    var oneBoat = [];
    var allBirds = [];
    // Start
    function handleLoad(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        BeachClasses.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var bG = new BeachClasses.Background();
        console.log(bG);
        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = BeachClasses.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Boot erstellen
        createBoat(1);
        //Erscheinen der Vögel
        for (var i = 0; i < 7; i++) {
            var newBird = new BeachClasses.Birds();
            newBird.x = Math.random() * BeachClasses.crc2.canvas.width;
            newBird.y = Math.random() * 100;
            newBird.speed = (Math.random() < 0.5 ? -1 : 1) * 2;
            allBirds[i] = newBird;
        }
        //Wolken platzieren
        for (var i = 0; i < 10; i++) {
            var newCloud = new BeachClasses.Cloud();
            newCloud.x = Math.random() * BeachClasses.crc2.canvas.width;
            newCloud.y = Math.random() * 175;
            newCloud.speed = (Math.random() + 1) * 0.5;
            allClouds.push(newCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }
        window.setTimeout(animate, 10);
    } // close load-function
    //Funktion Boot
    function createBoat(_n) {
        for (var index = 0; index < _n; index++) {
            var boat1 = new BeachClasses.Boat();
            boat1.x = 0;
            boat1.y = 50;
            boat1.speed = (Math.random() + 1) * 0.5;
            oneBoat.push(boat1);
        }
    }
    // ANIMATIONEN:
    // Funktion um Vögel und Wolken zu animieren
    function animate() {
        BeachClasses.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < allClouds.length; i++) {
            allClouds[i].moveForward();
        }
        drawClouds();
        for (var i = 0; i < allBirds.length; i++) {
            var b = allBirds[i];
            b.update();
        }
        for (var i = 0; i < oneBoat.length; i++) {
            var boat = oneBoat[i];
            boat.moveForward();
            boat.drawBoat();
        }
        window.setTimeout(animate, 10);
    } //animate zu
    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds() {
        for (var i = 0; i < allClouds.length; i++)
            allClouds[i].drawCloud();
    }
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=main.js.map