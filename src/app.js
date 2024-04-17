/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let img = document.getElementById("img");
  let pics = [
    "https://blog.futurefocusedlearning.net/hubfs/2019-WSB/Blog/dog-eating-homework.jpg",
    "https://th.bing.com/th/id/R.bec5e41e654e709c583ac89d48b43464?rik=MO2e0OjbGwI5%2bg&riu=http%3a%2f%2fwww.terrilwatts.com%2fwp-content%2fuploads%2f2013%2f03%2f9114953_m.jpg&ehk=r81DUj%2faIPxJaLJhGRBUO2OeSiwVXjBf8FtM5PIae2s%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.iUzgb41c8Srgf5i9ZKNejgHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.1O2EeZJJZWMbu_L8FoAu1wHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  ];
  let who = ["The dog", "My grandma", "The Mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomIdx = Math.floor(Math.random() * who.length);
  let whoR = who[randomIdx];
  let picsR = pics[randomIdx];
  let actionR = action[Math.floor(Math.random() * action.length)];
  let whatR = what[Math.floor(Math.random() * what.length)];
  let whenR = when[Math.floor(Math.random() * when.length)];
  img.src = picsR;

  document.getElementById("excuse").innerHTML =
    whoR + " " + actionR + " " + whatR + " " + whenR;
};
