const form = document.getElementById('form');
const inputContainer = document.getElementById('name-input');
const log = document.getElementById('log');
const input = document.getElementById('name');


// Player constructor function
function Player (name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
};

// Player prototype function to increase XP and Levels
Player.prototype.gainXp = function (xp) {
    this.points += xp;

    if(this.points >= 10){
        // Divides points by 10 to add right amount of levels
        this.lvl += Math.floor(this.points / 10);
        this.points = this.points % 10;
    } 

    console.log(this.describe());
};

// Console logs the current Name, lvl, and points
Player.prototype.describe = function() {
    console.log(`${this.name} is level ${this.lvl} with ${this.points} experience points`);
};

// Function that calls when name is entered
// Hides name input and button
function startGame(e) {
    e.preventDefault();
    form.style.display = 'none';
    const player1 = new Player(input.value);
    log.textContent = `Name Entered: ${player1.name} Level: ${player1.lvl} XP: ${player1.points}`;

    // Function to create a new form tag
    // Appends input and button to form, which is appeneded to a new div (which is appeneded to #flex-container)
    function makeRoom() {

        const gameSpace = document.createElement('div');
        gameSpace.classList.add('new-div');
    
        const gameForm = document.createElement('form');
    
        const gameInput = document.createElement('input');
        gameInput.setAttribute('type', 'text');
        gameInput.classList.add('new-input');
    
        const xpBtn = document.createElement('button');
        xpBtn.textContent = 'Add XP';
        xpBtn.classList.add('new-button');
    
        gameForm.appendChild(gameInput);
        gameForm.appendChild(xpBtn);
        gameSpace.appendChild(gameForm);
        inputContainer.appendChild(gameSpace);
    
        // Event Listener for xpBtn
        // Converts input field from string to int and calls Player.gainXp()
        xpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const enteredValue = gameInput.value;
            const numericValue = parseInt(enteredValue);

            player1.gainXp(numericValue);
            log.textContent = `Name Entered: ${player1.name} Level: ${player1.lvl} XP: ${player1.points}`;
            gameInput.value = '';
        });
    }

    makeRoom();
}


form.addEventListener('submit', startGame);




