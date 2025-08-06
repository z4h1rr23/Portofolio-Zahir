// Animasi ketik otomatis pada judul
const title = document.querySelector('h1');
if (title) {
  const text = title.textContent;
  title.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }
  typeWriter();
}

// Efek highlight section saat discroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      sec.style.boxShadow = "0 4px 24px 0 #ffd70055";
    } else {
      sec.style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
    }
  });
});