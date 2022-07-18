"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        firstGrowthPhaseSalad({ x: 50, y: 50 });
        firstGrowthPhaseCarrot({ x: 50, y: 75 });
        firstGrowthPhaseRadish({ x: 50, y: 100 });
        firstGrowthPhaseCorn({ x: 50, y: 125 });
        firstGrowthPhasePumpkin({ x: 50, y: 150 });
        secondGrowthPhaseSalad({ x: 200, y: 50 });
        secondGrowthPhaseCarrot({ x: 200, y: 100 });
        secondGrowthPhaseRadish({ x: 200, y: 150 });
        secondGrowthPhaseCorn({ x: 200, y: 200 });
        secondGrowthPhasePumpkin({ x: 200, y: 250 });
        CornFinished({ x: 300, y: 220 });
        CarrotFinished({ x: 290, y: 100 });
        RadishFinished({ x: 290, y: 150 });
        PumpkinFinished({ x: 290, y: 270 });
        Parasite({ x: 300, y: 50 });
        //SaladFinished ({x: 400, y: 50});
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgray");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Erste Wachstumsphase
    function firstGrowthPhaseSalad(_position) {
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#7ec363";
        crc2.fill();
    }
    function firstGrowthPhasePumpkin(_position) {
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ff7518";
        crc2.fill();
    }
    function firstGrowthPhaseCarrot(_position) {
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ed9121";
        crc2.fill();
    }
    function firstGrowthPhaseRadish(_position) {
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#A74FB0";
        crc2.fill();
    }
    function firstGrowthPhaseCorn(_position) {
        crc2.beginPath();
        crc2.arc(_position.x + 62.5, _position.y + 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFC3A";
        crc2.fill();
    }
    //Zweite Wachstumsphase
    function secondGrowthPhaseSalad(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#7ec363";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + -20, _position.y - 10 + 20, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#7ec363";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 5);
        crc2.lineTo(_position.x - 10, _position.y + 20);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x - 9, _position.y + 18);
        crc2.lineTo(_position.x - 23, _position.y + 7.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y - 2);
        crc2.lineTo(_position.x - 8, _position.y + 5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
    }
    function secondGrowthPhasePumpkin(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ff7518";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + -20, _position.y - 10 + 20, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ff7518";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 5);
        crc2.lineTo(_position.x - 10, _position.y + 20);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x - 9, _position.y + 18);
        crc2.lineTo(_position.x - 23, _position.y + 7.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y - 2);
        crc2.lineTo(_position.x - 8, _position.y + 5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
    }
    function secondGrowthPhaseCarrot(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ed9121";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + -20, _position.y - 10 + 20, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ed9121";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 5);
        crc2.lineTo(_position.x - 10, _position.y + 20);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x - 9, _position.y + 18);
        crc2.lineTo(_position.x - 23, _position.y + 7.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y - 2);
        crc2.lineTo(_position.x - 8, _position.y + 5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
    }
    function secondGrowthPhaseRadish(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#A74FB0";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + -20, _position.y - 10 + 20, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#A74FB0";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 5);
        crc2.lineTo(_position.x - 10, _position.y + 20);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x - 9, _position.y + 18);
        crc2.lineTo(_position.x - 23, _position.y + 7.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y - 2);
        crc2.lineTo(_position.x - 8, _position.y + 5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
    }
    function secondGrowthPhaseCorn(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x, _position.y, 5, 10, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFC3A";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + -20, _position.y - 10 + 20, 5, 10, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFC3A";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 5);
        crc2.lineTo(_position.x - 10, _position.y + 20);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x - 9, _position.y + 18);
        crc2.lineTo(_position.x - 23, _position.y + 7.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y - 2);
        crc2.lineTo(_position.x - 8, _position.y + 5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
    }
    //Fertiges Gemüse
    function CornFinished(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x - 2, _position.y, 5, 8, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#cbff7c";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + -18, _position.y - 10 + 20, 5, 8, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#cbff7c";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 12);
        crc2.lineTo(_position.x - 10, _position.y + 20);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y + 16);
        crc2.lineTo(_position.x - 23, _position.y + 7.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y - 2);
        crc2.lineTo(_position.x - 8, _position.y + 5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(_position.x - 10, _position.y - 22, 5, 10, Math.PI / 1, 2, 3 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFC3A";
        crc2.fill();
    }
    function CarrotFinished(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x - 10, _position.y + 1);
        crc2.lineTo(_position.x - 4, _position.y + 20);
        crc2.lineTo(_position.x + 8, _position.y + 20);
        crc2.lineTo(_position.x + 15, _position.y);
        crc2.stroke();
        crc2.fillStyle = "#ed9121";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 6, _position.y - 4);
        crc2.lineTo(_position.x + 2, _position.y + 2);
        crc2.lineTo(_position.x - 3, _position.y - 10);
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 10, _position.y - 4);
        crc2.lineTo(_position.x + 2, _position.y - 20);
        crc2.lineTo(_position.x + 3, _position.y + 5);
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.fill();
    }
    function RadishFinished(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x + 2, _position.y + 12, 12, 12, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#A74FB0";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 6, _position.y - 4);
        crc2.lineTo(_position.x + 2, _position.y + 2);
        crc2.lineTo(_position.x - 3, _position.y - 10);
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x + 10, _position.y - 4);
        crc2.lineTo(_position.x + 2, _position.y - 20);
        crc2.lineTo(_position.x + 3, _position.y + 5);
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.fill();
    }
    function PumpkinFinished(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x - 2, _position.y + 2 + 12, 20, 15, Math.PI / 16, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#ff7518";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_position.x - 6, _position.y - 4);
        crc2.lineTo(_position.x + 2, _position.y + 2);
        crc2.lineTo(_position.x - 3, _position.y - 10);
        crc2.stroke();
        crc2.fillStyle = "#008000";
        crc2.fill();
    }
    function Parasite(_position) {
        crc2.beginPath();
        crc2.ellipse(_position.x - 2, _position.y + 2 + 10, 4, 8, Math.PI / 16, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#111";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x + 8, _position.y - 1 + 10, 3, 7, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(_position.x - 12, _position.y - 2 + 10, 3, 7, Math.PI / -3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#fff";
        crc2.fill();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=skript.js.map