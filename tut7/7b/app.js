const fs = require('fs')
const path = require('path')

const dir_path = process.argv[2]


fs.watch(dir_path, (evt, file) => {
    if (evt === 'change') {
        console.log(`File ${file} was modified, new contents:\n--BEGINNING OF THE FILE--`)
        fs.readFile(path.join(dir_path, file), 'utf-8', (err, data) => console.log(`${data}\n--END OF THE FILE--`))
    }
})