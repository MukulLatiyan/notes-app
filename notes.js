const fs = require('fs')
const { default: chalk } = require('chalk')

let getNotes = () => "This is my notes....!!!"

let addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title == title)

    if(!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('Note added!'))
    } else {
        console.log(chalk.bgRed('Title already taken!'))
    }
    
}

let removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Node removed...!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found...!'))
    }

}

let saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


let loadNotes = () => {
    try{
        let dataBuffer = fs.readFileSync('notes.json')
        let dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    }catch(e){
        return []
    }
}

let readNotes = (title) => {
    const notes = loadNotes()

    const noteFound = notes.find((note) => note.title === title)

    if(noteFound){
        console.log(chalk.italic(noteFound.title))
        console.log(noteFound.body)
    } else {
        console.log(chalk.bgRed('No note found...'))
    }
} 

let listNotes = (title) => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes...'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    getNotes,
    addNotes,
    removeNotes,
    listNotes,
    readNotes
}