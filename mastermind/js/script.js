// Menü
const btn = document.getElementById("btnNav")
const nav = document.getElementById("nav")

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});


// Világos mód
const toggle = document.getElementById("toggle")

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('light', e.target.checked);
})

function changeIcon() {
    var iconTheme = document.getElementById('iconChange');
    if (iconTheme.src.match("image/day.svg")) {
        iconTheme.src = "image/night.svg";
    } else {
        iconTheme.src = "image/day.svg";
    }
}

// Játékos választások behívása
const player_choice_color_1 = document.querySelector(".player_choice_color1");
const player_choice_color_2 = document.querySelector(".player_choice_color2");
const player_choice_color_3 = document.querySelector(".player_choice_color3");
const player_choice_color_4 = document.querySelector(".player_choice_color4");
choices = [player_choice_color_1, player_choice_color_2, player_choice_color_3, player_choice_color_4];
let player_choice = [];
const player_color = [];
const answer_1 = document.querySelector(".answer1");
const answer_2 = document.querySelector(".answer2");
const answer_3 = document.querySelector(".answer3");
const answer_4 = document.querySelector(".answer4");
let answer_list = [answer_1, answer_2, answer_3, answer_4];
const text = document.querySelector(".text")
let round_text = 1


// Játékos választásai -> onClick
function pushBlue() {
    const blue = "b";
    const blue_color = "#ABDAFC";
    if (player_choice.length < 4) {
        let i = 0;
        player_choice.push(blue);
        player_color.push(blue_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}

function pushGreen() {
    const green = "g";
    const green_color = "#A7E8BD";
    if (player_choice.length < 4) {
        let i = 0;
        player_choice.push(green);
        player_color.push(green_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}

function pushPurple() {
    const purple = "p";
    const purple_color = "#D4ADCF";
    if (player_choice.length < 4) {
        let i = 0;
        player_choice.push(purple);
        player_color.push(purple_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}

function pushRed() {
    if (player_choice.length < 4) {
        let i = 0;
        const red = "r";
        const red_color = "#F57266";
        player_choice.push(red);
        player_color.push(red_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}

function pushYellow() {
    if (player_choice.length < 4) {
        let i = 0;
        const yellow = "y";
        const yellow_color = "#FFD970";
        player_choice.push(yellow);
        player_color.push(yellow_color);
        while (i < player_choice.length) {
            choices[i].style.background = player_color[i];
            i++;
        }
    }
}


// Játékos választásainak clearelése
function clearChoice() {
    let i = 0
    while (i < 4) {
        choices[i].style.removeProperty("background-color");
        i++;
    }
    player_choice.length = 0;
    player_color.length = 0;
}

// Körök számolása:
function round() {
    round_text++;
    return round_text
}


// Játékos választásainak beküldése
function sendChoice() {
    if (player_choice.length == 4) {

        const emplacement_color1 = document.querySelector(`#line-${round_text} .choice_color1`);
        const emplacement_color2 = document.querySelector(`#line-${round_text} .choice_color2`);
        const emplacement_color3 = document.querySelector(`#line-${round_text} .choice_color3`);
        const emplacement_color4 = document.querySelector(`#line-${round_text} .choice_color4`);
        const emplacement_color = [emplacement_color1, emplacement_color2, emplacement_color3, emplacement_color4]

        color1 = player_color[0];
        color2 = player_color[1];
        color3 = player_color[2];
        color4 = player_color[3];

        emplacement_color1.style.background = color1;
        emplacement_color2.style.background = color2;
        emplacement_color3.style.background = color3;
        emplacement_color4.style.background = color4;

        let i = 0
        while (i < 4) {
            emplacement_color[i].style.border = "solid";
            emplacement_color[i].style.borderColor = "white";
            i++;
        }

        const text_round = document.querySelector(`#text-${round_text}`);

        text_round.style.color = "white"
        text_round.textContent = round_text


        verif(player_choice)
    }
}


// Színek
const couleurs = ['r', 'g', 'b', 'y', 'p'];
const couleursRGB = ['#F57266', '#A7E8BD', '#ABDAFC', '#FFD970', '#D4ADCF']


// Gép választásainak randomizálása
function construireSequenceOrdinateur() {
    const sequence = [];
    const sequenceRGB = [];
    for (let i = 0; i < 4; i++) {
        const position = Math.floor(Math.random() * 5);

        const couleur = couleurs[position];
        const couleurRGB = couleursRGB[position];

        sequence.push(couleur);
        sequenceRGB.push(couleurRGB);
    }

    const a1 = document.getElementById("1");
    const a2 = document.getElementById("2");
    const a3 = document.getElementById("3");
    const a4 = document.getElementById("4");

    a1.style.background = sequenceRGB[0];
    a2.style.background = sequenceRGB[1];
    a3.style.background = sequenceRGB[2];
    a4.style.background = sequenceRGB[3];

    return sequence;
}

let sequenceOrdinateur = construireSequenceOrdinateur();
console.log("Séquence Ordi : " + sequenceOrdinateur);

// Játékos választásainak leelenörzése
function verif(player_choice) {
    let goodColor = 0;
    let badSpot = 0;
    let list_score = [];

    color_good = "#fff";
    color_bad = "#E94435";

    let copyOrdi = sequenceOrdinateur.slice();

    // Helyes választás
    let i = 0;
    while (i < player_choice.length) {
        if (player_choice[i] == copyOrdi[i]) {
            list_score.push(color_good)
            goodColor++;
            copyOrdi.splice(i, 1);
            player_choice.splice(i, 1);
        } else {
            i++;
        }
    }

    // Helytelen választás
    i = 0;
    while (i < player_choice.length) {
        const positionColor = copyOrdi.indexOf(player_choice[i])

        if (positionColor > -1) {
            list_score.push(color_bad)
            badSpot++;
            player_choice.splice(i, 1);
            copyOrdi.splice(positionColor, 1);
        } else {
            i++;
        }
    }

    const answer1 = document.querySelector(`#score-${round_text} .answer1`);
    const answer2 = document.querySelector(`#score-${round_text} .answer2`);
    const answer3 = document.querySelector(`#score-${round_text} .answer3`);
    const answer4 = document.querySelector(`#score-${round_text} .answer4`);

    answer1.style.background = list_score[0];
    answer2.style.background = list_score[1];
    answer3.style.background = list_score[2];
    answer4.style.background = list_score[3];


    clearChoice()
    round()
        // Gyözelem vagy vesztés kiírása
    const text_V_or_L = document.getElementById("VorL");

    if (round_text > 10 && goodColor != 4) {
        console.log("Vesztettél!")
        text_V_or_L.textContent = "Vesztettél!"
        end1.style.display = "flex"
        end3.style.display = "flex"
        end2.style.display = "flex"

    }

    if (goodColor == 4) {
        console.log("Gyöztél!")
        text_V_or_L.textContent = "Gyöztél!"
        end1.style.display = "flex"
        end3.style.display = "flex"
        end2.style.display = "flex"

    }
}

// Játék ujrakezdése (vesztés vagy gyözelem esetén)
const end1 = document.getElementById("endPopupGame")
const end2 = document.getElementById("endPopupChoice")
const end3 = document.getElementById("endPopupSelection")

function restartGame() {
    end1.style.display = "none";
    end3.style.display = "none"
    end2.style.display = "none"
    sequenceOrdinateur = construireSequenceOrdinateur();
    console.log("Nouvelle partie, nouvelle séquence Ordi : " + sequenceOrdinateur);
    clearScore()
    round_text = 1
}

function clearScore() {
    for (let i = 1; i < 11; i++) {

        const answer1 = document.querySelector(`#score-${i} .answer1`);
        const answer2 = document.querySelector(`#score-${i} .answer2`);
        const answer3 = document.querySelector(`#score-${i} .answer3`);
        const answer4 = document.querySelector(`#score-${i} .answer4`);
        const answers = [answer1, answer2, answer3, answer4]

        const emplacement_color1 = document.querySelector(`#line-${i} .choice_color1`);
        const emplacement_color2 = document.querySelector(`#line-${i} .choice_color2`);
        const emplacement_color3 = document.querySelector(`#line-${i} .choice_color3`);
        const emplacement_color4 = document.querySelector(`#line-${i} .choice_color4`);
        const emplacement_color = [emplacement_color1, emplacement_color2, emplacement_color3, emplacement_color4]

        let j = 0
        while (j < 4) {
            answers[j].style.removeProperty("background-color");
            emplacement_color[j].style.removeProperty("background-color");
            emplacement_color[j].style.removeProperty("border");
            j++;
        }
        const txt = document.getElementById(`text-${i}`);
        txt.style.removeProperty("color");
    }

}