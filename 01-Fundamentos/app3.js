const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf-8')

const wordCount = content.split(' ').length

const contentLower = content.toLowerCase()

const reactWordCount = contentLower.split('react').length -1 

console.log('Palabras:', wordCount)
console.log('Palabras React:', reactWordCount)