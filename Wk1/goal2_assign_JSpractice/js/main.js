/*
     Name: Nicole Aitchison 
     Date: 08/08/13
     Class & Section:  PWA1-1308
     Comments: Goal2: JS Practice
 */

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
        // variable to keep hold the total of all the numbers
        var total = 0;
        // for loop that goes throught the array 
        for(var i=0, max=arr.length; i<max; i++){
            // adds each number in the array to the total
            total += arr[i];
        }
        // calculates the average of all the numbers
        var average = total/arr.length;
        // returns the average
        return average;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        // function to concat the first and last name
        var fullName = function(firstname, lastname){
            // var to hold the name
            var name = firstname.concat(lastname);
            // returns the name
            return name;
        }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        var wordCount = function(words){
            // split the string and put it in an array
            var arrayOfWords = words.split(" ");
            // return the length of the array which equals the word count
            return arrayOfWords.length;
        }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        var charCount = function(words){
            // remove all the spaces from the string
            var noSpaces = words.split(' ').join('');
            noSpaces.split("");
            // return the length of the array which would be the number of characters
            return noSpaces.length;
        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        var vowelsInWord = function(word){
            // split on the characters and hold them in an array
            var chars = word.split("");
            // variable to keep track of vowl count
            var vowelCount = 0;
            // goes through the array of characters
            for(var i = 0, max=chars.length; i<max; i++){
                // checks for vowels
                if(chars[i] === "a" || chars[i] === "A"){
                    vowelCount++;
                }
                else if(chars[i] === "e" || chars[i] === "E"){
                    vowelCount++;
                }
                else if(chars[i] === "i" || chars[i] === "I"){
                    vowelCount++;
                }
                else if(chars[i] === "o" || chars[i] === "O"){
                    vowelCount++;
                }
                else if(chars[i] === "u" || chars[i] === "U"){
                    vowelCount++;
                }
                else if(chars[i] === "i" || chars[i] === "I"){
                    vowelCount++;
                }
            }
            // returns the number of vowels
            return vowelCount;
        }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        var findNum = function(numbers, isEven){
            // if nothing was passed for isEven then it's not false so set it to true
            if(isEven != false){
                isEven = true;
            }
            // create an array that the odd or even numbers will be pushed too
            var newArray = [];
            // for loop to go through the array
            for(var i=0, max=numbers.length; i<max; i++){
                // check to see if it's odd or even, if the remainder is 0 then it's even
                var remainder = numbers[i] % 2;
                // if it wants to return even numbers and the current number is even
                if(isEven && remainder === 0){
                    // push the number to the array
                    newArray.push(numbers[i]);
                } 
                // else if it wants to return odd numbers and the current number is odd
                else if(!isEven && remainder > 0){
                    // push the number to the array
                    newArray.push(numbers[i]);
                }    
            }
            // return the array of numbers
           return newArray;
        }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();