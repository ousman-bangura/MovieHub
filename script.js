  let isLogin = true;

function toggleAuthMode() {
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Sign Up";
  document.querySelector(".auth-box button").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("toggleAuth").innerHTML = isLogin
    ? `Don’t have an account? <span onclick="toggleAuthMode()">Sign up</span>`
    : `Already have an account? <span onclick="toggleAuthMode()">Login</span>`;
}

function handleAuth() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (isLogin) {
    if (!users[username] || users[username] !== password) {
      alert("Invalid login credentials!");
      return;
    }
    localStorage.setItem("loggedInUser", username);
    closeAuth();
  } else {
    if (users[username]) {
      alert("User already exists!");
      return;
    }
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now login.");
    toggleAuthMode();
  }
}

function closeAuth() {
  document.getElementById("authContainer").style.display = "none";
}

function checkLogin() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    document.getElementById("authContainer").style.display = "flex";
  } else {
    closeAuth();
  }
}

checkLogin();

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}


const movies = [
  {
    title: 'Action Movie',
    desc: 'Action • Missions',
    img: 'Images/action.png',
    video: 'Movies/Action Movie 2014 Full Movie English Hollywood.mp4'
  },
  {
    title: 'Black Panther: Wakanda Forever',
    desc: 'Power',
    img: 'Images/panther.png',
    video: 'Movies/Black.Panther.Wakanda.Forever.2022.mp4'
  },
  {
    title: 'Extraction 2',
    desc: 'Action',
    img: 'Images/extraction.png',
    video: 'Movies/Extraction.2023.mp4'
  },
  {
    title: 'Triple Threat',
    desc: 'Action',
    img: 'Images/triple.png',
    video: 'Movies/Triple-Threat_720p.mp4'
  },
  {
  title: 'The Beekeeper',
  desc: 'Action',
  img: 'Images/bee.png',
  video: 'Movies/The-Beekeeper_720p.mp4'
  },
  {
  title: 'John Wick',
  desc: 'Action',
  img: 'Images/john.png',
  video: 'Movies/John.Wick.Chapter.3.-.Parabellum.2019.mp4'
  },
  {
    title: 'Bullet Train',
    desc: 'Action',
    img: 'Images/train.png',
    video: 'Movies/Bullet.Train.2022.mp4'
  },
  {
    title: 'Red Notice',
    desc: 'Action',
    img: 'Images/red.png',
    video: 'Movies/Red.Notice.2021.mp4'
  },
  {
    title: 'Killer Bean',
    desc: 'Action',
    img: 'Images/bean.png',
    video: 'Movies/KillerBeanForever.mp4'
  },
  {
    title: 'The Legend of Fong Sai Yuk',
    desc: 'Action',
    img: 'Images/yuk.png',
    video: 'Movies/The Legend of Fong Sai Yuk _ JET LI _ FULL MOVIE HD ENGLISH.mp4'
  },
  {
    title: 'Jetli Movie',
    desc: 'Action',
    img: 'Images/jet.png',
    video: 'Movies/Jet Li Movie 2014.mp4'
  },
  {
    title: 'Detective Chan',
    desc: 'Action',
    img: 'Images/chan.png',
    video: 'Movies/DETECTIVE CHAN - Jackie Chan.mp4'
  },
  {
    title: 'Master Wing Chun',
    desc: 'Action',
    img: 'Images/chun.png',
    video: 'Movies/Donnie Yen Is MASTER WING CHUN.mp4'
  },
  {
    title: 'Five Deadly Venoms',
    desc: 'Action',
    img: 'Images/venoms.png',
    video: 'Movies/FIVE DEADLY VENOMS.mp4'
  },
  {
    title: 'Jackie Chan - The Magic man',
    desc: 'Action',
    img: 'Images/jackiemagic.png',
    video: 'Movies/Jackie Chan.mp4'
  },
  {
    title: 'Kung Fu Dunk',
    desc: 'Action',
    img: 'Images/dunk.png',
    video: 'Movies/Kung Fu Dunk.mp4'
  },
  {
    title: 'Transporter',
    desc: 'Action',
    img: 'Images/transporter.png',
    video: 'Movies/Transporter.mp4'
  },
  {
    title: 'The Chronicles of Kings',
    desc: 'Action . Adventure',
    img: 'Images/chronicle.png',
    video: 'Movies/THE CHRONICLE OF KINGS .mp4'
  }

];

const container = document.getElementById('movies');
const search = document.getElementById('search');

function render(list) {
  container.innerHTML = '';
  list.forEach(m => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `<img src="${m.img}"><p>${m.title}</p>`;
    div.onclick = () => openModal(m);
    container.appendChild(div);
  });
}

function openModal(movie) {
  document.getElementById('title').innerText = movie.title;
  document.getElementById('desc').innerText = movie.desc;
  const player = document.getElementById('player');
  player.src = movie.video;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  const player = document.getElementById('player');
  player.pause();
  player.src = '';
  document.getElementById('modal').style.display = 'none';
}

function addToList(movie) {
  alert(movie.title + " added to your list!");
}


search.addEventListener('input', () => {
  const v = search.value.toLowerCase();
  render(movies.filter(m => m.title.toLowerCase().includes(v)));
});

render(movies);
