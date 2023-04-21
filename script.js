let counter = 0;
let player = 0;
let computer = 0;

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playNumber = 0;
    let computer = computerChoose();
    let result = winner(playNumber, computer); 
    
    counterPointer(result);
    end_game(counter);
    alert(`${result} wins`);
    playerSocreLoad();  
    computerSocreLoad();
});

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playNumber = 1;
    let computer = computerChoose();
    let result = winner(playNumber, computer);  

    counterPointer(result);
    end_game(counter);
    alert(`${result} wins`);
    playerSocreLoad(); 
    computerSocreLoad(); 
});

let scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    let playNumber = 2;
    let computer = computerChoose();
    let result = winner(playNumber, computer);  
    
    counterPointer(result);
    end_game(counter);
    alert(`${result} wins`);
    playerSocreLoad();  
    computerSocreLoad();
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
function playerSocreLoad() {
    let player_score_update = document.querySelector('#player_score_update');
    player_score_update.textContent = player;
}
function computerSocreLoad() {
    let computer_score_update = document.querySelector('#pc_score_update');
    computer_score_update.textContent = computer;
}
function end_game(counter) {
    if (counter == 5) {
        window.open('winner.html');
        alert('Game Over');
        if (player > computer) {
            alert('Player wins');
        }
        else if (player < computer) {
            alert('Computer wins');
        }
        else {
            alert('Draw');
        }
    }
}