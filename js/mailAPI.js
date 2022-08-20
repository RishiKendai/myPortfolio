// Selector
const username = document.querySelector('[name="username"]');
const mailID = document.querySelector('[name="mailID"]');
const content = document.querySelector('[name="message"]');
const sendBtn = document.querySelector('[name="send"]');
const alertBox = document.querySelector('.msg-box');
const alertMsg = document.querySelector('.msg-box h3');
const alertBtn = document.querySelector('.msg-box button');

// Event Listerner
sendBtn.addEventListener('click', (e) => validateForm(e));
alertBtn.addEventListener('click', clearAlertBox);

// Functions

function handleAlert(msg) {
  alertBox.classList.add('show');
  alertMsg.textContent = msg;
  // setTimeout(() => {
  //   clearAlertBox();
  // }, 4000);
}

function clearAlertBox() {
  alertMsg.textContent = '';
  alertBox.classList.remove('show');
}

function clearMail() {
  username.value = '';
  mailID.value = '';
  content.value = '';
  sendBtn.classList.remove('wait');
  sendBtn.textContent = 'Send';
}

function validateForm(e) {
  e.preventDefault();
  if (username.value.length < 3) return handleAlert('enter valid username');
  if (!/\S+@\S+\.\S+/.test(mailID.value))
    return handleAlert('enter valid mail id');
  if (content.value.length < 1) return handleAlert('enter message');
  sendBtn.textContent = 'sending...';
  sendBtn.classList.add('wait');
  sendMail();
}

function sendMail() {
  const params = {
    from_name: username.value,
    email_id: mailID.value,
    message: content.value,
  };
  emailjs.send('service_n27negh', 'template_a13p14j', params).then((res) => {
    handleAlert('Mail Sent Successfully');
    clearMail();
  });
}

(function () {
  emailjs.init('gE6VRGbs1RqMoVuH-');
})();
