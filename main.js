// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.getElementById('modal');
function hideError() {
  errorMessage.classList.add('hidden');
}
hideError();

const heartArray = Array.from(document.getElementsByClassName('like-glyph'))

function likeButtons(heartArray) {
  heartArray.forEach(heart => {
    heart.addEventListener('click', likeClick)
  })
}
likeButtons(heartArray)

function likeClick(event) {
  mimicServerCall()
  .then(response => {
    // event.target.classList.add('activated-heart');
    heartStatus(event)
  })
  .catch(response => {
    errorMessage.innerText = response;
    errorMessage.classList.remove('hidden');
    setTimeout(hideError, 3000)
  })
}

function heartStatus(event) {
  const heart = event.target.innerText;
  const activeClass = event.target.classList;
  if (heart == EMPTY_HEART) {
    event.target.innerHTML = '';
    event.target.innerText = FULL_HEART;
    activeClass.add('activated-heart');
  } else {
    event.target.innerHTML = '';
    event.target.innerText = EMPTY_HEART;
    activeClass.remove('activated-heart')}
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
