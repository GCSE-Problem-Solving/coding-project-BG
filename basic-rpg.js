/*function checkSupported() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
    } else {
        alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
    }
}*/

function help() {
    alert("help! I am trapped in the alert box. use the buttons to help me escape. Be quick, we only have 30 seconds from when you take the pill.");
}
help();
function closeWindow() {
    window.close()
}

let numOfPills = 0;

function newPill() {
    document.getElementById("help").style.color = "#FF0000";
    numOfPills ++;

    if (numOfPills === 1) {
        alert("those pills are tasty. more!");
        numOfPills ++;

        if (numOfPills === 2) {
            alert("yum");
            numOfPills++;

            if (numOfPills === 3) {
                alert("YUM");
                numOfPills ++;
                document.getElementById("redPill").style.color = "#FF0000";

                if (numOfPills === 4) {
                    alert("are you annoyed yet?");
                    numOfPills ++;

                    if (numOfPills === 5) {
                        alert("THE POWER!!! EVEN MORE!!!");
                        document.body.style.background= "#FF0000";
                        numOfPills ++;

                        if (numOfPills === 6) {
                            alert("I think I can make a new button... no idea what it does...");
                            //document.getElementById("snake").innerHTML = "<button id='sum' onclick='summonSnake()'>Click to summon the snake</button>";
                            document.getElementById("help").style.color = "#FFFFFF";
                            document.getElementById("snake").innerHTML="<button id='sum' onclick='summonSnake()'>Click to summon the Snake</button>'"
                        }
                    }
                }
            }
        }
    }
}

function summonSnake() {
    alert("OH NO BEN HAS FILLED ALL THE HOMEWORK CRITERIA DO NOT CLICK THAT... you clicked it didn't you. not all games end happily... its been a short ride but this is the end. The snake will crush us in seconds... unless you buy the bonus pack from the developer for the cheap cost of $199.99");
    document.getElementById('sum').parentNode.removeChild(document.getElementById('sum'));
    document.getElementById("snake").innerHTML="<img alt='a snek boi' src='aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2OS83NzQvb3JpZ2luYWwvY29icmEtc25ha2UtMTQwODI5LmpwZw==.webp'>";
    setTimeout( function () {document.getElementById("help").innerHTML="<h1>IM BEING CRUSHED</h1>"},100);
    setTimeout( function () {alert("arrragaghiu")},1000);
    while (numOfPills === 6) {
        console.log("[secret knowledge] pills taken... game ending shortly")
}}