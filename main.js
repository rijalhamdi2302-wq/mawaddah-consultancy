/* ═══════════════════════════════════════════════════
   MAWADDAH CONSULTANCY — MAIN.JS
═══════════════════════════════════════════════════ */

// ── MOBILE NAV ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── STICKY NAV STYLE ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ── SCROLL REVEAL ──
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}

// Add reveal class to key elements
window.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.faraid-card, .service-card, .cred-item, .why-item, .trust-item, .lawyer-card, .why-us, .faraid-shares, .about-text, .contact-form-card, .contact-info-card'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ── WHATSAPP FORM ──
function sendWhatsApp() {
  const name    = document.getElementById('f-name').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const service = document.getElementById('f-service').value;
  const msg     = document.getElementById('f-msg').value.trim();
  const time    = document.getElementById('f-time').value;

  // Basic validation
  if (!name) {
    alert('Sila masukkan nama penuh anda.');
    document.getElementById('f-name').focus();
    return;
  }
  if (!phone) {
    alert('Sila masukkan nombor telefon anda.');
    document.getElementById('f-phone').focus();
    return;
  }
  if (!service) {
    alert('Sila pilih perkhidmatan yang diperlukan.');
    document.getElementById('f-service').focus();
    return;
  }
  if (!msg) {
    alert('Sila masukkan penerangan kes atau soalan anda.');
    document.getElementById('f-msg').focus();
    return;
  }

  // Build WhatsApp message
  const waNumber = '01110544175'; // 011-1054 4175

  const text = [
    '🌙 *Assalamualaikum, Mawaddah Consultancy*',
    '',
    'Saya ingin memohon perundingan. Berikut adalah maklumat saya:',
    '',
    `👤 *Nama:* ${name}`,
    `📱 *No. Telefon:* ${phone}`,
    `⚖️ *Perkhidmatan:* ${service}`,
    time ? `🕐 *Masa Terbaik Dihubungi:* ${time}` : '',
    '',
    `📋 *Penerangan Kes / Soalan:*`,
    msg,
    '',
    '_Terima kasih. Saya menunggu maklum balas daripada pihak tuan/puan._'
  ].filter(line => line !== null && line !== undefined).join('\n');

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// ── SMOOTH ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--gold)';
    }
  });
});
