namespace GenerativeKunstisa {
    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
    //Canvas per ID suchen
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    //2D Kontext von Canvas 
    crc2 = canvas.getContext("2d")!;
    crc3 = canvas.getContext("2d")!;

    circle();
    triangle();
}

//Funktion um Kreise zu erstellen
    function circle(): void {
        //Schleife um Höchstzahl der anzuzeigenden Elemente festzulegen
        for (let i: number = 0; i < 100; i++) {
    
            //Zufällige Farbe aus RGB -> Zahl hinter * gibt an wie hell oder dunkel Farbe wird
            let red: number = Math.floor(Math.random() * 400);
            let green: number = Math.floor(Math.random() * 400);
            let blue: number = Math.floor(Math.random() * 600);

            // Parameter circle: x, y, radius,  startAngle, endAngle
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (750) + 1), Math.floor(Math.random() * (60) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            // fillStyle zum Füllen der Kreise
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }
//Funktion Dreiecke generieren 
    function triangle(): void {
    
            for (let i: number = 2; i < 8; i++) {
    
                let red: number = Math.floor(Math.random() * 400);
                let green: number = Math.floor(Math.random() * 300);
                let blue: number = Math.floor(Math.random() * 300);
    
                crc3.beginPath();
                
                //ZUfällige Position der Linien wird ausgewählt
                crc3.moveTo(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (750) + 1));
                crc3.lineTo(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (500) + 1));
                crc3.lineTo(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (1000) + 1));

    
                crc3.stroke();
                crc3.closePath();
                
                crc3.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
                crc3.fill();
            }
        }
}