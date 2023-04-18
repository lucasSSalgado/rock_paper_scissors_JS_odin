function computerSelection()  {
    let ramd = Math.floor(Math.random() * 3);
    return ramd;
}

function playerSelection() {
    let option = 15;

    do {
        option = parseInt(prompt("choose your option: rock (0), paper (1) or scissor (2)"));
    } while (option != 0 && option != 1 && option != 2);

    return option;
}

function print_winner() {    
    let user = playerSelection();
    console.log(`User choose ${user}!`);
    let computer = computerSelection();
    console.log(`Computer choose ${computer}!`);

    if (computer == user)
    {
        console.log('Tie!');
        return 10;
    }
    else if ((user == 0 && computer == 2) || (user == 1 && computer == 0) || (user == 2 && computer == 1))
    {
        console.log('User win!');
        return 1;
    }
    else
    {
        console.log('Computer win!');
        return 0;
    }
}

function game() {
    let counter = 0;
    let players_points = 0;
    let computers_points = 0;

    while (counter < 5) 
    {
        let int = print_winner();
        if (int == 1)
        {
            players_points++;
        }
        else if (int == 0)
        {
            computers_points++;
        }

        counter++;
    }

    if (players_points > computers_points)
    {
        console.log(`Players Wins!! playes: ${players_points}; computer ${computers_points}`);
    }
    else if (players_points < computers_points)
    {
        console.log(`Computer Wins!! playes: ${computers_points}; computer ${players_points}`);
    }
    else 
    {
        console.log(`Tie! Each playes do ${computers_points} points`);
    }    
}

game();
