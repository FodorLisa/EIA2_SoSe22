namespace BeachClasses {

    export class Background {

        constructor() {
            this.drawSky (0, 0);
            this.drawOcean (0, 225);
            this.drawSand( 0, 300);
            this.drawSun ( 100, 75);
            this.drawPerson (750,500, "shirt", "#3da4f9");
            this.drawPerson (400, 350, "skirt", "#c28aca");
            this.drawSurfBoard(200,  500 );
            this.drawSurfer( 500,  200 );
            this.drawSwimmer(  100,  290 );
            this.drawTowel ( 400,  350);
            this.drawTowel ( 600,  400);
            this.drawPalmTree ( 800,  400);
            this.drawPalmTree ( 775,  420);
            this.drawPalmTree ( 760,  450);
            this.drawPalmTree ( 0,  450);
            this.drawPalmTree (-120,  420);
            this.drawPalmTree ( -180,  350);
    }

    //Methoden

    //Himmel 
    drawSky(_x: number, _y: number): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 200);

        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");

        crc2.fillStyle = gradient;
        crc2.fillRect (0, 0, crc2.canvas.width, 225);
    }
    //Meer
    drawOcean(_x: number, _y: number): void {
        console.log("Ocean");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 320);

        gradient.addColorStop(0.8, "darkblue");
        gradient.addColorStop(1, "blue");

        crc2.fillStyle = gradient;
        crc2.fillRect (0, 225, crc2.canvas.width, 225);
    }
    //Sand
    drawSand(_x: number, _y: number): void {
        console.log("Beach");
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 100, _y + 150, _x + 1200, _y + 130, _x + 1250, _y + 40);
        crc2.lineTo(_x + 1200, _y + 300);
        crc2.lineTo(_x, _y + 300);
        crc2.closePath();
        crc2.fillStyle = "rgb(252, 186, 3)";
        crc2.fill();
    }
     //Sonne
    drawSun(_x: number, _y: number): void {
    
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1"); 
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 0"); 
    
        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    
    //Handtuch
    drawTowel(_x: number, _y: number): void {
        crc2.beginPath(),
        crc2.moveTo(_x + 100, _y + 150),
        crc2.lineTo(_x + 50, _y + 150),
        crc2.lineTo(_x + 100, _y + 200),
        crc2.lineTo(_x + 160, _y + 200),
        crc2.closePath(),
        crc2.stroke( ),
        crc2.fillStyle = "#2aa5a5",
        crc2.lineWidth = 0.5,
        crc2.fill();
    };
    //Palme
    drawPalmTree(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x + 195, _y + 0);
        crc2.lineTo(_x + 195, _y + 160);
        crc2.lineTo(_x + 180, _y + 160);
        crc2.lineTo(_x + 180, _y + 10);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "#a5682a";
        crc2.lineWidth = 0.5;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 150, _y + 70);
        crc2.lineTo(_x + 175, _y - 20);
        crc2.lineTo(_x + 200, _y - 10);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 125, _y + 10);
        crc2.lineTo(_x + 180, _y - 30);
        crc2.lineTo(_x + 200, _y - 20);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 100, _y - 30);
        crc2.lineTo(_x + 180, _y - 30);
        crc2.lineTo(_x + 200, _y - 20);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 75, _y - 50);
        crc2.lineTo(_x + 180, _y - 30);
        crc2.lineTo(_x + 200, _y - 20);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();

        crc2.moveTo(_x + 250, _y + 70);
        crc2.lineTo(_x + 175, _y - 20);
        crc2.lineTo(_x + 200, _y - 10);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 175, _y - 10);
        crc2.lineTo(_x + 280, _y - 10);
        crc2.lineTo(_x + 200, _y - 20);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 100, _y - 30);
        crc2.lineTo(_x + 150, _y - 20);
        crc2.lineTo(_x + 300, _y - 20);
        crc2.closePath();
        crc2.stroke( );
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();

    }
    drawPerson(_x: number, _y: number, _clothes: "skirt" | "shirt", _color: string): void {
        // Hände
        crc2.beginPath();
        crc2.arc(_x + 12.5, _y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 62.5, _y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        // Füße
        crc2.beginPath();
        crc2.arc(_x + 30, _y + 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 45, _y + 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //shirt/skirt
        crc2.beginPath();
        crc2.moveTo(_x + 37.5, _y + 20);
        crc2.lineTo(_x + 12.5, _y + 37.5);
        crc2.lineTo(_x + 15, _y + 45);
        crc2.lineTo(_x + 25, _y + 42);
        if (_clothes === "shirt") {
            crc2.lineTo(_x + 22, _y + 57);
            crc2.lineTo(_x + 53, _y + 57);
        } else {
            crc2.lineTo(_x + 20, _y + 87.5);
            crc2.lineTo(_x + 55, _y + 87.5);
        }
        crc2.lineTo(_x + 50, _y + 42);
        crc2.lineTo(_x + 60, _y + 45);
        crc2.lineTo(_x + 62.5, _y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

        if (_clothes === "shirt") {
            // hose
            crc2.beginPath();
            crc2.moveTo(_x + 25, _y + 57);
            crc2.lineTo(_x + 27, _y + 87.5);
            crc2.lineTo(_x + 35, _y + 87.5);
            crc2.lineTo(_x + 36, _y + 63);
            crc2.lineTo(_x + 39, _y + 63);
            crc2.lineTo(_x + 40, _y + 87.5);
            crc2.lineTo(_x + 48, _y + 87.5);
            crc2.lineTo(_x + 50, _y + 57);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#343F51";
            crc2.fill();
        }


        // Kopf
        crc2.beginPath();
        crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }
    drawSwimmer(_x:number, _y:number): void {
        crc2.beginPath();
        crc2.moveTo(_x + 37.5, _y + 20);
        crc2.lineTo(_x + 12.5, _y + 37.5);
        crc2.lineTo(_x + 15, _y + 45);
        crc2.lineTo(_x + 25, _y + 42);

        crc2.lineTo(_x + 25, _y + 57);
        crc2.lineTo(_x + 50, _y + 57);



        crc2.lineTo(_x + 50, _y + 42);
        crc2.lineTo(_x + 60, _y + 45);
        crc2.lineTo(_x + 62.5, _y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 12.5, _y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 62.5, _y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }

    drawSurfer(_x: number, _y:number): void {
        //Kopf
        crc2.beginPath();
        crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Körper
        crc2.beginPath();
        crc2.moveTo(_x + 37.5, _y + 20);
        crc2.lineTo(_x + 12.5, _y + 37.5);
        crc2.lineTo(_x + 15, _y + 45);
        crc2.lineTo(_x + 25, _y + 42);

        crc2.lineTo(_x + 25, _y + 57);
        crc2.lineTo(_x + 50, _y + 57);

        crc2.lineTo(_x + 50, _y + 42);
        crc2.lineTo(_x + 60, _y + 45);
        crc2.lineTo(_x + 62.5, _y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 12.5, _y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 62.5, _y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Badehose

        crc2.beginPath();
        crc2.moveTo(_x + 25, _y + 57);
        crc2.lineTo(_x + 27, _y + 75);
        crc2.lineTo(_x + 35, _y + 75);
        crc2.lineTo(_x + 36, _y + 63);
        crc2.lineTo(_x + 39, _y + 63);
        crc2.lineTo(_x + 40, _y + 75);
        crc2.lineTo(_x + 48, _y + 75);
        crc2.lineTo(_x + 50, _y + 57);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E71837";
        crc2.fill();

        //Bein links
        crc2.beginPath();
        crc2.moveTo(_x + 28, _y + 75);
        crc2.lineTo(_x + 28, _y + 90);
        crc2.lineTo(_x + 34, _y + 90);
        crc2.lineTo(_x + 34, _y + 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();


        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(_x + 46.5, _y + 75);
        crc2.lineTo(_x + 46.5, _y + 90);
        crc2.lineTo(_x + 40, _y + 90);
        crc2.lineTo(_x + 40, _y + 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Füße
        crc2.beginPath();
        crc2.arc(_x + 30, _y + 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 45, _y + 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }

    //Surfboard
   drawSurfBoard(_x: Number, _y: number): void {

            crc2.beginPath();
            crc2.ellipse(540, 290, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FFFF99";
            crc2.fill();
        }
}
}