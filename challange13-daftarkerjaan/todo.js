// challange 13 Rubicamp: Daftar Kerjaan (todo)

const readline = require('readline');
const fs = require('fs');
let parse = fs.readFileSync('data.json', 'utf8');
let data = JSON.parse(parse);

let myArgv = process.argv;
let msg = `>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id> 
$ node todo.js complete <task_id> 
$ node todo.js uncomplete <task_id> 
$ node todo.js list:outstanding  asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js list `

switch (myArgv[2]) {
    case 'add':
        console.log('ini add');
        break;

    case 'list':
        for (let i = 0; i < data.length; i++) {
            console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].task}`);
        }
        break;

    case 'delete':
        console.log('ini delete');
        break;

    case 'complete':
        console.log('ini komplit');
        break;

    case 'tag':
        console.log('ini tag');
        break;

    case 'help':
    default:
        console.log(msg);
}