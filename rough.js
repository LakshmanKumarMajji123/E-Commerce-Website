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



for (let i = 0; i < records.length; i++) {

  for (let list in obj) {

    if (obj[list] === records[i].useremail) {

      console.log(true);
    }
    //console.log(newObj);
    console.log(records[i].useremail);
  }

}




let productsInfo = [
  {
    id: 1,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 15(128 GB) - Blue",
    Bought: "5K+ Bought in past month",
    price: "₹59,999",
    MRP: "79000",
    Discount: "(25% off)",
    freedelivery: "Freedelivery Wed,29 Jan",
    fastdelivery: "Or fastest delivery Tue,28 Jan"
  },

  {
    id: 2,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 15(128 GB) - Pink",
    Bought: "5K+ Bought in past month",
    price: "₹59,999",
    MRP: "69000",
    Discount: "(14% off)",
    freedelivery: "Freedelivery as soon as Sat,1 Feb, 9am - 5pm",
    fastdelivery: "No Service Availble"
  },

  {
    id: 3,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 13(128 GB) - RED",
    Bought: "1K+ Bought in past month",
    price: "₹43,499",
    MRP: "59,600",
    Discount: "(27% off)",
    freedelivery: "Freedelivery as soon as Thu,30Jan 9am - 5pm",
    fastdelivery: "Or fastest delivery Tomorrow,28 Jan"
  },

  {
    id: 4,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 15(256 GB) - Green",
    Bought: "5K+ Bought in past month",
    price: "₹69,999",
    MRP: "79,900",
    Discount: "(12% off)",
    freedelivery: "Free delivery as soon as Fri,31 Jan, 9am-pm",
    fastdelivery: "No Service Available"
  },

  {
    id: 5,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 16(128 GB) - 5G Mobile Phone with Camera Control",
    Bought: "5K+ Bought in past month",
    price: "₹74,900",
    MRP: "79,000",
    Discount: "(6% off)",
    freedelivery: "Freedelivery Wed,29 Jan",
    fastdelivery: "Or fastest delivery Tue,28 Jan"
  },

  {
    id: 6,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 15(128 GB) - 5G Mobile Phone with Camera Control Blue",
    Bought: "5K+ Bought in past month",
    price: "₹74,000",
    MRP: "79,000",
    Discount: "(6% off)",
    freedelivery: "Freedelivery Wed,29 Jan",
    fastdelivery: "Or fastest delivery Tue,28 Jan"
  }
];




let info = [

  {
    id: 4,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 15(256 GB) - Green",
    Bought: "5K+ Bought in past month",
    price: "69999",
    MRP: "79,900",
    Discount: "(12% off)",
    freedelivery: "Free delivery as soon as Fri,31 Jan, 9am-pm",
    fastdelivery: "No Service Available"
  },

  {
    id: 5,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 16(128 GB) - 5G Mobile Phone with Camera Control",
    Bought: "5K+ Bought in past month",
    price: "74900",
    MRP: "79,000",
    Discount: "(6% off)",
    freedelivery: "Freedelivery Wed,29 Jan",
    fastdelivery: "Or fastest delivery Tue,28 Jan"
  },

  {
    id: 6,
    Image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
    Title: "Apple iphone 15(128 GB) - 5G Mobile Phone with Camera Control Blue",
    Bought: "5K+ Bought in past month",
    price: "43000",
    MRP: "79,000",
    Discount: "(6% off)",
    freedelivery: "Freedelivery Wed,29 Jan",
    fastdelivery: "Or fastest delivery Tue,28 Jan"
  }
];


info.sort((a, b) => {

  return a.price - b.price;
});
console.log(info);


