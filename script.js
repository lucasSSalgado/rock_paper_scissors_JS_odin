function computer_play() {
    let ramd = Math.floor(Math.random() * 3);
    return ramd;
}

function get_players_option() {
    let option = 15;

    do {
        option = parseInt(prompt("choose your option: rock (0), paper (1) or scissor (2)"));
    } while (option != 0 && option != 1 && option != 2);

    return option;
}

function print_winner() {
    let computer = computer_play();
    console.log(`Computer choose ${computer}!`, computer);
    let user = get_players_option();
    console.log(`User choose ${user}!`, user);

    if (computer == user)
    {
        console.log('Tie!');
    }
    else if ((user == 0 && computer == 2) || (user == 1 && computer == 0) || (user == 2 && computer == 1))
    {
        console.log('User win!');
    }
    else
    {
        console.log('Computer win!');
    }
}

print_winner();