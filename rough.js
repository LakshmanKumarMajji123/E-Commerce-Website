// let obj = {

//   useremail: "lakshmankumar",
//   pwd: "xxxxx"
// };

// let obj1 = {};


// for (let i in obj) {
//   console.log(obj[i]);
// }

// let emptyArr = [];

// let arr = [1, 2, 3, 4, 5];

// for (let i in arr) {

//   if (arr[i] === 1) {
//     emptyArr = arr[i];
//     console.log(emptyArr);
//   }
// }

let records = [
  { useremail: "lakshmanKumar@gmail.com", pwd: 12345, name: "LakshmanKumar" },
  { useremail: "ramkumar@gmail.com", pwd: 54321, name: "RamKumar" },
  { useremail: "teja@gmail.com", pwd: 989898, name: "TejaKumar" },
]

let newObj;

let obj = {
  useremail: "lakshmankumar@gmail.com",
  pwd: 12345
};


// for(let i = 0; i < records.length; i++){

//   console.log(records[i].useremail);
// }

 

  for(let i = 0; i < records.length; i++){

    for(let list in obj){

      if(obj[list] === records[i].useremail){

        console.log(true);
      }
      //console.log(newObj);
      console.log(records[i].useremail);
    }
  }





