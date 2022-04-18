"use strict";
var Memory;
(function (Memory) {
    let noCards;
    let interval;
    let time = 0;
    let clickedCards = [];
    let nonVisibleCards = [];
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let startButton = document.querySelector("#start");
        startButton.addEventListener("click", gameStart);
    }
    function gameStart(_event) {
        let menuBox = document.querySelector("#menuBox");
        menuBox.classList.add("hidden");
        let gameBox = document.querySelector("#gameBox");
        gameBox.classList.remove("hidden");
        let formData = new FormData(document.forms[0]);
        let numberOfPairs = parseInt(formData.get("numberOfPairs").toString());
        let cardsSize = parseInt(formData.get("cardsSize").toString());
        let backgroundColor = formData.get("backgroundColor").toString();
        let fontColor = formData.get("fontColor").toString();
        let cardsColor = formData.get("cardsColor").toString();
        let fontFamily = formData.get("fontFamily").toString();
        document.body.style.backgroundColor = backgroundColor;
        let cardValues = [];
        for (let i = 1; i <= numberOfPairs; i++) {
            cardValues.push(i);
            cardValues.push(i);
        }
        cardValues = shuffle(cardValues);
        noCards = cardValues.length;
        let cardBox = document.querySelector("#cardBox");
        for (let i = 0; i < cardValues.length; i++) {
            let card = document.createElement("span");
            card.classList.add("hidden");
            card.style.height = cardsSize + "px";
            card.style.width = cardsSize + "px";
            card.style.color = fontColor;
            card.style.backgroundColor = cardsColor;
            card.style.fontFamily = fontFamily;
            card.innerHTML = cardValues[i].toString();
            card.addEventListener("click", clickCards);
            cardBox.appendChild(card);
        }
        interval = setInterval(function () {
            time++;
            let timer = document.querySelector("#timer");
            timer.innerHTML = Math.floor(time / 60) + "min " + (time % 60) + "s";
        }, 1000);
    }
    function clickCards(_event) {
        let target = _event.target;
        if (clickedCards.length < 2 && target !== clickedCards[0]) {
            clickedCards.push(target);
            target.classList.remove("hidden");
            target.classList.add("visible");
            if (clickedCards.length === 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    function compareCards() {
        if (clickedCards[0].innerHTML === clickedCards[1].innerHTML) {
            clickedCards[0].classList.add("nonVisibleCards");
            clickedCards[1].classList.add("nonVisibleCards");
            nonVisibleCards.push(clickCards[0]);
            nonVisibleCards.push(clickCards[1]);
        }
        else {
            clickedCards[0].classList.remove("visible");
            clickedCards[0].classList.add("hidden");
            clickedCards[1].classList.remove("visible");
            clickedCards[1].classList.add("hidden");
        }
        clickedCards = [];
        if (noCards === nonVisibleCards.length) {
            gameEnd();
        }
    }
    function gameEnd() {
        clearInterval(interval);
        let gameBox = document.querySelector("#gameBox");
        gameBox.classList.add("hidden");
        let endBox = document.querySelector("#endBox");
        endBox.classList.remove("hidden");
        endBox.innerHTML =
            "<h2>Congrats!</h2>" +
                "You needed " +
                Math.floor(time / 60) +
                "min " +
                (time % 60) +
                "s";
    }
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
        let currentIndex = array.length;
        let randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=script.js.map