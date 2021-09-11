function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

document.getElementById('onav').addEventListener('click', openNav(), false);
document.getElementById('cbut').addEventListener('click', closeNav(), true);

function grab(e) {
  return document.getElementById(e);
}

const portfolioCards = [
  {
    key: 'c1',
    image: 'SnapshotPortfoliodesk.png',
    name: 'Tonic',
    exp: ['CANOPY', 'Back End Dev', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Setup-and-mobile-version-skeleton/',
      'https://github.com/Dadadon/Setup-and-mobile-version-skeleton',
    ],
  },
  {
    key: 'c2',
    image: 'SnapshotPortfolio2.png',
    name: 'Multi-Post Stories',
    exp: ['FACEBOOK', 'Ful Stack Dev', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Setup-and-mobile-version-skeleton/',
      'https://github.com/Dadadon/Setup-and-mobile-version-skeleton',
    ],
  },
  {
    key: 'c3',
    image: 'SnapshotPortfolio3.png',
    name: 'Facebook 360',
    exp: ['FACEBOOK', 'Ful Stack Dev', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Setup-and-mobile-version-skeleton/',
      'https://github.com/Dadadon/Setup-and-mobile-version-skeleton',
    ],
  },
  {
    key: 'c4',
    image: 'SnapshotPortfolio4.png',
    name: 'Uber Navigation',
    exp: ['UBER', 'Lead Developer', '2018'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Setup-and-mobile-version-skeleton/',
      'https://github.com/Dadadon/Setup-and-mobile-version-skeleton',
    ],
  },
];

function popup(position) {
  const el = portfolioCards[position];

  const pop = document.querySelector('.bg-modal');
  pop.style.display = 'block';

  const firstCard = document.querySelector('.modal-image');
  firstCard.src = `${el.image}`;

  const liveb = document.querySelector('.live');
  liveb.href = `${el.links[0]}`;

  const sourceb = document.querySelector('.source');
  sourceb.href = `${el.links[1]}`;

  document.querySelector('.modal-head').innerText = el.name;

  const btnContiner = document.getElementById('lan');
  btnContiner.innerHTML = '';
  const btnContiner2 = document.getElementById('expd');
  btnContiner2.innerHTML = '';

  const paragraph = document.querySelector('.p-modal');
  paragraph.textContent = `${el.description}`;

  el.technologies.forEach((btn) => {
    const liBtn = document.createElement('li');
    liBtn.className = 'p-css';
    liBtn.innerText = btn;
    btnContiner.appendChild(liBtn);
  });
  el.exp.forEach((btn) => {
    const liBtn2 = document.createElement('li');
    liBtn2.className = 'canopy';
    liBtn2.innerText = btn;
    btnContiner2.appendChild(liBtn2);
  });

  document.querySelector('.p-modal').innerText = el.description;

  const popupCloseButton = document.querySelector('.close');
  popupCloseButton.addEventListener('click', () => {
    const pop = document.querySelector('.bg-modal');
    pop.style.display = 'none';
  });
}

portfolioCards.forEach((el, i) => {
  let languages = '';
  el.technologies.forEach((lang2) => {
    languages += `<li class='p-css'>${lang2}</li>`;
  });

  let experience = '';
  el.exp.forEach((lang2) => {
    experience += `<li class='canopy'>${lang2}</li>`;
  });

  const template = document.createElement('template');

  const btn = document.createElement('button');
  btn.className = 'p-button';
  btn.innerText = el.button;
  btn.addEventListener('click', () => {
    popup(i);
  });

  template.innerHTML = `<li class='card1'>
  <div class='p-layout' id='play'>
    <h1 class='portfolio-head'>${el.name}</h1>
    <h1 class='portfolio-head2d'>${el.name}</h1>
    <ul class='frame'>${experience}</ul>
    <p class='p-text'>${el.description}</p>
    <p class='p-textd'>${el.description}</p>
    <ul class='lang'>${languages}</ul>
    </div>

  <img class='portfolio-image' src='${el.image}'></img>
  
  
  
</li>`;

  const far = template.content.firstChild;
  far.childNodes[1].appendChild(btn);
  grab('cards').appendChild(far);
});

function lowerCase(val) {
  return /[a-z]/.test(val) && !/[A-Z]/.test(val);
}

const errorMessage = document.querySelector('.error');
const form = document.forms['c-form'];
const mail = form.emailaddress;
const messageInput = form.comment;
const nameInput = form.fullname;
const formElts = form.querySelectorAll('input, textarea');

const addToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
    const objectForLocalStorage = {
      name: nameInput.value,
      email: mail.value,
      message: messageInput.value,
    };
    addToLocalStorage('formData', objectForLocalStorage);
  });
});

form.addEventListener('submit', (l) => {
  l.preventDefault();
  const email = mail.value;
  if (!lowerCase(email)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    form.submit();
  }
});
