// script.js

let questions = [
	{
		prompt: `What is MongoDB?`,
		options: [
		    "A programming language",
		    "A NoSQL database management system",
		    "A web server",
		    "A framework for building web applications",
		],
		answer: "A NoSQL database management system",
	    },
	    {
		prompt: `What does NoSQL stand for?`,
		options: [
		    "Not Only SQL",
		    "Non-Sequential Query Language",
		    "No Single Query Language",
		    "New SQL",
		],
		answer: "Not Only SQL",
	    },
	    {
		prompt: `What is BSON in MongoDB?`,
		options: [
		    "A JavaScript framework",
		    "A web server",
		    "A programming language",
		    "Binary JSON",
		],
		answer: "Binary JSON",
	    },
	    {
		prompt: `Which of the following is true about MongoDB?`,
		options: [
		    "MongoDB stores data in tables with fixed schemas",
		    "MongoDB is a relational database management system",
		    "MongoDB is not suitable for large-scale applications",
		    "MongoDB stores data in flexible, JSON-like documents",
		],
		answer: "MongoDB stores data in flexible, JSON-like documents",
	    },
	    {
		prompt: `What is a document in MongoDB?`,
		options: [
		    "A table in a relational database",
		    "A column in a relational database",
		    "A schema in MongoDB",
		    "A record in a MongoDB collection",
		],
		answer: "A record in a MongoDB collection",
	    },
	    {
		prompt: `What is a collection in MongoDB?`,
		options: [
		    "A table in a relational database",
		    "A column in a relational database",
		    "A schema in MongoDB",
		    "A group of MongoDB documents",
		],
		answer: "A group of MongoDB documents",
	    },
	    {
		prompt: `What is a field in MongoDB?`,
		options: [
		    "A table in a relational database",
		    "A column in a relational database",
		    "A schema in MongoDB",
		    "A key-value pair in a MongoDB document",
		],
		answer: "A key-value pair in a MongoDB document",
	    },
	    {
		prompt: `What is a primary key in MongoDB?`,
		options: [
		    "A table in a relational database",
		    "A column in a relational database",
		    "The unique identifier for a document",
		    "A schema in MongoDB",
		],
		answer: "The unique identifier for a document",
	    },
	    {
		prompt: `What is the purpose of the "_id" field in MongoDB documents?`,
		options: [
		    "To store metadata about the document",
		    "To reference other documents",
		    "To uniquely identify a document",
		    "To define the structure of the document",
		],
		answer: "To uniquely identify a document",
	    },
	    {
		prompt: `How do you create a new database in MongoDB?`,
		options: [
		    "By executing a CREATE DATABASE statement",
		    "MongoDB creates databases automatically",
		    "By inserting a document into a collection",
		    "By defining a schema for the database",
		],
		answer: "MongoDB creates databases automatically",
	    },
	    {
		prompt: `How do you create a new collection in MongoDB?`,
		options: [
		    "By executing a CREATE COLLECTION statement",
		    "By inserting a document into a collection",
		    "MongoDB creates collections automatically",
		    "By defining a schema for the collection",
		],
		answer: "MongoDB creates collections automatically",
	    },
	    {
		prompt: `What is the syntax for querying documents in MongoDB?`,
		options: [
		    "Using the WHERE clause",
		    "Using SQL statements",
		    "Using the SELECT keyword",
		    "Using the find() method",
		],
		answer: "Using the find() method",
	    },
	    {
		prompt: `What is the purpose of indexing in MongoDB?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To improve query performance",
		],
		answer: "To improve query performance",
	    },
	    {
		prompt: `What is Map-Reduce in MongoDB?`,
		options: [
		    "A programming language",
		    "A web server",
		    "A NoSQL database management system",
		    "A data processing technique",
		],
		answer: "A data processing technique",
	    },
	    {
		prompt: `What is Sharding in MongoDB?`,
		options: [
		    "A programming language",
		    "A web server",
		    "A NoSQL database management system",
		    "A method for distributing data across multiple servers",
		],
		answer: "A method for distributing data across multiple servers",
	    },
	    {
		prompt: `What is Replication in MongoDB?`,
		options: [
		    "A programming language",
		    "A web server",
		    "A NoSQL database management system",
		    "The process of synchronizing data across multiple servers",
		],
		answer: "The process of synchronizing data across multiple servers",
	    },
	    {
		prompt: `What is the purpose of the MongoDB Compass tool?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To provide a graphical interface for MongoDB",
		],
		answer: "To provide a graphical interface for MongoDB",
	    },
	    {
		prompt: `What is the purpose of the MongoDB Atlas service?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To provide a managed MongoDB database service",
		],
		answer: "To provide a managed MongoDB database service",
	    },
	    {
		prompt: `What is the purpose of the "mongo" shell in MongoDB?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To interact with MongoDB from the command line",
		],
		answer: "To interact with MongoDB from the command line",
	    },
	    {
		prompt: `What is the purpose of the $set operator in MongoDB update operations?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To set the value of a field",
		],
		answer: "To set the value of a field",
	    },
	    {
		prompt: `What is the purpose of the $push operator in MongoDB update operations?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To add an element to an array",
		],
		answer: "To add an element to an array",
	    },
	    {
		prompt: `What is the purpose of the $addToSet operator in MongoDB update operations?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To add a unique element to an array",
		],
		answer: "To add a unique element to an array",
	    },
	    {
		prompt: `What is the purpose of the $pull operator in MongoDB update operations?`,
		options: [
		    "To define the structure of documents",
		    "To enforce data integrity",
		    "To create relationships between documents",
		    "To remove elements from an array",
		],
		answer: "To remove elements from an array",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
