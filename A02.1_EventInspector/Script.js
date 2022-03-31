"use strict";
var EventInspector;
(function (EventInspector) {
    //Install load listener on window
    window.addEventListener("load", hndLoad);
    //hndLoad implementieren 
    function hndLoad(_event) {
        //install mouse move listener on document
        document.addEventListener("mousemove", setInfoBox);
        //install click listeners on document, body and all divs
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        //install keyup listeners on document, body and all divs
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    //setInfoBox implementieren
    function setInfoBox(_event) {
        let x = _event.showX + 10;
        let y = _event.showY + 10;
        let target = _event.target;
        let span = document.getElementById("span1");
        //display mouse position and event's traget in span-element
        span.innerHTML = "position x:" + x + "" + "position y" + y + "" + "target" + target;
        //set style attributes top and left of span to mouseposition + offset
        span.style.top = (y) + "px";
        span.style.left = (x) + "px";
    }
    //logInfo implementieren
    function logInfo(_event) {
        //log event's type, target, currentTarget and the whole event objekt to console
        console.log("Event:", _event);
        console.log("Target:", _event.target);
        console.log("Type:", _event.type);
        console.log("Current Target:", _event.currentTarget);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Script.js.map