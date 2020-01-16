// challange 12 Rubicamp: Tebak Tebakan

const readline = require('readline');
const fs = require('fs');

let myArgs = process.argv;
console.log('myArgs: ' + myArgs);

switch (myArgs[2]) {
    case `${myArgs[2]}`:
        fs.readFile(`${myArgs[2]}`, 'utf8', (err, jsonString) => {
            if (err) {
                throw err;
            } else {
                let data = JSON.parse(jsonString);
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout,
                    prompt: "Jawaban: "
                });

                let countQuestion = 0;
                let countAnswer = 1;
                console.log(`Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini '${myArgs[2]}''`);
                console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.');
                console.log(`Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`);
                console.log(`Pertanyaan: ${data[countQuestion].definition}`);
                rl.prompt();

                rl.on('line', (line) => {
                    if (line.toLocaleLowerCase() == data[countQuestion].term.toLocaleLowerCase()) {
                        countAnswer = 1;
                        console.log('\nAnda Beruntung!\n');
                        countQuestion++;

                        if (countQuestion == data.length) {
                            console.log('Selamat Anda Berhasil!');
                            rl.close();
                        } else {
                            console.log(`Pertanyaan: ${data[countQuestion].definition}`);
                            rl.prompt();
                        }
                    } else if (line.toLocaleLowerCase() === 'skip') {
                        data.push(data[countQuestion]);
                        countQuestion++;
                        console.log(`\nPertanyaan: ${data[countQuestion].definition}`);
                        rl.prompt();
                    } else {
                        console.log(`\nAnda kurang beruntung! anda telah salah ${countAnswer} kali, silahkan coba lagi.`);
                        countAnswer++;
                        rl.prompt();
                    }
                }).on('close', () => {
                    process.exit(0);
                })
            };
        });
        break;

    default:
        console.log(`Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node app-c12.js data.json'`);
}