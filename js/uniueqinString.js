// lodash

// let s1 = "this apple is sweet".split(' ');
// let s2 = "this apple is sour".split(' ')
let s1 = "apple apple".split(' ');
let s2 = "banana".split(' ')
// const stor=new set() 

let conc = s1.concat(s2)
// console.log(conc)

function onlyUnique(value, index, array) {
    // console.log(value, index)

     if(array.indexOf(value) === index) {
        console.log(value, index)
        return value
    }
}

console.log(conc.filter(onlyUnique))



