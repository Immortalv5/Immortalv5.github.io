function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
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
