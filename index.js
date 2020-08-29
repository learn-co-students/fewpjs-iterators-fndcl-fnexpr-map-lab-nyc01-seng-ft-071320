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

function titleCased() {
  let split = tutorials.map(function(tutorial) {let splitTutorial = tutorial.split(" ")
    let upCase = splitTutorial.map(word => word[0].toUpperCase() + word.slice(1))
    tutorial = upCase.join(" ")
    return tutorial
  })
  console.log(split)
  return split
}

titleCased()