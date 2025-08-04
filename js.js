onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Menambahkan musik
  const audio = new Audio('bungaa.mp3'); // Pastikan path file musik sudah benar
  audio.loop = true;

  // Mencoba memutar musik secara otomatis
  // Catatan: Browser modern mungkin memblokir autoplay jika tidak ada interaksi pengguna.
  // Jika diblokir, musik akan diputar setelah klik pertama pada halaman.
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("Autoplay diblokir. Menunggu interaksi pengguna.");
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  }
};
const lines = [
    { text: "HAI IMUTT", delay: 700 },
    { text: "Best Part nih", delay: 700 },
    { text: "Cihuyyyyy", delay: 700 },
    { text: "Ga semua bikin sendiri si", delay: 700 },
    { text: "Tapi yaudah lah yaa", delay: 700 },
    { text: "Yang mau coba juga bisa", delay: 700 },
    { text: '<span class="highlight"> You dont know babe </span>', delay: 2500, speed: 20},
    { text: "When you hold me", delay: 800, speed: 20 },
    { text: "cihuy mas gantenk", delay: 600 },
    { text: "It's the sweetest thing", delay: 2500 },
    { text: "And it don't change", delay: 2000 },
    { text: "If I had it my way", delay: 1500 },
    { text: "You would know that you are", delay: 3000 },
    { text: "klo gua tambahin lirik lagu, jadi ga pas", delay: 200, speed: 5 },
    { text: "delay nya kelamaan banget", delay: 100, speed: 5 },
    { text: "menyebalkan bet", delay: 800 },
    { text: "revisi sampe mabok, lier tau", delay: 2000 },
    { text: "super duper lierrrrr", delay: 600 },
    { text: "by the way", delay: 700, speed: 40 },
    { text: "how was your day?", delay: 700, speed: 40 },
    { text: "I hope you're doing well", delay: 700, speed: 40 },
    { text: "I just want to say", delay: 700, speed: 40 },
    { text: "You are the best.", delay: 700, speed: 40 },
    { text: "If life is a movie", delay: 700 },
    { text: "You're the best part ❤︎", delay: 3000 },
    { text: "Good luck imup ꒰ᐢ. ̫ .ᐢ꒱", delay: 2000 }

  ];
  const typewriter = document.getElementById('typewriter');
  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      let currentLine = lines[lineIndex].text;
      // Jika ada tag HTML, langsung tampilkan per baris (tidak animasi per karakter)
      if (currentLine.includes('<span')) {
        typewriter.innerHTML = currentLine + '<span class="cursor"></span>';
        setTimeout(() => {
          typewriter.innerHTML = currentLine;
          lineIndex++;
          setTimeout(typeLine, lines[lineIndex - 1].delay);
        }, 700);
      } else {
        if (charIndex <= currentLine.length) {
          typewriter.innerHTML = currentLine.slice(0, charIndex) + '<span class="cursor"></span>';
          charIndex++;
          setTimeout(typeLine, 80);
        } else {
          typewriter.innerHTML = currentLine;
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, lines[lineIndex - 1].delay);
        }
      }
    }
  }
  typeLine();