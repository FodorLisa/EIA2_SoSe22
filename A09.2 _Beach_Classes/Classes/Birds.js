var BeachClasses;
(function (BeachClasses) {
    var Birds = /** @class */ (function () {
        function Birds() {
            //Parameter _x: number, _y: number gelöscht
            this.x = 0; // Ausgang Vögel
            this.y = 0;
            this.drawBirds();
            this.setRandomStyle();
        }
        Birds.prototype.update = function () {
            this.drawBirds();
            this.moveForward();
        };
        Birds.prototype.setRandomStyle = function () {
            // Was soll hier passieren?
        };
        //Methode DrawBirds
        Birds.prototype.drawBirds = function () {
            BeachClasses.crc2.save();
            BeachClasses.crc2.translate(this.x, this.y);
            BeachClasses.crc2.fillStyle = "rgb(128, 128, 128)";
            BeachClasses.crc2.strokeStyle = "rgb(0, 0, 0)";
            BeachClasses.crc2.lineWidth = 0.202406;
            BeachClasses.crc2.moveTo(38, 89);
            BeachClasses.crc2.bezierCurveTo(40, 89, 42, 89, 44, 88);
            BeachClasses.crc2.bezierCurveTo(46, 88, 47, 89, 48, 91);
            BeachClasses.crc2.bezierCurveTo(49, 92, 50, 93, 50, 94);
            BeachClasses.crc2.bezierCurveTo(50, 94, 51, 95, 51, 95);
            BeachClasses.crc2.bezierCurveTo(51, 94, 51, 95, 51, 95);
            BeachClasses.crc2.bezierCurveTo(51, 96, 51, 96, 51, 96);
            BeachClasses.crc2.bezierCurveTo(54, 95, 55, 95, 56, 93);
            BeachClasses.crc2.bezierCurveTo(57, 91, 59, 90, 60, 89);
            BeachClasses.crc2.bezierCurveTo(59, 90, 58, 90, 57, 91);
            BeachClasses.crc2.bezierCurveTo(57, 91, 58, 91, 58, 91);
            BeachClasses.crc2.bezierCurveTo(58, 90, 59, 90, 59, 90);
            BeachClasses.crc2.bezierCurveTo(61, 90, 64, 91, 66, 91);
            BeachClasses.crc2.bezierCurveTo(70, 92, 68, 92, 72, 93);
            BeachClasses.crc2.lineTo(75, 91);
            BeachClasses.crc2.lineTo(75, 91);
            BeachClasses.crc2.bezierCurveTo(71.716034, 90.217328, 73.807041, 90.649845, 69.554957, 89.788271);
            BeachClasses.crc2.bezierCurveTo(68.329452, 89.539851, 65.47841, 88.943713, 64.129977, 88.732732);
            BeachClasses.crc2.bezierCurveTo(63.354232, 88.611354, 62.434019, 88.465082, 61.630308, 88.6247);
            BeachClasses.crc2.bezierCurveTo(59.865622, 88.97517, 58.623414, 91.339732, 56.885511, 91.197537);
            BeachClasses.crc2.bezierCurveTo(55.421275, 92.20964, 54.13594, 93.404718, 53.056477, 94.826832);
            BeachClasses.crc2.bezierCurveTo(52.888324, 95.019465, 52.732479, 95.223575, 52.55202, 95.40473);
            BeachClasses.crc2.bezierCurveTo(52.404224, 95.553095, 51.884939, 95.902173, 52.074317, 95.812775);
            BeachClasses.crc2.bezierCurveTo(53.133963, 95.312554, 54.130053, 94.686206, 55.179285, 94.164493);
            BeachClasses.crc2.bezierCurveTo(55.245025, 94.131803, 55.101165, 94.380877, 55.042326, 94.336977);
            BeachClasses.crc2.bezierCurveTo(54.771509, 94.134936, 54.974176, 93.563952, 54.659053, 93.398593);
            BeachClasses.crc2.bezierCurveTo(54.497178, 93.051994, 54.246666, 92.4953, 54.054845, 92.172979);
            BeachClasses.crc2.bezierCurveTo(53.393511, 91.061716, 52.476209, 90.126853, 51.649574, 89.143101);
            BeachClasses.crc2.bezierCurveTo(50.604784, 87.909378, 49.493648, 86.541019, 47.735741, 86.565871);
            BeachClasses.crc2.bezierCurveTo(45.851939, 86.688193, 44.001036, 87.079636, 42.135424, 87.353374);
            BeachClasses.crc2.lineTo(38.967857, 89.715482);
            BeachClasses.crc2.fill();
            BeachClasses.crc2.stroke();
            BeachClasses.crc2.restore();
            // tslint:disable-next-line: no-unused-expression
        };
        Birds.prototype.moveForward = function () {
            this.x += this.speed * +0.5; // - nach links und + nach rechts
            if (this.x < 0) {
                this.x = this.x + BeachClasses.crc2.canvas.width;
            }
            if (this.x > BeachClasses.crc2.canvas.width) {
                this.x = this.x - BeachClasses.crc2.canvas.width;
            }
        };
        return Birds;
    }());
    BeachClasses.Birds = Birds;
})(BeachClasses || (BeachClasses = {}));
//# sourceMappingURL=Birds.js.map