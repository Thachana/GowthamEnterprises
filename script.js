/**
 * Gowtham Enterprises — script.js
 * Handles: sticky header, mobile menu, active nav link on scroll, section fade-in
 */

(function () {
  'use strict';

  /* ---------- Selectors ---------- */
  const header     = document.getElementById('header');
  const hamburger  = document.getElementById('hamburger');
  const nav        = document.getElementById('nav');
  const navLinks   = document.querySelectorAll('.nav__link');

  /* ---------- 1. Sticky header shadow on scroll ---------- */
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 2. Mobile hamburger menu ---------- */
  function openMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    nav.classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent scroll when menu open
  }

  function closeMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  /* Close mobile menu when a nav link is clicked */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  /* Close mobile menu when clicking outside it */
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  /* Close mobile menu on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* Close mobile menu if viewport widens past breakpoint */
  var mq = window.matchMedia('(min-width: 641px)');
  mq.addEventListener('change', function (e) {
    if (e.matches) {
      closeMenu();
    }
  });

  /* ---------- 3. Active nav link on scroll (Intersection Observer) ---------- */
  var sectionIds = ['home', 'services', 'about', 'why', 'contact'];
  var sections   = sectionIds.map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  var headerHeight = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--header-h')
  ) || 68;

  var observerOptions = {
    root: null,
    rootMargin: '-' + (headerHeight + 10) + 'px 0px -60% 0px',
    threshold: 0
  };

  var currentActive = null;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        setActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });

  function setActiveLink(sectionId) {
    if (currentActive === sectionId) return;
    currentActive = sectionId;
    navLinks.forEach(function (link) {
      var linkSection = link.getAttribute('data-section');
      if (linkSection === sectionId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* Fallback scroll-based update for browsers without IntersectionObserver */
  function updateActiveNavLink() {
    if (!('IntersectionObserver' in window)) {
      var scrollPos = window.scrollY + headerHeight + 20;
      var found = null;
      sections.forEach(function (section) {
        if (section.offsetTop <= scrollPos) {
          found = section.id;
        }
      });
      if (found) setActiveLink(found);
    }
  }

  /* ---------- 4. Smooth reveal animation for sections ---------- */
  if ('IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll(
      '.service-card, .why-card, .about__visual, .about__text'
    );

    // Set initial hidden state
    revealElements.forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '-40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- 5. Set home as active on load ---------- */
  setActiveLink('home');

  /* Run once on load to set scrolled state if page is loaded mid-scroll */
  onScroll();

})();
