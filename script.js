let counter = 0;
let player = 0;
let computer = 0;

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playNumber = 0;
    let computer = computerChoose();
    let result = winner(playNumber, computer);  
    alert(`${result} wins`);  
    counterPointer(result);
});

function computerChoose() {
    return Math.floor(Math.random() * 3);
}
function winner(player, computer) {
    if (player === computer) {
        return 'tie';
    }

    else if ((player == 0 && computer == 1) || 
             (player == 1 && computer == 2) || 
             (player == 2 && computer == 0)) {
        return 'player';
    }

    else {
        return 'computer';
    }
}
function counterPointer(result) {
    counter++;
    if (result === 'tie') {
        return;
    }
    else if (result === 'player') {
        player++;
    }
    else if (result === 'computer') {
        computer++;
    } 
}
