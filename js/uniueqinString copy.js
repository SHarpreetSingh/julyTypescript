// THIS IS just try and error purpose file+++++++++++++++++++++++++++++++++++++++++++++++++++

// let s1 = "this apple is sweet".split(' ');
// let s2 = "this apple is sour".split(' ')
let o1={}
let s1 = "apple apple".split(' ');
let s2 = "banana".split(' ')
// const stor=new set() 

let conc = s1.concat(s2)
// console.log(conc)

let str1Uni= [...new Set(s1)]
let str2Uni= [...new Set(s2)]
console.log(str1Uni,str2Uni)

// let unique = [...new Set(conc)];
// console.log(unique)


// Object.assign(o1,conc)
// console.log("stor==",o1);

// o1.coun=0

// console.log("stor==",o1);

// for (let i in o1) {
//     const element = o1[i];
//     for(let j in o1) {
//     const elementJ = o1[j];
//         if(element === elementJ && i!=0){
//             console.log(element,elementJ)
//             // o1.coun++
//         }else {
//             console.log("ese",element,elementJ)
//         }
//     }

//     // console.log(element,i)
// }

// const strA = s1.split(' ')

// for (let index = 0; index < strA.length; index++) {
//     const element = strA[index];
//     // if (element === strA[index + 1]) {
//     //     console.log("element === strA[index+1", element === strA[index + 1])
//     //     break;
//     // }
//     // console.log(element)
//     for (let q = 0; q < s2.length; q++) {
//         const e = s2[q];
//         if (e === s2[q + 1]) {
//             console.log("e === s2[q+1]", (e === s2[q + 1]))
//             break;
//         }
//         console.log("ele==", e)
//         if (element !== e) {
//             stor.push(element)
//             stor.push(e)
//             console.log("n==", element,"!==" ,e)
//         console.log("stor==",stor);

//         } else {
//             console.log(element, element === e)
//             break;
//         }
//     }
//     console.log("stor",stor);
    
// }