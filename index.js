
import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo){
const encondig = 'utf-8'
    fs.readFile(caminhoDoArquivo, encondig,(_, texto)=>{console.log(chalk.bgGray(texto))})
}
pegaArquivo('./arquivos/texto.md');