// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
  });
}

// Close mobile nav on link click
document.querySelectorAll('.main-nav a').forEach(a=>{
  a.addEventListener('click', ()=>{
    if(mainNav.classList.contains('open')) mainNav.classList.remove('open');
  });
});

// Lazy-load YouTube embed from thumbnail; fallback to opening YouTube if embedding blocked
document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', function (e) {
    e.preventDefault();
    const vid = this.dataset.vid;
    const watchUrl = this.href;
    const wrap = this.closest('.video-wrap');

    // create iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${vid}?rel=0&modestbranding=1&autoplay=1`;
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.position = 'absolute';
    iframe.style.left = 0;
    iframe.style.top = 0;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Replace thumbnail with iframe
    wrap.innerHTML = '';
    wrap.appendChild(iframe);

    // Fallback: if iframe doesn't load within 3s (embedding blocked), open on YouTube
    let loaded = false;
    iframe.addEventListener('load', ()=>{ loaded = true; });
    setTimeout(()=>{
      if(!loaded) window.open(watchUrl, '_blank');
    }, 3000);
  });
});
