var BeachClasses;
(function (BeachClasses) {
    var Background = /** @class */ (function () {
        function Background() {
            this.drawSky(0, 0);
            this.drawOcean(0, 225);
            this.drawSand(0, 300);
            this.drawSun(100, 75);
            this.drawPerson(750, 500, "shirt", "#3da4f9");
            this.drawPerson(400, 350, "skirt", "#c28aca");
            this.drawSurfBoard(200, 500);
            this.drawSurfer(500, 200);
            this.drawSwimmer(100, 290);
            this.drawTowel(400, 350);
            this.drawTowel(600, 400);
            this.drawPalmTree(800, 400);
            this.drawPalmTree(775, 420);
            this.drawPalmTree(760, 450);
            this.drawPalmTree(0, 450);
            this.drawPalmTree(-120, 420);
            this.drawPalmTree(-180, 350);
        }
        //Methoden
        //Himmel 
        Background.prototype.drawSky = function (_x, _y) {
            console.log("Background");
            var gradient = BeachClasses.crc2.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "blue");
            gradient.addColorStop(1, "lightblue");
            BeachClasses.crc2.fillStyle = gradient;
            BeachClasses.crc2.fillRect(0, 0, BeachClasses.crc2.canvas.width, 225);
        };
        //Meer
        Background.prototype.drawOcean = function (_x, _y) {
            console.log("Ocean");
            var gradient = BeachClasses.crc2.createLinearGradient(0, 0, 0, 320);
            gradient.addColorStop(0.8, "darkblue");
            gradient.addColorStop(1, "blue");
            BeachClasses.crc2.fillStyle = gradient;
            BeachClasses.crc2.fillRect(0, 225, BeachClasses.crc2.canvas.width, 225);
        };
        //Sand
        Background.prototype.drawSand = function (_x, _y) {
            console.log("Beach");
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x, _y);
            BeachClasses.crc2.bezierCurveTo(_x + 100, _y + 150, _x + 1200, _y + 130, _x + 1250, _y + 40);
            BeachClasses.crc2.lineTo(_x + 1200, _y + 300);
            BeachClasses.crc2.lineTo(_x, _y + 300);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.fillStyle = "rgb(252, 186, 3)";
            BeachClasses.crc2.fill();
        };
        //Sonne
        Background.prototype.drawSun = function (_x, _y) {
            var r1 = 30;
            var r2 = 150;
            var gradient = BeachClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 90%, 0");
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(_x, _y);
            BeachClasses.crc2.fillStyle = gradient;
            BeachClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            BeachClasses.crc2.fill();
            BeachClasses.crc2.restore();
        };
        //Handtuch
        Background.prototype.drawTowel = function (_x, _y) {
            BeachClasses.crc2.beginPath(),
                BeachClasses.crc2.moveTo(_x + 100, _y + 150),
                BeachClasses.crc2.lineTo(_x + 50, _y + 150),
                BeachClasses.crc2.lineTo(_x + 100, _y + 200),
                BeachClasses.crc2.lineTo(_x + 160, _y + 200),
                BeachClasses.crc2.closePath(),
                BeachClasses.crc2.stroke(),
                BeachClasses.crc2.fillStyle = "#2aa5a5",
                BeachClasses.crc2.lineWidth = 0.5,
                BeachClasses.crc2.fill();
        };
        ;
        //Palme
        Background.prototype.drawPalmTree = function (_x, _y) {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 195, _y + 0);
            BeachClasses.crc2.lineTo(_x + 195, _y + 160);
            BeachClasses.crc2.lineTo(_x + 180, _y + 160);
            BeachClasses.crc2.lineTo(_x + 180, _y + 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#a5682a";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 150, _y + 70);
            BeachClasses.crc2.lineTo(_x + 175, _y - 20);
            BeachClasses.crc2.lineTo(_x + 200, _y - 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 125, _y + 10);
            BeachClasses.crc2.lineTo(_x + 180, _y - 30);
            BeachClasses.crc2.lineTo(_x + 200, _y - 20);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 100, _y - 30);
            BeachClasses.crc2.lineTo(_x + 180, _y - 30);
            BeachClasses.crc2.lineTo(_x + 200, _y - 20);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 75, _y - 50);
            BeachClasses.crc2.lineTo(_x + 180, _y - 30);
            BeachClasses.crc2.lineTo(_x + 200, _y - 20);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 250, _y + 70);
            BeachClasses.crc2.lineTo(_x + 175, _y - 20);
            BeachClasses.crc2.lineTo(_x + 200, _y - 10);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 175, _y - 10);
            BeachClasses.crc2.lineTo(_x + 280, _y - 10);
            BeachClasses.crc2.lineTo(_x + 200, _y - 20);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 100, _y - 30);
            BeachClasses.crc2.lineTo(_x + 150, _y - 20);
            BeachClasses.crc2.lineTo(_x + 300, _y - 20);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "green";
            BeachClasses.crc2.lineWidth = 0.5;
            BeachClasses.crc2.fill();
        };
        Background.prototype.drawPerson = function (_x, _y, _clothes, _color) {
            // Hände
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 12.5, _y + 42, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 62.5, _y + 42, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            // Füße
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 30, _y + 88, 5.5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 45, _y + 88, 5.5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            //shirt/skirt
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 37.5, _y + 20);
            BeachClasses.crc2.lineTo(_x + 12.5, _y + 37.5);
            BeachClasses.crc2.lineTo(_x + 15, _y + 45);
            BeachClasses.crc2.lineTo(_x + 25, _y + 42);
            if (_clothes === "shirt") {
                BeachClasses.crc2.lineTo(_x + 22, _y + 57);
                BeachClasses.crc2.lineTo(_x + 53, _y + 57);
            }
            else {
                BeachClasses.crc2.lineTo(_x + 20, _y + 87.5);
                BeachClasses.crc2.lineTo(_x + 55, _y + 87.5);
            }
            BeachClasses.crc2.lineTo(_x + 50, _y + 42);
            BeachClasses.crc2.lineTo(_x + 60, _y + 45);
            BeachClasses.crc2.lineTo(_x + 62.5, _y + 37.5);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = _color;
            BeachClasses.crc2.fill();
            if (_clothes === "shirt") {
                // hose
                BeachClasses.crc2.beginPath();
                BeachClasses.crc2.moveTo(_x + 25, _y + 57);
                BeachClasses.crc2.lineTo(_x + 27, _y + 87.5);
                BeachClasses.crc2.lineTo(_x + 35, _y + 87.5);
                BeachClasses.crc2.lineTo(_x + 36, _y + 63);
                BeachClasses.crc2.lineTo(_x + 39, _y + 63);
                BeachClasses.crc2.lineTo(_x + 40, _y + 87.5);
                BeachClasses.crc2.lineTo(_x + 48, _y + 87.5);
                BeachClasses.crc2.lineTo(_x + 50, _y + 57);
                BeachClasses.crc2.closePath();
                BeachClasses.crc2.stroke();
                BeachClasses.crc2.fillStyle = "#343F51";
                BeachClasses.crc2.fill();
            }
            // Kopf
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
        };
        Background.prototype.drawSwimmer = function (_x, _y) {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 37.5, _y + 20);
            BeachClasses.crc2.lineTo(_x + 12.5, _y + 37.5);
            BeachClasses.crc2.lineTo(_x + 15, _y + 45);
            BeachClasses.crc2.lineTo(_x + 25, _y + 42);
            BeachClasses.crc2.lineTo(_x + 25, _y + 57);
            BeachClasses.crc2.lineTo(_x + 50, _y + 57);
            BeachClasses.crc2.lineTo(_x + 50, _y + 42);
            BeachClasses.crc2.lineTo(_x + 60, _y + 45);
            BeachClasses.crc2.lineTo(_x + 62.5, _y + 37.5);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 12.5, _y + 42, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 62.5, _y + 42, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
        };
        Background.prototype.drawSurfer = function (_x, _y) {
            //Kopf
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            //Körper
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 37.5, _y + 20);
            BeachClasses.crc2.lineTo(_x + 12.5, _y + 37.5);
            BeachClasses.crc2.lineTo(_x + 15, _y + 45);
            BeachClasses.crc2.lineTo(_x + 25, _y + 42);
            BeachClasses.crc2.lineTo(_x + 25, _y + 57);
            BeachClasses.crc2.lineTo(_x + 50, _y + 57);
            BeachClasses.crc2.lineTo(_x + 50, _y + 42);
            BeachClasses.crc2.lineTo(_x + 60, _y + 45);
            BeachClasses.crc2.lineTo(_x + 62.5, _y + 37.5);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 12.5, _y + 42, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 62.5, _y + 42, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 37.5, _y + 12.5, 12.5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            //Badehose
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 25, _y + 57);
            BeachClasses.crc2.lineTo(_x + 27, _y + 75);
            BeachClasses.crc2.lineTo(_x + 35, _y + 75);
            BeachClasses.crc2.lineTo(_x + 36, _y + 63);
            BeachClasses.crc2.lineTo(_x + 39, _y + 63);
            BeachClasses.crc2.lineTo(_x + 40, _y + 75);
            BeachClasses.crc2.lineTo(_x + 48, _y + 75);
            BeachClasses.crc2.lineTo(_x + 50, _y + 57);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#E71837";
            BeachClasses.crc2.fill();
            //Bein links
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 28, _y + 75);
            BeachClasses.crc2.lineTo(_x + 28, _y + 90);
            BeachClasses.crc2.lineTo(_x + 34, _y + 90);
            BeachClasses.crc2.lineTo(_x + 34, _y + 75);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            //Bein rechts
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.moveTo(_x + 46.5, _y + 75);
            BeachClasses.crc2.lineTo(_x + 46.5, _y + 90);
            BeachClasses.crc2.lineTo(_x + 40, _y + 90);
            BeachClasses.crc2.lineTo(_x + 40, _y + 75);
            BeachClasses.crc2.closePath();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            //Füße
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 30, _y + 88, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.arc(_x + 45, _y + 88, 5, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FEC7B2";
            BeachClasses.crc2.fill();
        };
        //Surfboard
        Background.prototype.drawSurfBoard = function (_x, _y) {
            BeachClasses.crc2.beginPath();
            BeachClasses.crc2.ellipse(540, 290, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.fillStyle = "#FFFF99";
            BeachClasses.crc2.fill();
        };
        return Background;
    }());
    BeachClasses.Background = Background;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Background.js.map