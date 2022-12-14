let word = 'mom';
function isPalindrome(word) {
  // Write your algorithm here
  if(word.split("").reverse().join("") === word){
    return true; 
  } else{
    return false;
  }

}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Create function that takes the argument of word
  Compares word written backward and the actual word
  If conditional returns true if plaindrome
  False if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
