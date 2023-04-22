let counter = 0;
let player = 0;
let computer = 0;

const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissor = document.querySelector('#scissor');

paper.addEventListener('click', () => {
    let playNumber = 0;
    let computer = computerChoose();
    let result = winner(playNumber, computer); 
    
    print_winner(result)
    counterPointer(result);
    playerSocreLoad();  
    computerSocreLoad();    
    let boolean = end_game();
    console.log(boolean)
    playAgain(boolean)
    
});

rock.addEventListener('click', () => {
    let playNumber = 1;
    let computer = computerChoose();
    let result = winner(playNumber, computer);  

    counterPointer(result);
    print_winner(result)
    playerSocreLoad();  
    computerSocreLoad();
    end_game()
    
});

scissor.addEventListener('click', () => {
    let playNumber = 2;
    let computer = computerChoose();
    let result = winner(playNumber, computer);  
    
    counterPointer(result);
    print_winner(result)
    playerSocreLoad();  
    computerSocreLoad();

    end_game();
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
function end_game() {
    let h2Final = document.querySelector('#finalText');
    if (player == 3 || computer == 3) {
        if (player > computer) {
            h2Final.textContent = 'Game Over, player wins';
        }
        else if (player < computer) {
            h2Final.textContent = 'Game Over, computer wins';
        }
        else {
            h2Final.textContent = 'Game Over, tie';
        }
        
        return true;
    }  
    else { return false; }  
}
function print_winner(result) {
    let finalDiv = document.querySelector('#final');
    let h2Final = document.querySelector('#finalText');

    finalDiv.classList.add('imagem');
    finalDiv.appendChild(h2Final);
    if (result == 'tie') {
        h2Final.textContent = 'Tie!!!'
    }
    else if (result == 'player') {
        h2Final.textContent = 'Player Wins!!!'
    }
    else if (result == 'computer') {
        h2Final.textContent = 'Computer Wins!!!'
    }
}
function playAgain(boolean){
    if (boolean == false) {
        return         
    }

    else { 
        const div = document.getElementById('#playagain-desactive');  
        const button = document.querySelector('#button');
    
        div.id = 'playagain-active';
        button.id = 'visible';
        button.textContent = 'Play Again';

        paper.classList.add('disable')
        rock.classList.add('disable')
        scissor.classList.add('disable')

        button.addEventListener('click', () => {
            counter = 0;
            player = 0;
            computer = 0
            window.location.reload();
            div.id = 'playagain-desactive';
            button.id = 'button';   
            paper.classList.add('able') 
            rock.classList.add('able') 
            scissor.classList.add('able')     
    }) }
}