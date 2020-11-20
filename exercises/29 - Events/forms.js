const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  // console.log(event);
  console.log("you've clicked it");
  const shouldChangePage = confirm(
    'This page could be malicious! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  // console.log(event);
  event.preventDefault();
  const name = event.currentTarget.name.value;
  /* console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked); */
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
