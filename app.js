const notes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')
const { title } = require('process')

yargs.command({
    command : 'add',
    describe : 'Add values',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Describes the body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove values',
    builder : {
        title : {
            describe : 'Removing...',
            commandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'List values',
    handler(argv){
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command : 'read',
    describe : 'Describe Values',
    builder : {
        title : {
            describe : 'reading',
            commandOption : true,
            type : 'string'
        }
    },
    handler(argv){
       notes.readNotes(argv.title)
    }
})

yargs.parse()