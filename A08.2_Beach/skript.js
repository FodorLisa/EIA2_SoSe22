"use strict";
var L08Strand;
(function (L08Strand) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawSky();
        drawOcean();
        drawSand({ x: 0, y: 300 });
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 200, y: 50 }, { x: 150, y: 200 });
        drawCloud({ x: 600, y: 120 }, { x: 150, y: 150 });
        drawCloud({ x: 1000, y: 100 }, { x: 150, y: 150 });
        drawPerson({ x: 750, y: 500 }, "shirt", "#3da4f9");
        drawPerson({ x: 400, y: 350 }, "skirt", "#c28aca");
        drawSurfBoard({ x: 200, y: 500 });
        drawSurfer({ x: 500, y: 200 });
        drawSwimmer({ x: 100, y: 290 });
        drawBird({ x: 300, y: 600 });
        drawBoat({ x: 700, y: 30 });
        drawTowel({ x: 400, y: 350 });
        drawTowel({ x: 600, y: 400 });
        drawPalmTree({ x: 800, y: 400 });
        drawPalmTree({ x: 775, y: 420 });
        drawPalmTree({ x: 760, y: 450 });
        drawPalmTree({ x: 0, y: 450 });
        drawPalmTree({ x: -120, y: 420 });
        drawPalmTree({ x: -180, y: 350 });
    }
    //Himmel 
    function drawSky() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 225);
    }
    //Meer
    function drawOcean() {
        console.log("Ocean");
        let gradient = crc2.createLinearGradient(0, 0, 0, 320);
        gradient.addColorStop(0.8, "darkblue");
        gradient.addColorStop(1, "blue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 225, crc2.canvas.width, 225);
    }
    //Sand
    function drawSand(_position) {
        console.log("Beach");
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.bezierCurveTo(_position.x + 100, _position.y + 150, _position.x + 1200, _position.y + 130, _position.x + 1250, _position.y + 40);
        crc2.lineTo(_position.x + 1200, _position.y + 300);
        crc2.lineTo(_position.x, _position.y + 300);
        crc2.closePath();
        crc2.fillStyle = "rgb(252, 186, 3)";
        crc2.fill();
    }
    //Sonne
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    //Verschiedene Wolken
    function drawCloud(_position, _size) {
        console.log("Cloud 1", _position, _size);
        let nParticles = 60;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    //Handtuch
    function drawTowel(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x + 100, _position.y + 150);
        crc2.lineTo(_position.x + 50, _position.y + 150);
        crc2.lineTo(_position.x + 100, _position.y + 200);
        crc2.lineTo(_position.x + 160, _position.y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#2aa5a5";
        crc2.lineWidth = 0.5;
        crc2.fill();
    }
    function drawPalmTree(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x + 195, _position.y + 0);
        crc2.lineTo(_position.x + 195, _position.y + 160);
        crc2.lineTo(_position.x + 180, _position.y + 160);
        crc2.lineTo(_position.x + 180, _position.y + 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#a5682a";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 150, _position.y + 70);
        crc2.lineTo(_position.x + 175, _position.y - 20);
        crc2.lineTo(_position.x + 200, _position.y - 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 125, _position.y + 10);
        crc2.lineTo(_position.x + 180, _position.y - 30);
        crc2.lineTo(_position.x + 200, _position.y - 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 100, _position.y - 30);
        crc2.lineTo(_position.x + 180, _position.y - 30);
        crc2.lineTo(_position.x + 200, _position.y - 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 75, _position.y - 50);
        crc2.lineTo(_position.x + 180, _position.y - 30);
        crc2.lineTo(_position.x + 200, _position.y - 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 250, _position.y + 70);
        crc2.lineTo(_position.x + 175, _position.y - 20);
        crc2.lineTo(_position.x + 200, _position.y - 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 175, _position.y - 10);
        crc2.lineTo(_position.x + 280, _position.y - 10);
        crc2.lineTo(_position.x + 200, _position.y - 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 100, _position.y - 30);
        crc2.lineTo(_position.x + 150, _position.y - 20);
        crc2.lineTo(_position.x + 300, _position.y - 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.lineWidth = 0.5;
        crc2.fill();
    }
    //Boot
    function drawBoat(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x + 300, _position.y + 150);
        crc2.lineTo(_position.x + 50, _position.y + 150);
        crc2.lineTo(_position.x + 100, _position.y + 200);
        crc2.lineTo(_position.x + 250, _position.y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#a5682a";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 175, _position.y + 10);
        crc2.lineTo(_position.x + 175, _position.y + 150);
        crc2.lineTo(_position.x + 180, _position.y + 150);
        crc2.lineTo(_position.x + 180, _position.y + 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#a5682a";
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 90, _position.y + 140);
        crc2.lineTo(_position.x + 180, _position.y + 140);
        crc2.lineTo(_position.x + 180, _position.y + 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#fff";
        crc2.lineWidth = 0.5;
        crc2.fill();
    }
    //Vögel
    function drawBird(_position) {
        crc2.beginPath();
        crc2.fillStyle = "rgb(128, 128, 128)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.202406;
        crc2.moveTo(38, 89);
        crc2.bezierCurveTo(40, 89, 42, 89, 44, 88);
        crc2.bezierCurveTo(46, 88, 47, 89, 48, 91);
        crc2.bezierCurveTo(49, 92, 50, 93, 50, 94);
        crc2.bezierCurveTo(50.858896, 94.430177, 51.112094, 95.012535, 51.251640, 95.323360);
        crc2.bezierCurveTo(51.498534, 95.561562, 51.391123, 95.997052, 51.599041, 96.255267);
        crc2.bezierCurveTo(51.685051, 96.362082, 51.825527, 96.525251, 51.950593, 96.468984);
        crc2.bezierCurveTo(54.864698, 95.157956, 55.255270, 95.084081, 56.641354, 93.301374);
        crc2.bezierCurveTo(57.707029, 91.885697, 59.011758, 90.730606, 60.501535, 89.783731);
        crc2.bezierCurveTo(59.622390, 90.300491, 58.721143, 90.781369, 57.864102, 91.334015);
        crc2.bezierCurveTo(57.649601, 91.472331, 58.322061, 91.101782, 58.567277, 91.030998);
        crc2.bezierCurveTo(58.858499, 90.946938, 59.159819, 90.884281, 59.462704, 90.872560);
        crc2.bezierCurveTo(61.841517, 90.780500, 64.302144, 91.418980, 66.617156, 91.838747);
        crc2.bezierCurveTo(70.887412, 92.671076, 68.797780, 92.239646, 72.887130, 93.127826);
        crc2.lineTo(75.828302, 91.084253);
        crc2.lineTo(75.828302, 91.084253);
        crc2.bezierCurveTo(71.716034, 90.217328, 73.807041, 90.649845, 69.554957, 89.788271);
        crc2.bezierCurveTo(68.329452, 89.539851, 65.478410, 88.943713, 64.129977, 88.732732);
        crc2.bezierCurveTo(63.354232, 88.611354, 62.434019, 88.465082, 61.630308, 88.624700);
        crc2.bezierCurveTo(59.865622, 88.975170, 58.623414, 91.339732, 56.885511, 91.197537);
        crc2.bezierCurveTo(55.421275, 92.209640, 54.135940, 93.404718, 53.056477, 94.826832);
        crc2.bezierCurveTo(52.888324, 95.019465, 52.732479, 95.223575, 52.552020, 95.404730);
        crc2.bezierCurveTo(52.404224, 95.553095, 51.884939, 95.902173, 52.074317, 95.812775);
        crc2.bezierCurveTo(53.133963, 95.312554, 54.130053, 94.686206, 55.179285, 94.164493);
        crc2.bezierCurveTo(55.245025, 94.131803, 55.101165, 94.380877, 55.042326, 94.336977);
        crc2.bezierCurveTo(54.771509, 94.134936, 54.974176, 93.563952, 54.659053, 93.398593);
        crc2.bezierCurveTo(54.497178, 93.051994, 54.246666, 92.495300, 54.054845, 92.172979);
        crc2.bezierCurveTo(53.393511, 91.061716, 52.476209, 90.126853, 51.649574, 89.143101);
        crc2.bezierCurveTo(50.604784, 87.909378, 49.493648, 86.541019, 47.735741, 86.565871);
        crc2.bezierCurveTo(45.851939, 86.688193, 44.001036, 87.079636, 42.135424, 87.353374);
        crc2.lineTo(38.967857, 89.715482);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "rgb(128, 128, 128)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.202406;
        crc2.moveTo(1.479636, 126.490280);
        crc2.bezierCurveTo(4.898746, 125.565810, 8.303936, 124.474320, 11.764386, 124.032550);
        crc2.bezierCurveTo(14.813366, 123.757930, 16.708476, 127.283060, 18.577316, 130.624860);
        crc2.bezierCurveTo(20.090556, 133.409020, 21.704916, 136.146270, 22.853926, 139.373700);
        crc2.bezierCurveTo(23.155476, 140.220740, 23.617016, 141.916730, 23.871396, 142.821920);
        crc2.bezierCurveTo(24.321446, 143.515650, 24.125646, 144.783920, 24.504656, 145.535900);
        crc2.bezierCurveTo(24.661426, 145.846990, 24.917526, 146.322150, 25.145496, 146.158310);
        crc2.bezierCurveTo(30.457546, 142.340230, 31.169496, 142.125070, 33.696146, 136.933370);
        crc2.bezierCurveTo(35.638746, 132.810520, 38.017106, 129.446580, 40.732766, 126.689040);
        crc2.bezierCurveTo(39.130206, 128.193990, 37.487336, 129.594440, 35.925066, 131.203880);
        crc2.bezierCurveTo(35.534056, 131.606700, 36.759866, 130.527560, 37.206876, 130.321430);
        crc2.bezierCurveTo(37.737726, 130.076510, 38.286996, 129.894140, 38.839106, 129.860010);
        crc2.bezierCurveTo(43.175396, 129.591790, 47.660786, 131.451330, 51.880776, 132.673790);
        crc2.bezierCurveTo(59.664896, 135.097760, 55.855766, 133.841320, 63.310126, 136.427940);
        crc2.lineTo(68.671506, 130.476510);
        crc2.lineTo(68.671506, 130.476510);
        crc2.bezierCurveTo(61.175356, 127.951800, 64.987006, 129.211390, 57.236006, 126.702260);
        crc2.bezierCurveTo(55.002056, 125.978800, 49.804976, 124.242670, 47.346966, 123.628240);
        crc2.bezierCurveTo(45.932866, 123.274750, 44.255446, 122.848770, 42.790386, 123.313630);
        crc2.bezierCurveTo(39.573576, 124.334290, 37.309186, 131.220540, 34.141216, 130.806410);
        crc2.bezierCurveTo(31.472096, 133.753950, 29.129106, 137.234350, 27.161386, 141.375920);
        crc2.bezierCurveTo(26.854856, 141.936910, 26.570776, 142.531330, 26.241826, 143.058890);
        crc2.bezierCurveTo(25.972406, 143.490990, 25.025816, 144.507600, 25.371036, 144.247250);
        crc2.bezierCurveTo(27.302626, 142.790470, 29.118366, 140.966370, 31.030976, 139.447010);
        crc2.bezierCurveTo(31.150746, 139.351810, 30.888616, 140.077160, 30.781336, 139.949310);
        crc2.bezierCurveTo(30.287666, 139.360920, 30.657016, 137.698070, 30.082666, 137.216500);
        crc2.bezierCurveTo(29.787596, 136.207100, 29.330956, 134.585870, 28.981266, 133.647190);
        crc2.bezierCurveTo(27.775746, 130.410870, 26.103626, 127.688300, 24.596766, 124.823350);
        crc2.bezierCurveTo(22.692256, 121.230420, 20.666806, 117.245390, 17.462356, 117.317760);
        crc2.bezierCurveTo(14.028436, 117.673990, 10.654476, 118.813970, 7.253696, 119.611170);
        crc2.lineTo(1.479636, 126.490280);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "rgb(128, 128, 128)";
        crc2.strokeStyle = "rgb(0, 0, 0)";
        crc2.lineWidth = 0.202406;
        crc2.moveTo(180.196850, 74.974407);
        crc2.bezierCurveTo(181.444500, 74.643835, 182.687070, 74.253539, 183.949810, 74.095570);
        crc2.bezierCurveTo(185.062410, 73.997370, 185.753940, 75.257891, 186.435890, 76.452854);
        crc2.bezierCurveTo(186.988080, 77.448416, 187.577170, 78.427204, 187.996450, 79.581270);
        crc2.bezierCurveTo(188.106480, 79.884155, 188.274910, 80.490609, 188.367730, 80.814287);
        crc2.bezierCurveTo(188.531960, 81.062352, 188.460530, 81.515860, 188.598810, 81.784755);
        crc2.bezierCurveTo(188.656010, 81.895994, 188.749470, 82.065903, 188.832660, 82.007316);
        crc2.bezierCurveTo(190.771060, 80.642044, 191.030850, 80.565107, 191.952840, 78.708656);
        crc2.bezierCurveTo(192.661710, 77.234404, 193.529580, 76.031523, 194.520540, 75.045480);
        crc2.bezierCurveTo(193.935750, 75.583621, 193.336270, 76.084395, 192.766180, 76.659900);
        crc2.bezierCurveTo(192.623500, 76.803941, 193.070810, 76.418061, 193.233920, 76.344353);
        crc2.bezierCurveTo(193.427640, 76.256773, 193.628060, 76.191562, 193.829540, 76.179358);
        crc2.bezierCurveTo(195.411870, 76.083448, 197.048620, 76.748384, 198.588510, 77.185511);
        crc2.bezierCurveTo(201.428980, 78.052277, 200.039010, 77.602998, 202.759150, 78.527924);
        crc2.lineTo(204.715550, 76.399807);
        crc2.lineTo(204.715550, 76.399807);
        crc2.bezierCurveTo(201.980160, 75.497019, 203.371050, 75.947424, 200.542670, 75.050207);
        crc2.bezierCurveTo(199.727480, 74.791512, 197.831040, 74.170705, 196.934100, 73.950997);
        crc2.bezierCurveTo(196.418080, 73.824596, 195.805980, 73.672273, 195.271370, 73.838498);
        crc2.bezierCurveTo(194.097540, 74.203466, 193.271260, 76.665858, 192.115250, 76.517773);
        crc2.bezierCurveTo(191.141270, 77.571756, 190.286300, 78.816281, 189.568270, 80.297225);
        crc2.bezierCurveTo(189.456410, 80.497825, 189.352750, 80.710378, 189.232710, 80.899023);
        crc2.bezierCurveTo(189.134410, 81.053534, 188.788980, 81.417054, 188.914960, 81.323958);
        crc2.bezierCurveTo(189.619800, 80.803041, 190.282380, 80.150778, 190.980300, 79.607484);
        crc2.bezierCurveTo(191.024000, 79.573444, 190.928400, 79.832814, 190.889200, 79.787097);
        crc2.bezierCurveTo(190.709050, 79.576700, 190.843900, 78.982098, 190.634250, 78.809898);
        crc2.bezierCurveTo(190.526580, 78.448955, 190.359950, 77.869235, 190.232340, 77.533581);
        crc2.bezierCurveTo(189.792440, 76.376335, 189.182270, 75.402797, 188.632410, 74.378345);
        crc2.bezierCurveTo(187.937450, 73.093583, 187.198350, 71.668612, 186.029020, 71.694491);
        crc2.bezierCurveTo(184.775970, 71.821871, 183.544790, 72.229506, 182.303830, 72.514569);
        crc2.lineTo(180.196840, 74.974407);
        crc2.fill();
        crc2.stroke();
    }
    //Funktion Figuren + Surfer dankend übernommen von Anja Weber + Erklärung :) 
    function drawCloud3(_position, _size) {
        console.log("Cloud 2", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawPerson(_position, _clothes, _color) {
        // Hände
        crc2.beginPath();
        crc2.arc(_position.x + 12.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        // Füße
        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y + 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 45, _position.y + 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //shirt/skirt
        crc2.beginPath();
        crc2.moveTo(_position.x + 37.5, _position.y + 20);
        crc2.lineTo(_position.x + 12.5, _position.y + 37.5);
        crc2.lineTo(_position.x + 15, _position.y + 45);
        crc2.lineTo(_position.x + 25, _position.y + 42);
        if (_clothes === "shirt") {
            crc2.lineTo(_position.x + 22, _position.y + 57);
            crc2.lineTo(_position.x + 53, _position.y + 57);
        }
        else {
            crc2.lineTo(_position.x + 20, _position.y + 87.5);
            crc2.lineTo(_position.x + 55, _position.y + 87.5);
        }
        crc2.lineTo(_position.x + 50, _position.y + 42);
        crc2.lineTo(_position.x + 60, _position.y + 45);
        crc2.lineTo(_position.x + 62.5, _position.y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        if (_clothes === "shirt") {
            // hose
            crc2.beginPath();
            crc2.moveTo(_position.x + 25, _position.y + 57);
            crc2.lineTo(_position.x + 27, _position.y + 87.5);
            crc2.lineTo(_position.x + 35, _position.y + 87.5);
            crc2.lineTo(_position.x + 36, _position.y + 63);
            crc2.lineTo(_position.x + 39, _position.y + 63);
            crc2.lineTo(_position.x + 40, _position.y + 87.5);
            crc2.lineTo(_position.x + 48, _position.y + 87.5);
            crc2.lineTo(_position.x + 50, _position.y + 57);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#343F51";
            crc2.fill();
        }
        // Kopf
        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }
    function drawSwimmer(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x + 37.5, _position.y + 20);
        crc2.lineTo(_position.x + 12.5, _position.y + 37.5);
        crc2.lineTo(_position.x + 15, _position.y + 45);
        crc2.lineTo(_position.x + 25, _position.y + 42);
        crc2.lineTo(_position.x + 25, _position.y + 57);
        crc2.lineTo(_position.x + 50, _position.y + 57);
        crc2.lineTo(_position.x + 50, _position.y + 42);
        crc2.lineTo(_position.x + 60, _position.y + 45);
        crc2.lineTo(_position.x + 62.5, _position.y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 12.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }
    function drawSurfer(_position) {
        //Kopf
        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Körper
        crc2.beginPath();
        crc2.moveTo(_position.x + 37.5, _position.y + 20);
        crc2.lineTo(_position.x + 12.5, _position.y + 37.5);
        crc2.lineTo(_position.x + 15, _position.y + 45);
        crc2.lineTo(_position.x + 25, _position.y + 42);
        crc2.lineTo(_position.x + 25, _position.y + 57);
        crc2.lineTo(_position.x + 50, _position.y + 57);
        crc2.lineTo(_position.x + 50, _position.y + 42);
        crc2.lineTo(_position.x + 60, _position.y + 45);
        crc2.lineTo(_position.x + 62.5, _position.y + 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 12.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 37.5, _position.y + 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Badehose
        crc2.beginPath();
        crc2.moveTo(_position.x + 25, _position.y + 57);
        crc2.lineTo(_position.x + 27, _position.y + 75);
        crc2.lineTo(_position.x + 35, _position.y + 75);
        crc2.lineTo(_position.x + 36, _position.y + 63);
        crc2.lineTo(_position.x + 39, _position.y + 63);
        crc2.lineTo(_position.x + 40, _position.y + 75);
        crc2.lineTo(_position.x + 48, _position.y + 75);
        crc2.lineTo(_position.x + 50, _position.y + 57);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E71837";
        crc2.fill();
        //Bein links
        crc2.beginPath();
        crc2.moveTo(_position.x + 28, _position.y + 75);
        crc2.lineTo(_position.x + 28, _position.y + 90);
        crc2.lineTo(_position.x + 34, _position.y + 90);
        crc2.lineTo(_position.x + 34, _position.y + 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(_position.x + 46.5, _position.y + 75);
        crc2.lineTo(_position.x + 46.5, _position.y + 90);
        crc2.lineTo(_position.x + 40, _position.y + 90);
        crc2.lineTo(_position.x + 40, _position.y + 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        //Füße
        crc2.beginPath();
        crc2.arc(_position.x + 30, _position.y + 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_position.x + 45, _position.y + 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
    }
    //Surfboard
    function drawSurfBoard(_position) {
        crc2.beginPath();
        crc2.ellipse(540, 290, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFF99";
        crc2.fill();
    }
})(L08Strand || (L08Strand = {}));
//# sourceMappingURL=skript.js.map