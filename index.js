const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  let updatedTitles = []
  tutorials.map(function(title){
    let splitSentance = title.split(' ')
    updatedTitles.push(capWords(splitSentance))

  })
  return updatedTitles
}

function capWords(splitSentance){
  let updatedSentance = ""
  for(let i = 0; i < splitSentance.length; i++){
    let word = splitSentance[i]
    let capLetter = word[0].toUpperCase();
    let remainder = word.slice(1)
    let completedWord = capLetter + remainder
    if(i == splitSentance.length-1){
      updatedSentance += completedWord
    }else 
    updatedSentance += completedWord + " "
  }
  return updatedSentance
}

console.log(titleCased())
