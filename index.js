// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Contutorialuctor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// // function titleCased() { 
// //   return tutorials.map((tutorial) => {
// //       let words = tutorial.split(" ")
// //       for(const word of words){
// //         if(word.match(/^[A-Za-z]+$/)){
// //           if(word[0] == word[0].toLowerCase()){
// //             word[0].toUpperCase()
// //           }
// //         }
// //       }
// //   })
// // }

// const titleCased = (input) => {
//   return tutorials.map((line) => {
//     let tokens = line.split(' ')
//     let capitalizedTokens = tokens.map((token) => {token.charAt(0).toUpperCase() + token.slice(1)})
//     let response = capitalizedTokens.join(' ')
//     return response
//   })
// }


// titleCased()

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

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}