// ── FAQ accordion toggle ─────────────────────────────────────────────────────

document.querySelectorAll('.faq-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var content = item.querySelector('.faq-content');
    var icon = item.querySelector('.faq-icon');
    var isOpen = !content.classList.contains('hidden');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(function (other) {
      if (other !== item) {
        other.querySelector('.faq-content').classList.add('hidden');
        other.querySelector('.faq-icon').textContent = '+';
        other.querySelector('.faq-icon').style.transform = '';
        other.querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle clicked item
    if (isOpen) {
      content.classList.add('hidden');
      icon.textContent = '+';
      icon.style.transform = '';
      btn.setAttribute('aria-expanded', 'false');
    } else {
      content.classList.remove('hidden');
      icon.textContent = '\u2212'; // minus sign
      icon.style.transform = '';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ── Smooth scroll for anchor links ──────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var href = link.getAttribute('href');
    if (href === '#') return; // skip placeholder links
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without jumping
      history.pushState(null, '', href);
    }
  });
});

// ── Nav shadow on scroll ────────────────────────────────────────────────────

var nav = document.getElementById('main-nav');

if (nav) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.classList.add('shadow-sm');
    } else {
      nav.classList.remove('shadow-sm');
    }
  }, { passive: true });
}
