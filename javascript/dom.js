// export default function hello() {
//   return (
//     <div>
//       <h1 id="greeting">Welcome!</h1>
//       <button id="changeBtn">Change Greeting</button>
//     </div>
//   );
// }

// const heading = document.getElementById("gretting");
// console.log(h);
// const button = document.getElementById("changeBtn");

// button.addEventListener("click", () => {
//   heading.textContent = "Hello, Sasmita!";
// });

function hii() {
  return (
    <div>
      <p id="status">Status: Offline</p>
      <button id="toggleBtn">Go Online</button>
    </div>
  );
}

const p = document.getElementById("status");
console.log(p);
const b = document.getElementById("toggleBtn");

b.addEventListener("click", () => {
  if (p.textContent === "Status: Offline") {
    p.textContent = "Status: Online";
    b.textContent = "Go Offline";
  } else {
    p.textContent = "Status: Offline";
    b.textContent = "Go Online";
  }
});
hii();
