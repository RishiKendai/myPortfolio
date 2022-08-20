// Selectors
const joke_section = document.querySelector('.joke-section');
const restJoke = document.querySelector('.nextJoke');
const joke = document.querySelector('.joke');
const joke_cooking = document.querySelector('.joke-cooking');
// Event Listeners
document.addEventListener('DOMContentLoaded', fetchAPI);
restJoke.addEventListener('click', resetJokeAPI);

// Functions
function resetJokeAPI() {
  joke.innerHTML = '';
  joke.style.background = 'transparent';
  fetchAPI();
}
async function fetchAPI() {
  const res = await (
    await fetch(
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,sexist,explicit'
    )
  ).json();
  res && (joke.style.background = 'var(--primary)');

  if (res.type === 'single') {
    let h4 = document.createElement('h4');
    h4.textContent = `${res.joke}😜`;
    joke.appendChild(h4);
  } else {
    const setup = document.createElement('span');
    setup.className = 'setup';
    setup.textContent = res.setup;
    const delivery = document.createElement('div');
    delivery.className = 'delivery';
    await setTimeout(() => {
      delivery.innerHTML = `<p>${res.delivery}</P><span>😜</span>`;
    }, 3000);
    joke.appendChild(setup);
    setup.append(delivery);
  }
}
