// readline.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini > '
});

const stringManipulation = (word) => {
    let vocal = 'a i u e o';

    if (vocal.includes(word[0])) {
        return word;
    } else {
        return word.substring(1) + word[0] + 'nyo';
    }
}

const sentencesManipulation = (sentence) => {
    let result = '';
    let splitSentence = sentence.split(' ');
    for (let i = 0; i < splitSentence.length; i++) {
        result += stringManipulation(splitSentence[i]) + ' ';
    }
    return result.trim();
}

rl.prompt();
rl.on('line', (line) => {
    console.log(sentencesManipulation(line));

    rl.prompt();
}).on('close', () => {
    console.log('Good Bye!');
    process.exit(0);
});