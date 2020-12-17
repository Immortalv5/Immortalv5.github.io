function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = function() {
  var animeRight = document.querySelectorAll('div#anime-right');
  var animeLeft = document.querySelectorAll('div#anime-left');
  for (var i = 0; i < animeLeft.length; i++) {
    animeLeft[i].setAttribute('class', 'down geetha-left card h5');
    animeLeft[i].innerHTML = "<div class = 'line-1 anim-typewriter'>" + animeLeft[i].getAttribute('data') + "</div>";
  }
  for (var i = 0; i < animeRight.length; i++) {
    animeRight[i].setAttribute('class', 'down geetha-right card h5');
    animeRight[i].innerHTML = "<div class = 'line-1 anim-typewriter'>" + animeRight[i].getAttribute('data') + "</div>";
  }
}

/* Open when someone clicks on the span element */
async function TimelineOpen() {
  document.getElementById('Timeline').style.left = 0;
  document.getElementById('innerTime').style.display = 'none';
  document.getElementById("Timeline").style.width = "100%";
  await sleep(360);
  document.getElementById('innerTime').style.display = 'inline';
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function TimelineClose() {
  document.getElementById('innerTime').style.display = 'none';
  document.getElementById("Timeline").style.width = "0%";
}

async function SkillsOpen() {
  document.getElementById('Skills').style.right = 0;
  document.getElementById('innerSkills').style.display = 'none';
  document.getElementById("Skills").style.width = "100%";
  await sleep(360);
  document.getElementById('innerSkills').style.display = 'inline';
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function SkillsClose() {
  document.getElementById('innerSkills').style.display = 'none';
  document.getElementById("Skills").style.width = "0%";
}
