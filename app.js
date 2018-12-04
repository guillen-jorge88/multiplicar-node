const { argv } = require('./config/yargs');
const colors = require('colors/safe')

const {createFile, listTable} = require('./multiplicar/multiplicar');


let command =  argv._[0];
switch(command){
    case 'list':
        listTable(argv.base, argv.limite);
        //console.log(argv);
    break;
    case 'create':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        //console.log(`create`);
    break;
    default:
        console.log(`it's not a valid command`);
}
