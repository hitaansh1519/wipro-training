console.log(this)

//If I execute this code in the browser, I get window object
console.log(this)

//window - It is the global object of the browser.

//The value of this keyword changes where exactly I'm using it.

//global


//Question

// Problem: Group Anagrams Without Sorting
// Two words are anagrams if they contain the same characters with the same frequency.
// Examples:
// listen → silent
// evil → vile
// Your Task:
// Write a function:
// groupAnagrams(words)
// that groups all anagrams together.
// Example Input:
// [
//   "eat",
//   "tea",
//   "tan",
//   "ate",
//   "nat",
//   "bat"
// ]
// Expected Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]
// Rules:
// 1. You are NOT allowed to use:
//    - .sort()
//    - nested loops comparing every word with every other word
// 2. our solution should work for:
//    - uppercase/lowercase combinations
//    - repeated characters
//    - empty strings
// 3. Preserve original word order inside each group


function groupAnagrams(words){

    words.reduce(acc, cur => {
        const word = cur.split();
        if(/^[word]$/){
            
        }

        else{
            acc.push([cur]);
        }

    },[])
}