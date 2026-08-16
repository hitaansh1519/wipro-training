//Question 3

function reverseString(str){
    str = str.split('');

    str = str.reduce((arr, pointer) => {

        arr.unshift(pointer);

        return arr;
    },[])

    str = str.join('');
    return str;
}

console.log(reverseString('hitaansh'));


//Question 4

function removeDuplicates(nums){
    const result = nums.reduce((arr, num) => {

        if(!arr.includes(num)) arr.push(num);

        return arr
    },[])

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


//Question 5

function longestWord(words){
    return words.reduce((maxi, word) => {

        maxi = maxi.length >= word.length ? maxi : word;
        return maxi;
    },'')
}

console.log(longestWord(['reduce', 'method', 'is', 'very', 'useful']));


//Question 6

function countFruits(fruits){
    return fruits.reduce((countArr, fruit) => {

        if(!countArr[fruit]){
            countArr[fruit] = 0;
        }

        countArr[fruit]++;

        return countArr;
    },{})
}
console.log(countFruits(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));