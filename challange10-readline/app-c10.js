// readline.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini > '
});

function stringManipulation(word) {
    let vocalAlpha = 'a i u e o'; // declare vocal alphabets
    let startWord = word.charAt(0); // get start char of paramater

    if (vocalAlpha.includes(startWord) === true) {
        return word;
    } else {
        return word.slice(1, word.length) + startWord + 'nyo';
    }
}

function sentencesManipulation(sentence) {
    let result = '';
    let splitSentence = sentence.split(' ');

    for (let i = 0; i < splitSentence.length; i++) {
        result += stringManipulation(splitSentence[i]) + ' ';
    }
    return result;
}


rl.prompt();
rl.on('line', (line) => {
    console.log(sentencesManipulation(line));

    rl.prompt();
}).on('close', () => {
    console.log('Good Bye!');
    process.exit(0);
});