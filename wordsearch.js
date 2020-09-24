const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const lettersTransposed = transpose(letters);
    const verticalJoin = lettersTransposed.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  const transpose = function(matrix) {
    const output = [];
    for (let i = 0; i < matrix[0].length; i++) {
      output.push([]);
    }
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j ++) {
        output[j].push(matrix[i][j]);
      }
    }
    return output;
  };
  
  module.exports = wordSearch;