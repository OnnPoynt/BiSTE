// const text = document.querySelector('.text');
// text.innerHTML = text.textContent.replace(/\s/g,"<span>$&</span>");

// let h1 = document.querySelector(".text"); // Get reference to the h1
// let text = h1.textContent.split("");                 // Get the text content into an array

// let result = ""; // Will hold output

// // Loop over the array
// text.forEach(function(char){
//   // Append a new span only if the current char is not a space
//   result += (char.trim() === "") ? "" : "<span>" + char + "</span>";
// });

// h1.innerHTML = result;  // Reset the h1's content

// console.log(h1.outerHTML); // Test

// const element = document.querySelector('span#text');
// for(let i = 0; i<element.length; i++){
//     element[i].style.transform = "rotate("+i+"deg)"
// }

// const text = document.querySelector('.text p');
// text.innerHTML = text.innerText.split("").map(
//     (char, i)=>
//     '<span style = "transform:rotate(${i*5}deg)">${char}'</span>'
// ).join("")

// const text = document.querySelector('.text p');
// text.innerHTML = text.innerHTML.split("").map (
//     (char, i) =>
//     `<span style="transform:rotate(${i * 6.4}deg)">${char}</span>`
// ).join("")
