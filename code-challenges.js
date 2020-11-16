// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


//simple variable using string interpolation and not hard code like week 1 :)
const divide = (num) => {
    if (num % 3 == 0 ) {
        return `${num} is divisible by three`
    } else if (num %3 !== 0){
    return `${num} is  not divisible by three`
    }
    else { "function is not working"}
    
}

console.log(divide(num1))
console.log(divide(num2))
console.log(divide(num3))





// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// const capital = (array) => {
//     let newArr = []
//     for (let i=0; i<array.length; i++) {
//       return newArr.map
//     }  


const capitalizer = (array) => {
    // create a local variable that maps through the array
    let eachItem = array.map(value => {
      // I found this on teh syllabus
      return value[0].toUpperCase() + value.substring(1)
    })
    // return the local variable joined into a string
    return [eachItem]
  }


console.log(capitalizer(randomNouns))


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
                        // 0   1     2     3   4    5    6   7   8      9
// Expected output: [-8, 0, 8, 46, 59, 90, 107]


// function with a for loop filtering usinh "typeof" and and If all the numbers
const onlyNumb = (array) => {
    let newArr = []
    for(let i=0; i<array.length; i++) {
        if(typeof (array[i]) == 'number'){
            newArr.push(array[i])
        }     
    } 
    // pre build method found on w3 schools
    newArr.sort(function(a,b){return a-b})
    return newArr
}

  console.log(onlyNumb(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// var splitted = vowelTester1.split("")
// console.log(splitted)


const vow1 = (str) => {
    let strToArr = str.split("") 
    // console.log(strToArr)
    for(let i=0; i<strToArr.length; i++) {
        if (strToArr[i] == 'a'|| 
            strToArr[i] == "e"||
            strToArr[i] == "i"||
            strToArr[i] == "o"||
            strToArr[i] == "u"
            ){
            return i
        }     
    } 
    return "no vowels"   
}

console.log(vow1(vowelTester1))

console.log(vow1(vowelTester2))





// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// function with 3 arguments, two numbers and the operator.
const calculator = (arg1, oper, arg2) => { 
    // I should define my 3 arguments
    // let arg1 = number
    // let arg2= number
    // let oper = [+, -, /, *]
    // I should define th datatype of the arguments
    if ((arg2)==0 && (oper)== /) {
    return "Can't divide by 0"
    // line below returns just the Text, no math done, I will look into a built in method.
        else  { `${arg1}${oper}${arg2}` }
    }
}



// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
