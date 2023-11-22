//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const favFoods = (person) => {
    answer = ''
  pKeys = Object.keys(person)
  for (key of pKeys){
    answer += '\n' + key.toUpperCase() + ': '
    if (typeof person[key] === 'string'){
        answer += person[key] + ', '
    } else if (typeof person[key] === 'object'){
        for (tasteyDish of person[key]){
            if (typeof tasteyDish === 'object'){
               for (let [key, value] of Object.entries(tasteyDish)){
                answer += key + ': ' + value + ', '
               }
            }
        }
        }
    }
    return answer
  }

console.log(favFoods(person3))

//time complexity is atrocicious I know. But i'm afraid of recursive functions



//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo = () => `Hello human, I am ${this.age} celestial patterns old. I am known as ${this.name} You will surrended your planet and your soul to me!`
    ageMe = () => this.age += 1
}

const zzorgathx2 = new Person('zzorgathx2', 822)
const billy = new Person('William', 28)

console.log(zzorgathx2.printInfo())
console.log(billy.printInfo())
billy.ageMe()
billy.ageMe()
billy.ageMe()
console.log(billy.printInfo())



// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
const apiCall = async () => {
   const resp = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await resp.json()
    console.log(data)
}
apiCall()

   fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
   .then(resp => {
    return resp.json()
   }).then(data => {
    console.log(data)
   })


    ////////////  CODEWARS ///////////////

    //Q1: Highest And Lowest
    /*
    In this little assignment you are given a 
    string of space separated numbers, 
    and have to return the highest and lowest number.

examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
    myNums = numbers.split(' ')
    myArr = []
    for (num of myNums) {
      myArr.push(Number(num))
    }
    myArr.sort((a,b) => a-b)
    return `${myArr[myArr.length-1]} ${myArr[0]}`
  }

console.log(highAndLow('1 -51 1  5 0  123 -1  4 11 2 8 -3'))

/* NOTES: 
Spent way too much time on this. 
It seemed easy, and would have been in python
because the python sort method actually sorts numerically
but apperantly javascript defaults to string sort
EVEN IF ITS A NUMBER! 
So after research I see I had to use an in place arrow function
To set the sort explicitly to do what i wanted... kill me


Q2: Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. 
If n < 0 or m < 0 return 0.
*/

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  }
  else {
    return n * m
  }
}

console.log(paperwork(5, 5))

//I deserved an easy one after that first slog...

/*PS When we started the bootcamp I was convinced javascript was > python
Now I'm not so sure. Python is so much easier to read and work with, and now that 
I've used it for a while it's hard to go back to some things (let i = 0; i < arr.length;i++) or (myArr[myArr.length-1])

