const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map((title) => {
    title.split(" ");
    const sentSplit = title.split(" ");
    console.log(sentSplit);
   let split = sentSplit.map((word) => {
      console.log(word.charAt(0).toUpperCase())
      let upSent = word.charAt(0).toUpperCase()
      let remainder = word.substring(1)
      return upSent + remainder
    });
    return split.join(' ')
  });
}
