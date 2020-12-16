const data = require('../data')

// find two numbers that add up to 2020
// multiply those two together
function getAnswer(){
  const arr = data.split('\n')
  for(let i = 0; i < arr.length; i++){
    for(let j = arr.length; j > 0; j--){
      if (parseInt(arr[i]) + parseInt(arr[j]) === 2020){
        return arr[i] * arr[j] 
      } 
    }
  }
}

module.exports = getAnswer

