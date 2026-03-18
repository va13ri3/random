var favMovies = ["Mrs.Doubtfire", "Cars 2", "Overboard"];
const hobbies = new Array("coloring", "crocheting", "cleaning");
const luckyNumbers = new Array(2, 3, 7, 13);

//literal

const fortune = ["Yes", "NO", "maaaaaaaayybeeeee", "absolutely NOT", "suureee...", "Ask again"]
console.log(fortune[2]);
fortune[0] = "Absolutely";
console.log(fortune);

fortune[5] = "I don't know!!"
console.log(fortune);


console.log(fortune.length);

//or

let length = fortune.length;
console.log(length);

var superLong = [2,345,678,9098,76543,2456,7890,8765,43,20000,3000,40,205,493,409283,43985,68,345.925,345,64,75,24325,646,7685,235,3756,43,5758,34567,8,45,3,4745,23,5,363]
console.log(superLong.length);
superLong[superLong.length-1] = 100000;

console.log(fortune.length);
console.log(fortune[fortune.length-1]);
fortune.push("Sometimes");
console.log(fortune);
console.log(fortune[fortune.length-1]);
fortune.pop();
console.log(fortune);



function pushArray(arr){
    console.log(arr[0]);
    console.log(arr[2]);
}
pushArray();
console.log(pushArray());
