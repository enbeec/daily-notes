#!/usr/bin/env node

const notes = [
	{
		id: 1,
		subject: "javascript objects and arrays",
		date: "April 15, 2021",
		feeling: "happy",
		timeSpent: 15,
	},
	{
		id: 2,
		subject: "javascript const actually defines a constant reference",
		date: "April 15, 2021",
		feeling: "ok",
		timeSpent: 5,
	},
]

function printNotes() {
	for (const note of notes) {
		printNote(note);
	}
}

function printNote(note) {
	// all lines but first line indented for readability
	console.log(`Note ${note.id}
	${note.date}
	I learned ${note.subject}
	I spent ${note.timeSpent} minutes working on it
	I felt ${note.feeling}.\n`);
}

function searchNotes(term) {
	for (const note of notes) {
		if (note.feeling === term) {
			printNote(note);	
		}
	}
}

function addNote(noteObject) {
	const maxId = notes[notes.length - 1].id;
	noteObject.id = maxId + 1;
	notes.push(noteObject);
}

// ==== EXEC =============
notes.push({
	id: 3,
	subject: "javascript arrays all have a push() method that adds to the end",
	date: "April 15, 2021",
	feeling: "happy",
	timeSpent: 2,
});

searchNotes("ok");
