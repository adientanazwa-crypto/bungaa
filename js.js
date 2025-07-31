onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Menambahkan musik
  const audio = new Audio('bunga.mp3'); // Pastikan path file musik sudah benar
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