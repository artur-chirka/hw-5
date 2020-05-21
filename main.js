//Task 2:
// DNA_strand ("ATTGC") # return "TAACG"
// DNA_strand ("GTAT") # return "CATA"

// function DNA_strand(dna) {
//     let letters = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
//     let arr = [];
//     for (let i = 0; i < dna.length; i++) {
//         arr[i] = letters[dna[i]];
//     }

//     return arr.join('');
// }




// Task 3: Светофор
let i = -1;

function trafficLight() {
    i++;
    let arr = ['red', 'orange', 'green'],
        round = document.querySelectorAll('.lamp');
    if (round[i - 1]) round[i - 1].style.backgroundColor = '';
    if (i == arr.length) i = 0;
    round[i].style.backgroundColor = arr[i];
}
