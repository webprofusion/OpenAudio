import fs from 'fs'
import {hello} from './hello'

fs.rmSync('out', {recursive: true, force: true})
fs.mkdirSync('out')

fs.writeFileSync('out/README.md', `
# ${hello} ${Math.random()}
`)
