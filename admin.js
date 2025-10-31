const admin = {
  email: "admin@tvnusantara45.id",
  password: "admin123"
};

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if (email === admin.email && pass === admin.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Email atau password salah!";
  }
}

const form = document.getElementById("newsForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const newArticle = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      thumbnail: document.getElementById("thumbnail").value,
      video: document.getElementById("video").value,
      body: document.getElementById("body").value,
      date: new Date().toLocaleString()
    };
    alert("Berita berhasil disimpan (simulasi lokal).");
  });
}
