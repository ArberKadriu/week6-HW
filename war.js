class Player {
	constructor(name, hand){
		this.name = name;
		this.hand = hand;
		this.points = 0;
	}
}

class Card {
		constructor(cardName, suit, value){
			this.cardName = cardName;
			this.suit = suit;
			this.value = value;
		}
			// Function to print out the selected card to the console
		printCard(){
			console.log(`${this.suit} ${this.value}`);
		}
}

class Deck {
	constructor(){		// The Deck class will hold 1 array populated by the createDeck && shuffleDeck function 
		this.cards = [];
	}
	createDeck(){
		let cardName = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
		let suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

		// We use a nested for loop to iterate through the suits and  card name in order to create new Card with the value associated by the i 

		for( let i = 0; i < cardName.length; i++){
			for(let j = 0; j < suit.length; j++){
				this.cards.push(new Card(cardName[i], suit[j], i)); 
			}
		}
	}
		//Now we take the created deck and "shuffle" it by re-arranging random indexes within the array

		shuffleDeck(){
			for( let i = this.cards.length - 1; i > 0; i--){
				const random = Math.floor(Math.random() * i);
				const tempArr = this.cards[i];
				this.cards[i] = this.cards[random];
				this.cards[random] = tempArr;
			}
		}
}

// The main game logic, it does not follow the offical rules of the game when it comes to ties or puting the cards won back into the deck. 
// For simplicity the game will run only 26 rounds ( the amount of the cards on each players hand)

class War { 
	constructor(){
		this.players = [];
	}

	startGame(player0, player1){
		this.players.push(new Player(player0, gameDeck.cards.slice(0, 26)));
		this.players.push(new Player(player1, gameDeck.cards.slice(26)));

		for (let i = 1; i <= 26; i++){
			console.log(`****** Round ${i} *******`);
			const player1Card = this.players[0].hand.pop();
			const player2Card = this.players[1].hand.pop();
			console.log(`${this.players[0].name}'s card: ${player1Card.cardName} of ${player1Card.suit}`)
			console.log(`${this.players[1].name}'s card: ${player2Card.cardName} of ${player2Card.suit}`)
			
			if (player1Card.value > player2Card.value){
				this.players[0].points++;
				console.log(`${this.players[0].name} scores 1 point`)
			}
			else if (player1Card.value < player2Card.value){
				this.players[1].points++;
				console.log(`${this.players[1].name} scores 1 point`)	
			}
			else if(player1Card.value === player2Card.value){
				console.log('This round is a tie')
			}
				console.log(`${this.players[0].name} - ${this.players[0].points}`)
				console.log(`${this.players[1].name} - ${this.players[1].points}`)
		}
		
			if (this.players[0].points > this.players[1].points){
				console.log(`${this.players[0].name} wins the game!`);
                alert(`${this.players[0].name} wins the game!`);
			}
			
			else if (this.players[0].points < this.players[1].points){
				console.log(`${this.players[1].name} wins the game`);
                alert(`${this.players[1].name} wins the game!`)
			}
			
			else {
				console.log('It\'s a tie')
                alert("This game is a tie :) ");
			}
	}
}

let gameDeck = new Deck();
gameDeck.createDeck();

gameDeck.shuffleDeck();  
let war = new War();
let user1 = prompt("Enter the name of the first player: ");
let user2 = prompt("Enter the name of the second player: ");
war.startGame(user1, user2);