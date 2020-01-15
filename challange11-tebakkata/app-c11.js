// challange 11 Rubicamp: Tebak Kata

const fs = require('fs');
const readline = require('readline');

fs.readFile('soal-jawab.json', 'utf8', (err, jsonString) => {
    if (err) {
        throw err;
    } else {
        let data = JSON.parse(jsonString);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'Tebakan: '
        });

        let count = 0;
        console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n');
        console.log('Pertanyaan: ' + data[count].soal);
        rl.prompt();

        rl.on('line', (line) => {
            if (line.toLocaleLowerCase() == data[count].jawab) {
                console.log('Selamat Anda Benar!\n')
                count++;

                if (count == data.length) {
                    console.log('Hore Anda Menang!\n');
                    rl.close();
                } else {
                    console.log('Pertanyaan: ' + data[count].soal);
                    rl.prompt();
                }
            } else {
                console.log('Wkwkwkwk, Anda kurang beruntung!\n');
                rl.prompt();
            }
        }).on('close', () => {
            process.exit(0);
        });
    }
});