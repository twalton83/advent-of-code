const data = require('../data')

// find three numbers that sum to 2020
function getAnswer(){
  const arr = data.split('\n').map(n => parseInt(n))
  for(let i = 0; i < arr.length; i++){

    for(let j = arr.length; j > 0; j--){

      for (let k = 0; k < arr.length; k++){

        if (arr[i] + arr[j] + arr[k] === 2020){
          return (arr[i] * arr[j] * arr[k])
         } 
      }
    }
  }
}

console.log(getAnswer())
