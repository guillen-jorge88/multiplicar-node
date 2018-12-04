const fs = require('fs');
const colors = require('colors')

let listTable = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('========================'.green);
        console.log(`Tabla del ${base}`.green);
        console.log('========================'.green);
        if (!Number(base)) {
            reject(`it's no a number, ${base}`.red);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data = `${base} * ${i} = ${base * i}`;
            console.log(data);
        }
    });
}

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`it's no a number, ${base}`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-multiplicar-${base}-al-${limite}.txt`, data, err => {
            if(err) reject(err);
            else resolve(`tablas/tabla-multiplicar-${base}-al-${limite}.txt`);
        })
    });
}

module.exports = {
    createFile,
    listTable
};