const chalk = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}//addNote
//node app.js add --title="hello world" --body="what are you tallking about"

const removeNote = (title)=>{
	const notes = loadNotes();
	//check if exist
	const otherNotes = notes.filter((note)=>{
  return note.title !== title;
 });
	if(notes.length > otherNotes.length){
		console.log('note with title',title,' is found');  
  console.log('note is removed and saving')
  saveNotes(otherNotes);
		//notes.splice(notes.indexOf(title), 1);
  console.log(chalk.green.inverse('removed'));
	}else{
		console.log(chalk.red.inverse('no such a note'));
	}
}//removeNote
//node app.js remove --title="THE TITLE HERE"

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes =()=>{
 const notes = loadNotes();
 console.log('notes loded')
 notes.forEach((note) => {  
  console.log(note.title, note.body)
 });
}//listNotes

const readNote = (title) =>{
 const notes = loadNotes();
 const findNote = notes.find((note) =>{
  return note.title === title;
 })
 if (findNote){
  console.log('note found!')
  console.log(findNote.title, findNote.body);
 } else {
  console.log('note NOT found!')
 }
}//readNote


module.exports = {
 getNotes: getNotes,
 addNote: addNote,
 removeNote: removeNote,
 listNotes: listNotes,
 readNote: readNote,
}