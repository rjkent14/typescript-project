const words = ['Above', 'Booth', 'Cause', 'Debut', 'Equal', 'Forum', 'Guess', 'Capital', 'Careful', 'Ceiling'];

const longWords = words.filter(word => word.length > 5);

console.log("Original words:", words);
console.log("Words with more than 5 letters:", longWords);