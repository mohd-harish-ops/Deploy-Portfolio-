// Footer me current year
document.getElementById("year").textContent = new Date().getFullYear();

// Hero me roles ek ek karke badlte hain (apne roles yahan badal sakte ho)
const roles = ["Cloud Security Engineer", "Web Developer", "Linux Learner"];
const el = document.getElementById("typed");
let i = 0;
setInterval(() => {
  i = (i + 1) % roles.length;
  el.textContent = roles[i];
}, 2500);
