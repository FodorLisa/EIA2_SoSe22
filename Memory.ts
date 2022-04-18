namespace MemorySetting {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let start: HTMLElement = <HTMLElement>document.querySelectorAll("#start");
        start.addEventListener("click", gameStart);
    }

    //Arrays
    let cards: string [] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"
    , "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    let Cards : HTMLElement [] = [];
    let clickedCards : HTMLElement [] = [];
}