// // build up to using fetch
// // promises r solution to devs not using callbacks properly

//fetch

// grab access to body element
const body = document.querySelector("body");

async function fetchPokemon() {
  //calling fetch-fetch built into web api
  //fetceh returns promise-takes 2 args, this one only needs locat
  // saving api response in constant
  //now made it async-
  //anywhere where resturs a promise, await it
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
  const data = await response.json(); // returns promise so has to await it
  //gettin it in dom tree
  const p = document.createElement("p");
  p.innerHTML = data.name
  body.appendChild(p);

  //const abilities=data.abilities[1].ability.name;
  //console.log(response);
}

fetchPokemon();

// // callback example for success/error handling
// function funcName(successCallback, errorCallback) {
//   // adjust num numbers to not equal 2, see in borwser, should say request/failed
//   let num = 1 + 1;
//   if (num === 2) {
//     successCallback("success");
//   } else {
//     errorCallback("failed");
//   }
// }

// // funcname takes 2 args, successCallback and errorCallback
// //both will console log the str
// // , separetes success from error
// funcName(
//   (str) => console.log(str),
//   (str) => console.log(str)
// );

//promise version of funcName

// // callback example for success/error handling
// function funcName(successCallback, errorCallback) {
//   // adjust num numbers to not equal 2, see in borwser, should say request/failed
//   let num = 1 + 1;
//   //return a debt that we will fulfill
//   //at firs, is unfilfilled promise
//   //once its res/rej, becomes fulfilled

//   //promise takes anon function-recieves 2 args resolve,rej
//   //or can use fetchand catch
//   return new Promise((resolve, reject) => {
//     if (num === 2) {
//       //
//       resolve("success");
//     } else {
//       reject("failed");
//     }
//   });
// }

// // first part adds successful
// funcName()
//   .then((response) => {
//     console.log(response);
//     console.log("more stuff");
//   })

//   .catch((error) => console.log(error));
