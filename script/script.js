const game = document.getElementById("game");
const hamburgerButton = document.querySelectorAll(".hamburgerbutton");
const closeButton = document.querySelectorAll(".closebutton");
const resetButton = document.querySelectorAll(".resetbutton");
const backButtonThemePage = document.getElementById("backbuttonthemepage");
const buttonContainer = document.querySelectorAll(".reset-play-button-container");
const backButtons = document.querySelectorAll(".backbutton");
const playAgain = document.getElementById("playAgain");
// button to choose the number of players
const pickPlayerNumber = document.getElementById("pickPlayerNumber");
const pickPlayerButtons = document.querySelectorAll(".btn-pickplayers");
// name inputs
const playerNames = document.getElementById("playerNames");
const nameInputs = document.querySelectorAll(".name-input");
const playButton = document.getElementById("playbutton");
// buttons to pick the amount
const pickAmount = document.getElementById("pickamount");
const amountButtons = document.querySelectorAll(".btn-pickamount");
// buttons to pick the cards
const pickCategoryButtons = document.querySelectorAll(".btn-pickcards")
const pickButtons = document.getElementById("pickbuttons");
// rainbow category and buttons to pick the 3 rainbow categories
const rainbowCategories = document.getElementById("rainbowcategories");
// Player scores
const playerScores = document.getElementById("playerscores");
const playerScoreCards = document.querySelectorAll(".playerscorecard");
const playerOnePoints = document.getElementById("player-1-points");
const playerTwoPoints = document.getElementById("player-2-points");
const playerThreePoints = document.getElementById("player-3-points");
const playerFourPoints = document.getElementById("player-4-points");
// Memory cards
const movesLine = document.getElementById("moves-line");
const moveNumber = document.getElementById("moves");
const memoryGrid = document.getElementById("memory-grid");
const cards = document.querySelectorAll(".card");
var flipped = document.querySelectorAll(".is-flipped");
const cardPictures = document.querySelectorAll(".card-picture");
// Cards grid
const cardsGrid = document.getElementById("cards-grid");
const allCardContainers = document.querySelectorAll(".card-container");
// Card images
const cardsKawaiiEyes = ["img/hammy-kawaii/eyes/01.png", "img/hammy-kawaii/eyes/02.png", "img/hammy-kawaii/eyes/03.png", "img/hammy-kawaii/eyes/04.png", "img/hammy-kawaii/eyes/05.png", "img/hammy-kawaii/eyes/06.png", "img/hammy-kawaii/eyes/07.png", "img/hammy-kawaii/eyes/08.png"]
const cardsPigs = ["img/pigs/pig01.png", "img/pigs/pig02.png", "img/pigs/pig03.png", "img/pigs/pig04.png", "img/pigs/pig05.png", "img/pigs/pig06.png", "img/pigs/pig07.png", "img/pigs/pig08.png"];
const cardsPandas = ["img/pandas/01.png", "img/pandas/02.png", "img/pandas/03.png", "img/pandas/04.png", "img/pandas/05.png", "img/pandas/06.png", "img/pandas/07.png", "img/pandas/08.png"];
const cardsSnails = ["img/snails/01.png", "img/snails/02.png", "img/snails/03.png", "img/snails/04.png", "img/snails/05.png", "img/snails/06.png", "img/snails/07.png", "img/snails/08.png"];
const cardsFrogs = ["img/frogs/01.png", "img/frogs/02.png", "img/frogs/03.png", "img/frogs/04.png", "img/frogs/05.png", "img/frogs/06.png", "img/frogs/07.png", "img/frogs/08.png", "img/frogs/09.png", "img/frogs/10.png"];
const cardsNature = ["img/nature/01.png", "img/nature/02.png", "img/nature/03.png", "img/nature/04.png", "img/nature/05.png", "img/nature/06.png", "img/nature/07.png", "img/nature/08.png", "img/nature/09.png", "img/nature/10.png", "img/nature/11.png", "img/nature/12.png"];
const cardsSittingFrogs = ["img/sitting-frogs/01.png", "img/sitting-frogs/02.png", "img/sitting-frogs/03.png", "img/sitting-frogs/04.png", "img/sitting-frogs/05.png", "img/sitting-frogs/06.png", "img/sitting-frogs/07.png", "img/sitting-frogs/08.png", "img/sitting-frogs/09.png", "img/sitting-frogs/10.png", "img/sitting-frogs/11.png", "img/sitting-frogs/12.png"]
const cardsBirdsBees = ["img/birds-bees/01.png", "img/birds-bees/02.png", "img/birds-bees/03.png", "img/birds-bees/04.png", "img/birds-bees/05.png", "img/birds-bees/06.png", "img/birds-bees/07.png", "img/birds-bees/08.png", "img/birds-bees/09.png", "img/birds-bees/10.png", "img/birds-bees/11.png", "img/birds-bees/12.png", "img/birds-bees/13.png", "img/birds-bees/14.png", "img/birds-bees/15.png"];
const cardsBubbleAnimals = ["img/round-animals/01.png", "img/round-animals/02.png", "img/round-animals/03.png", "img/round-animals/04.png", "img/round-animals/05.png", "img/round-animals/06.png", "img/round-animals/07.png", "img/round-animals/08.png", "img/round-animals/09.png", "img/round-animals/10.png", "img/round-animals/11.png", "img/round-animals/12.png", "img/round-animals/13.png", "img/round-animals/14.png", "img/round-animals/15.png", "img/round-animals/16.png", "img/round-animals/17.png", "img/round-animals/18.png"];
const cardsPatchworkAnimals = ["img/patchwork-animals/01.png", "img/patchwork-animals/02.png", "img/patchwork-animals/03.png", "img/patchwork-animals/04.png", "img/patchwork-animals/05.png", "img/patchwork-animals/06.png", "img/patchwork-animals/07.png", "img/patchwork-animals/08.png", "img/patchwork-animals/09.png", "img/patchwork-animals/10.png", "img/patchwork-animals/11.png", "img/patchwork-animals/12.png", "img/patchwork-animals/03.png", "img/patchwork-animals/14.png", "img/patchwork-animals/15.png", "img/patchwork-animals/16.png", "img/patchwork-animals/17.png", "img/patchwork-animals/18.png"];
const cardsAnimals = ["img/animals/01.png", "img/animals/02.png", "img/animals/03.png", "img/animals/04.png", "img/animals/05.png", "img/animals/06.png", "img/animals/07.png", "img/animals/08.png", "img/animals/09.png", "img/animals/10.png", "img/animals/11.png", "img/animals/12.png", "img/animals/13.png", "img/animals/14.png", "img/animals/15.png", "img/animals/16.png", "img/animals/17.png", "img/animals/18.png", "img/animals/19.png", "img/animals/20.png", "img/animals/21.png", "img/animals/22.png"];
const cardsOcean = ["img/sea/01.png", "img/sea/02.png", "img/sea/03.png", "img/sea/04.png", "img/sea/05.png", "img/sea/06.png", "img/sea/07.png", "img/sea/08.png", "img/sea/09.png", "img/sea/10.png", "img/sea/11.png", "img/sea/12.png", "img/sea/13.png", "img/sea/14.png", "img/sea/15.png", "img/sea/16.png", "img/sea/17.png", "img/sea/18.png", "img/sea/19.png", "img/sea/20.png", "img/sea/21.png", "img/sea/22.png", "img/sea/23.png", "img/sea/24.png"];
const cardsNumbers = ["img/numbers/01.png", "img/numbers/02.png", "img/numbers/03.png", "img/numbers/04.png", "img/numbers/05.png", "img/numbers/06.png", "img/numbers/07.png", "img/numbers/08.png", "img/numbers/09.png", "img/numbers/10.png", "img/numbers/11.png", "img/numbers/14.png", "img/numbers/15.png", "img/numbers/16.png", "img/numbers/17.png", "img/numbers/18.png", "img/numbers/17.png", "img/numbers/18.png", "img/numbers/19.png", "img/numbers/20.png", "img/numbers/21.png", "img/numbers/22.png", "img/numbers/23.png", "img/numbers/24.png", "img/numbers/25.png", "img/numbers/26.png", "img/numbers/27.png", "img/numbers/28.png", "img/numbers/29.png", "img/numbers/30.png", "img/numbers/31.png", "img/numbers/32.png", "img/numbers/33.png"];
const cardsHelloKitty = ["img/hello-kitty/01.png", "img/hello-kitty/02.png", "img/hello-kitty/03.png", "img/hello-kitty/04.png", "img/hello-kitty/05.png", "img/hello-kitty/06.png", "img/hello-kitty/07.png", "img/hello-kitty/08.png", "img/hello-kitty/09.png", "img/hello-kitty/10.png", "img/hello-kitty/11.png", "img/hello-kitty/12.png", "img/hello-kitty/13.png", "img/hello-kitty/14.png", "img/hello-kitty/15.png", "img/hello-kitty/16.png", "img/hello-kitty/17.png", "img/hello-kitty/18.png", "img/hello-kitty/19.png", "img/hello-kitty/20.png", "img/hello-kitty/21.png", "img/hello-kitty/22.png", "img/hello-kitty/23.png", "img/hello-kitty/24.png"];
const cardsVintage = ["img/vintage/01.png", "img/vintage/02.png", "img/vintage/03.png", "img/vintage/04.png", "img/vintage/05.png", "img/vintage/06.png", "img/vintage/07.png", "img/vintage/08.png", "img/vintage/09.png", "img/vintage/10.png", "img/vintage/11.png", "img/vintage/12.png", "img/vintage/13.png", "img/vintage/14.png", "img/vintage/15.png", "img/vintage/16.png", "img/vintage/17.png", "img/vintage/18.png", "img/vintage/19.png", "img/vintage/20.png", "img/vintage/21.png", "img/vintage/22.png", "img/vintage/23.png", "img/vintage/24.png", "img/vintage/25.png", "img/vintage/26.png", "img/vintage/27.png", "img/vintage/28.png", "img/vintage/29.png", "img/vintage/30.png", "img/vintage/31.png", "img/vintage/32.png", "img/vintage/33.png"];
const cardsKawaii = ["img/hammy-kawaii/kawaii/01.png", "img/hammy-kawaii/kawaii/02.png", "img/hammy-kawaii/kawaii/03.png", "img/hammy-kawaii/kawaii/04.png", "img/hammy-kawaii/kawaii/05.png", "img/hammy-kawaii/kawaii/06.png", "img/hammy-kawaii/kawaii/07.png", "img/hammy-kawaii/kawaii/08.png", "img/hammy-kawaii/kawaii/09.png", "img/hammy-kawaii/kawaii/10.png", "img/hammy-kawaii/kawaii/11.png", "img/hammy-kawaii/kawaii/12.png", "img/hammy-kawaii/kawaii/13.png", "img/hammy-kawaii/kawaii/14.png", "img/hammy-kawaii/kawaii/15.png", "img/hammy-kawaii/kawaii/16.png", "img/hammy-kawaii/kawaii/17.png", "img/hammy-kawaii/kawaii/18.png", "img/hammy-kawaii/kawaii/19.png", "img/hammy-kawaii/kawaii/20.png", "img/hammy-kawaii/kawaii/21.png", "img/hammy-kawaii/kawaii/22.png", "img/hammy-kawaii/kawaii/23.png", "img/hammy-kawaii/kawaii/24.png", "img/hammy-kawaii/kawaii/25.png", "img/hammy-kawaii/kawaii/26.png", "img/hammy-kawaii/kawaii/27.png", "img/hammy-kawaii/kawaii/28.png", "img/hammy-kawaii/kawaii/29.png", "img/hammy-kawaii/kawaii/30.png", "img/hammy-kawaii/kawaii/31.png", "img/hammy-kawaii/kawaii/32.png", "img/hammy-kawaii/kawaii/33.png"]
const cardsRainbowFrogs = ["img/rainbow/frogs/01.png", "img/rainbow/frogs/02.png", "img/rainbow/frogs/03.png", "img/rainbow/frogs/04.png", "img/rainbow/frogs/05.png", "img/rainbow/frogs/06.png", "img/rainbow/frogs/07.png", "img/rainbow/frogs/08.png"];
const cardsRainbowSnails = ["img/rainbow/snails/01.png", "img/rainbow/snails/02.png", "img/rainbow/snails/03.png", "img/rainbow/snails/04.png", "img/rainbow/snails/05.png", "img/rainbow/snails/06.png", "img/rainbow/snails/07.png", "img/rainbow/snails/08.png"];
const cardsRainbowUmbrellas = ["img/rainbow/umbrellas/01.png", "img/rainbow/umbrellas/02.png", "img/rainbow/umbrellas/03.png", "img/rainbow/umbrellas/04.png", "img/rainbow/umbrellas/05.png", "img/rainbow/umbrellas/06.png", "img/rainbow/umbrellas/07.png", "img/rainbow/umbrellas/08.png"];
const cardsRainbow = cardsRainbowFrogs.concat(cardsRainbowSnails, cardsRainbowUmbrellas);
const cardsRandom = cardsAnimals.concat(cardsBirdsBees, cardsBubbleAnimals, cardsFrogs, cardsNature, cardsOcean, cardsPandas, cardsPigs, cardsPatchworkAnimals, cardsRainbow, cardsSittingFrogs, cardsSnails, cardsVintage, cardsHelloKitty, cardsKawaii, cardsKawaiiEyes);
// Game is finished
const finishedMoves = document.getElementById("finishedmoves");
const gameFinished = document.getElementById("gamefinished");
const gameFinishedMultiPlayer = document.getElementById("gamefinishedmultiplayer");
const winnerNames = document.querySelectorAll(".winner");
const winnerScore = document.getElementById("winnerscore");
// Sounds
const audioFlip = new Audio ("sounds/bookflip.ogg"); 
const audioFlipBack = new Audio ("sounds/flipback.wav");
const audioPair = new Audio ("sounds/pair.wav");
const audioFinished = new Audio ("sounds/finished.wav");
const audioPick = new Audio ("sounds/pick.ogg");
const audioReset = new Audio ("sounds/reset.ogg");
// Classes modified with themes
const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");
const cardFaces = document.querySelectorAll(".card-face");
const cardFacesBack = document.querySelectorAll(".card-face-back");
const cardFacesFront = document.querySelectorAll(".card-face-front");
const modal = document.querySelectorAll(".modal");
const gameFinishedSection = document.querySelectorAll(".gamefinished");
const settingsPage = document.getElementById("settings");
const settingsModal = document.querySelector(".settings");
// Themes 
const themeButtons = document.querySelectorAll(".themebutton");
const settingsButtons = document.querySelectorAll(".settingsbutton");
const industrial = [
	"url(img/themes/industrial/background.png)", 
	"rgb(239, 239, 239)",
	"rgba(193, 193, 193,1)",
	"2px 2px 10px 8px rgba(200, 200, 200,.6)",
	"black", 
	"rgba(239, 239, 239,.75)",
	"2px solid rgb(149, 147, 147)",
	"2px 2px 10px 8px rgba(200, 200, 200,.6)",
	"url(img/themes/industrial/cardback.jpg)",
	"rgba(255,255,255,.2)",
	"color-burn",
	"url(img/themes/industrial/cardfront.jpg)",
	"url(img/themes/industrial/endscreen.jpg)",
	"rgba(0,0,0,.75)",
	"2px 2px 10px 32px rgba(200, 200, 200,.6)"
	];

const forest = [
	"url(img/themes/forest/background.png)",
	"rgb(80, 2, 0)",
	"rgb(39, 103, 19)",
	"2px 2px 10px 8px rgb(13, 55, 0)",
	"black",
	"rgba(174, 204, 164,.75)",
	"2px solid rgb(95, 146, 79)",
	"2px 2px 10px 8px rgb(13, 55, 0)",
	"url(img/themes/forest/cardback.jpg)",
	"rgba(255,255,255,.2)",
	"color-burn",
	"url(img/themes/forest/cardfront.jpg)",
	"url(img/themes/forest/endscreen.jpg)",
	"rgba(68, 137, 46,.75)",
	"2px 2px 10px 32px rgb(13, 55, 0)"
	];

const ocean = [
	"url(img/themes/ocean/background.jpg)",
	"rgb(2, 50, 97)",
	"rgb(8, 115, 218)",
	"2px 2px 10px 8px rgb(4, 64, 122)",
	"black",
	"rgba(15, 94, 171,.75)",
	"2px solid rgb(6, 56, 105)",
	"2px 2px 10px 8px rgb(4, 64, 122)",
	"url(img/themes/ocean/cardback.jpg)",
	"rgba(258,258,258,.3)",
	"color-burn",
	"url(img/themes/ocean/cardfront.jpg)",
	"url(img/themes/ocean/endscreen.jpg)",
	"rgba(169, 51, 255,.7)",
	"2px 2px 10px 32px rgb(4, 64, 122)"
	];

const rainbow = [
	"url(img/themes/rainbow/background.png",
	"black",
	"rgba(255,255,128,0.6)",
	"2px 2px 10px 8px rgba(0,0,0,.5)",
	"black",
	"rgba(258,258,258,.5)",
	"2px solid gray",
	"2px 2px 10px 8px rgba(0,0,0,.5)",
	"url(img/themes/rainbow/cardback.jpg)",
	"rgba(258,258,258,.5)",
	"color-burn",
	"url(img/themes/rainbow/cardfront.jpg)",
	"url(img/themes/rainbow/endscreen.jpg)",
	"rgba(222,222,128,.7)",
	"2px 2px 10px 32px rgba(0,0,0,.5);"
	];

const glitter = [
	"url(img/themes/glitter/background.jpg)",
	"black",
	"rgba(11, 119, 240,0.6)",
	"2px 2px 10px 8px rgba(0,0,0,.5)",
	"black",
	"rgba(255, 251, 25,0.4)",
	"2px solid rgba(211, 207, 0)",
	"2px 2px 10px 8px rgba(0,0,0,.5)",
	"url(img/themes/glitter/cardback.jpg)",
	"rgba(140,60,258,.6)",
	"color-burn",
	"url(img/themes/glitter/cardfront.jpg)",
	"url(img/themes/glitter/endscreen.jpg)",
	"rgba(183, 0, 183,.5)",
	"2px 2px 10px 32px rgba(0,0,0,.5)"
	];

// Set initial counters 
let flippedNumber = 0;
let moves = 0;
let picked = [];
let amount = 0;
let pairs = 0;
let players = 1;
let currentPlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore= 0;
let playerInfo = [];
let currentTheme = [];

// Menu
hamburgerButton.forEach(function(button) {
	button.addEventListener("click", function() {
		button.style.display = "none";
		buttonContainer.forEach(function(container) {
			container.style.display = "flex";
		})
	})
})

closeButton.forEach(function(button) {
	button.addEventListener("click", closeMenu);
});

function closeMenu() {
	buttonContainer.forEach(function(container) {
		container.style.display = "none";
	});
	hamburgerButton.forEach(function(button) {
		button.style.display = "flex";
	});
};

backButtons.forEach(function(button) {
	button.addEventListener("click", () => {
		let thisPage = eval(button.dataset.current);
		if (button.dataset.previous == "") {
			if (players === 1) {
				pickPlayerNumber.style.display = "block";
			} else if (players > 1) {
				playerNames.style.display = "block";
			}
		} else { 
			let prevPage = eval(button.dataset.previous);
			prevPage.style.display = "block";
		}
		thisPage.style.display = "none";
		nameInputs.forEach(function(input) {input.style.display = "none";});
		allCardContainers.forEach(function(card) {card.style.display = "none";});
	});
});

// Choose the theme
settingsButtons.forEach(function(button) {
	button.addEventListener("click", function() {
		settingsPage.style.display = "flex";
		game.style.display = "none";
	});
})

backButtonThemePage.addEventListener("click", function() {
	settingsPage.style.display = "none";
	game.style.display = "block";
	closeMenu()
});

themeButtons.forEach(function(button) {
	button.addEventListener("click", () => {
		currentTheme = eval(button.dataset.theme);
		body.style.backgroundImage = currentTheme[0];
		body.style.color = currentTheme[1];
		buttons.forEach(function(b) {
			b.style.backgroundColor = currentTheme[2];
			b.style.boxShadow = currentTheme[3];
			b.style.color = currentTheme[4];
		}) 
		nameInputs.forEach(function(input) {
			input.style.background = currentTheme[5];
			input.style.border = currentTheme[6];
		})
		cardFaces.forEach(function(card) {
			card.style.boxShadow = currentTheme[7];
		});
		cardFacesBack.forEach(function(card) {
			card.style.backgroundImage = currentTheme[8];
			card.style.backgroundColor = currentTheme[9];
			card.style.backgroundBlendMode = currentTheme[10];
		})
		cardFacesFront.forEach(function(card) {
			card.style.backgroundImage = currentTheme[11];
		})
		modal.forEach(function(modal) {modal.style.backgroundImage = currentTheme[12];});
		gameFinishedSection.forEach(function(section) {section.style.backgroundColor = currentTheme[13];});
		settingsPage.style.backgroundImage = currentTheme[0];
		settingsModal.style.backgroundImage = currentTheme[0];
		settingsModal.style.boxShadow = currentTheme[7];
		buttonContainer.forEach(function(cont) {
			cont.style.boxShadow = currentTheme[14];
			cont.style.backgroundImage = currentTheme[0];
		})
	});
});

// Set the amount of players
pickPlayerButtons.forEach(function(button) {
	button.addEventListener("click", function() {
		players = parseInt(button.dataset.players);
		pickPlayerNumber.style.display = "none";
		if (players === 1) {
			movesLine.style.display = "block";
			playerScores.style.display = "none";
			pickAmount.style.display = "block";
		} else if (players > 1) {
			playerNames.style.display = "block";
			movesLine.style.display = "none";
			playerScores.style.display = "flex";
			playerScoreCards[0].classList.add("playerscorecard-currentplayer");
			for (i = 0; i < players; i++) {
				playerScoreCards[i].style.display = "block";
				nameInputs[i].style.display = "block";
			}
		}
		closeMenu();
	});
});

playButton.addEventListener("click", function() {
	playerNames.style.display = "none";
	pickAmount.style.display = "block";
	let names =[];
	nameInputs.forEach(function(input, index) {
		if (input.value == "") {
			names.push(`Player ${(index + 1) }`)
		} else {
			names.push(input.value);	
		}
	});
	names.forEach(function(name, index) {
		playerScoreCards[index].childNodes[1].innerHTML = name;
		if (playerInfo.length < players) {
			playerInfo.push({name: `${names[index]}`, score: 0},);
		}
	});
	closeMenu();
});

// Pick the amount of cards
amountButtons.forEach(function(button) {
	button.addEventListener("click", () => {
		amount = parseInt(button.dataset.amount); 
		showCategories();
	});
});

// show the categories possible for the chosen amount
function showCategories() {
	audioPick.play();
	pickAmount.style.display = "none";
	pickButtons.style.display = "block";
	pickCategoryButtons.forEach(function(button) {
		if (button.dataset.amount < amount) {
			button.style.display = "none";
		} else {
			button.style.display = "block";
		}
	});
	closeMenu();
} 

// Pick the cards 

pickCategoryButtons.forEach(function(categorybutton) {
	categorybutton.addEventListener("click", function() {
		picked = eval(categorybutton.dataset.category);
		if (picked == cardsRainbow && amount <= 16) {
			pickRainbowCategory();
		} else if (picked.toString() === "") {
			pickCategory();
		} else {
			shuffleCards();
		}
	});
});

// pick the rainbow categories 
function pickRainbowCategory() {
	audioPick.play();
	rainbowCategories.style.display = "block";
	pickButtons.style.display = "none";
	closeMenu();
}

// Shuffle and write the cards
function shuffleCards() {
	audioPick.play();
	for (i = 0; i < amount; i++) {
		allCardContainers[i].style.display = "flex";
	};
	rainbowCategories.style.display="none";
	pickButtons.style.display = "none";
	memoryGrid.style.display = "block";
	closeMenu();
	let tempArray = [...picked];	
	let selected = [];
	
	if (picked == cardsNumbers) {
		for (i = 0; i < (amount / 2); i++) {
			let face = tempArray[i];
			selected.push(face);
			selected.push(face);
		}
	} else {
		for (i = 0; i < (amount / 2); i++) {
			let randomInd = Math.floor(Math.random() * tempArray.length);
			let face = tempArray[randomInd];
			selected.push(face);
			selected.push(face);
			tempArray.splice(randomInd, 1);
		}
	} 
	
	let shuffleArray = function(array) {
		let counter = array.length;
		while (counter > 0) {
			let ind = Math.floor(Math.random() * counter);
			counter--;
			let temp = array[counter];
			array[counter] = array[ind];
			array[ind] = temp;
		}
	}

	shuffleArray(selected);

	cardPictures.forEach(function(card, index) {
		card.src = selected[index];
	})
}

// Play the game
if (flippedNumber < 2) {
	cards.forEach(function(card) {
		card.addEventListener("click", flip);
		function flip() {
			flippedNumber = flippedNumber + 1;
			if (flippedNumber <= 2) {
				audioFlip.play();
				card.classList.toggle("is-flipped");
				if (flippedNumber === 2) {
					let flipped = document.querySelectorAll(".is-flipped");
					if (flipped.length == 2) {
						if (flipped[0].childNodes[3].childNodes[1].src 
						===
						flipped[1].childNodes[3].childNodes[1].src) {
							moves = moves + 1;
							pairs = pairs + 2;
							moveNumber.innerHTML = moves;
							finishedMoves.innerHTML = moves;
							flipped.forEach(function(flippedCard) {
								setTimeout(function() {
									flippedCard.style.display = "none"
									flippedCard.classList.remove("is-flipped");
									audioPair.play();
									flipped = [];
									flippedNumber = 0;
								}, 2000);
							})
							setTimeout(function() {
								samePlayer();
								isGameFinished();
							}, 2000);
						} else {
							moves = moves + 1;
							moveNumber.innerHTML = moves;
							finishedMoves.innerHTML = moves;
							flipped.forEach(function(card) {
								setTimeout(function() {
									card.classList.remove("is-flipped");
									audioFlipBack.play();
									flipped = [];
									flippedNumber = 0;
								}, 3000)
							})
							setTimeout(function() {
								nextPlayer();
							}, 3000);
						}
					} else if (flipped.length == 0) {
						flippedNumber = 0;
						moves = moves + 1;
						moveNumber.innerHTML = moves;
					}
				}
			}
		}
	})
}

function samePlayer() {
	switch (currentPlayer) {
  		case 1:
    		playerOneScore = playerOneScore + 1;
			playerOnePoints.innerHTML = playerOneScore;
    		break;
		case 2:
    		playerTwoScore = playerTwoScore + 1;
			playerTwoPoints.innerHTML = playerTwoScore;
    		break;
		case 3:
    		playerThreeScore = playerThreeScore + 1;
			playerThreePoints.innerHTML = playerThreeScore;
    		break;
		case 4:
    		playerFourScore = playerFourScore + 1;
			playerFourPoints.innerHTML = playerFourScore;
    		break;
	}
}

function nextPlayer() {
	if (currentPlayer < players) {
		currentPlayer = currentPlayer + 1;
	} else if (currentPlayer = players) {
		currentPlayer = 1;
	}
	playerScoreCards.forEach(function(card) {
		card.classList.remove("playerscorecard-currentplayer");
	})
	playerScoreCards[currentPlayer - 1].classList.add("playerscorecard-currentplayer");
}

function isGameFinished() {
	if (pairs === amount) {
		audioFinished.play();
		memoryGrid.style.display = "none";
		if (players > 1) {
			gameFinishedMultiPlayer.style.display = "block";
			let allPlayerScores = [playerOneScore, playerTwoScore, playerThreeScore, playerFourScore];
			playerInfo.forEach(function(player, i) {
				player.score = allPlayerScores[i];
			}) 
			const comparePlayerInfo = (a, b) => a.score - b.score;
			playerInfo.sort(comparePlayerInfo);
			playerInfo.reverse();
			setEndScreenMultiplayer();
		}
		 else if (players = 1) {
			gameFinished.style.display = "block";
		} 
	};
};

function setEndScreenMultiplayer() {
	for (i = 0; 1 < playerInfo.length; i++) {
		if (i === (players - 1)) {
			console.log( "i is last in array", i, playerInfo[i].score)
			if (playerInfo[i].score === playerInfo[i - 1].score) {
				winnerNames[i].innerHTML = playerInfo[i].name;
				winnerScore.innerHTML = playerInfo[0].score.toString();
				i = 100;
			}
		} else if (playerInfo[i].score == playerInfo[i + 1].score) {
			winnerNames[i].innerHTML = `${playerInfo[i].name} & `;
			winnerScore.innerHTML = playerInfo[0].score.toString();
		} else if (playerInfo[i].score > playerInfo[(i + 1)].score) {
			winnerNames[i].innerHTML = playerInfo[i].name;
			winnerScore.innerHTML = playerInfo[0].score.toString();
			i = 100;
		}
	}
}

playAgain.addEventListener("click", function() {
	audioReset.play();
	pickAmount.style.display = "block";
	gameFinishedMultiPlayer.style.display = "none";
	flippedNumber = 0;
	moves = 0;
	moveNumber.innerHTML = moves;
	picked = [];
	amount = 0;
	pairs = 0;
	playerInfo = [];
	allCardContainers.forEach(function(container) {
		container.style.display = "none";
	});
	cards.forEach(function(card) {
			card.style.display = "block";
			card.classList.remove("is-flipped");
		})
	currentPlayer = 1;
	playerOneScore = 0; playerOnePoints.innerHTML = playerOneScore;
	playerTwoScore = 0; playerTwoPoints.innerHTML = playerTwoScore;
	playerThreeScore = 0; playerThreePoints.innerHTML = playerThreeScore;
	playerFourScore= 0; playerFourScore.innerHTML = playerThreeScore;
	buttonContainer.forEach(function(container) {
		container.style.display = "none";
	})
	hamburgerButton.forEach(function(button) {
		button.style.display = "flex";
	})
})

resetButton.forEach(function(button) {
	button.addEventListener("click", () => {
		audioReset.play();
		pickPlayerNumber.style.display = "block";
		playerNames.style.display = "none";
		pickAmount.style.display = "none";
		pickButtons.style.display = "none";
		memoryGrid.style.display = "none";
		gameFinished.style.display = "none";
		gameFinishedMultiPlayer.style.display = "none";
		flippedNumber = 0;
		moves = 0;
		moveNumber.innerHTML = moves;
		picked = [];
		amount = 0;
		pairs = 0;
		playerInfo = [];
		allCardContainers.forEach(function(container) {
			container.style.display = "none";
		})
		cards.forEach(function(card) {
			card.style.display = "block";
			card.classList.remove("is-flipped");
		})
		currentPlayer = 1;
		playerOneScore = 0; playerOnePoints.innerHTML = playerOneScore;
		playerTwoScore = 0; playerTwoPoints.innerHTML = playerTwoScore;
		playerThreeScore = 0; playerThreePoints.innerHTML = playerThreeScore;
		playerFourScore= 0; playerFourScore.innerHTML = playerThreeScore;
		playerScoreCards.forEach(function(card) {
			card.classList.remove("playerscorecard-currentplayer");
			card.style.display = "none";
		})
		nameInputs.forEach(function(input) {input.style.display = "none"; input.value = ""});
		buttonContainer.forEach(function(container) {
			container.style.display = "none";
		})
		hamburgerButton.forEach(function(button) {
			button.style.display = "flex";
		})
	})
})