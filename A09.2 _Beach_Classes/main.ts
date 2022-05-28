namespace BeachClasses {

    //Bei mir hat das ganze mit den Animationen nicht so richtig funktioniert und ich habe den Fehler nicht gefunden.
    //Habe aber versucht alles so gut es geht zu beschreiben 

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    // Cloud-Arrays für Animation
    let allClouds: Cloud[] = [];
    let oneBoat: Boat [] = [];
    let allBirds: Birds[] = [];
    

    // Start
    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        //Hintergund mittels einer Klasse erstellen
        let bG: Background = new Background;
        console.log(bG); 

        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Boot erstellen
        createBoat(1);

        //Erscheinen der Vögel
        for (let i: number = 0; i < z; i++) {

            let b: Birds = new Birds();
            allBirds[i] = b; 
        }
        //Wolken platzieren
        for (let i: number = 0; i < 10; i++) {
            let allClouds: Cloud = new Cloud();
            allClouds.x = Math.random() * crc2.canvas.width;
            allClouds.y = Math.random() * crc2.canvas.height - 550; 
            allClouds.speed = (Math.random() + 1) * 0.5;
            allClouds.push(allClouds); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        window.setTimeout(animate, 10);

    } // close load-function
    //Funktion Boot
    function createBoat(_n: number): void {
        for (let index: number = 0; index < _n; index++) {
            let boat1: Boat = new Boat ();
            oneBoat.push(boat1);
        }
    }
    // ANIMATIONEN:
    
    // Funktion um Vögel und Wolken zu animieren 
    function animate(): void {

        crc2.putImageData(imgData, 0, 0);
      

        for (let i: number = 0; i < allClouds.length; i++) {

            allClouds[i].moveForward();

     
            if (allClouds[i].x > + 1300) {
                allClouds[i].x = canvas.width - 2000;
            }
        }

        drawClouds();

        
        for (let i: number = 0; i < allBirds.length; i++) {

            let b: Birds = allBirds[i]; 
            b.update();
        }

        window.setTimeout(animate, 10);

    } //animate zu


    // Funktion um die Wolken zu malen (wurden davor ins jeweilige Array gepusht)
    function drawClouds(): void {

        for (let i: number = 0; i < allClouds.length; i++)
            allClouds[i].drawCloud();
    } 


} 