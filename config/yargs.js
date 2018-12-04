const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('create', 'Create the multiplication table in file',opts)
                .command('list', 'list the multiplication table in the console',opts)
                .help()
                .argv;

module.exports = {
    argv
}