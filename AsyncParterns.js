const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilepromise = util.promisify(writeFile);


const start = async () => {
    try {
    const first = await readFile('./content/subfolder/first.txt', 'utf8');
    const second = await readFile('./content/subfolder/second.txt', 'utf8');
    await writeFile(
        './content/subfolder/result-fourth-newfile.txt',
        `This is awesome: ${first} ${second}`
    )
    console.log(first, second);
    } catch (error) {
        console.log(error)
    }
}

start()

// getText('./content/subfolder/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data)=> {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// };

