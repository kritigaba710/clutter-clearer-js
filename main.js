import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'
let files = await fs.readdir('C:\\Users\\DELL\\clear the clutter js')
console.log(files)
let extensions = []
for (const file of files) {
    console.log(path.extname(file))
    if (fsn.existsSync(path.extname(file))) {
        //move the file to directory
        fs.rename(file, path.join(path.extname(file), file))
    } else {
        fs.mkdir(path.extname(file))
        fs.rename(file, path.join(path.extname(file), file))
    }
}