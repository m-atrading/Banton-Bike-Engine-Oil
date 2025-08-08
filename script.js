// এই স্ক্রিপ্টটি মোবাইল নেভিগেশন টগল এবং প্রোডাক্ট ডিটেইলস টগল ফাংশনালিটি হ্যান্ডেল করে।

/**
 * মোবাইল ডিভাইসের জন্য নেভিগেশন মেনু টগল করে।
 * যখন navbar-toggle-btn এ ক্লিক করা হয়, তখন 'navbar' এলিমেন্টে 'active' ক্লাস যোগ বা অপসারণ করে।
 * 'active' ক্লাসটি CSS দ্বারা মেনু প্রদর্শন বা লুকানোর জন্য ব্যবহৃত হয়।
 */
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('active');
    }
}

/**
 * DOM কন্টেন্ট লোড হওয়ার পর ইভেন্ট লিসেনার যোগ করে।
 * এটি নিশ্চিত করে যে স্ক্রিপ্টটি HTML এলিমেন্টগুলো উপলব্ধ হওয়ার পরেই কাজ করবে।
 */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.details-toggle-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const details = card.querySelector('.product-details');

      // অন্য সব প্রোডাক্টের details বন্ধ
      document.querySelectorAll('.product-details.open').forEach(openBox => {
        if (openBox !== details) {
          openBox.classList.remove('open');
          const otherBtn = openBox.closest('.product-card').querySelector('.details-toggle-btn');
          if (otherBtn) otherBtn.textContent = 'View Details';
        }
      });

      // শুধু এই কার্ডের details toggle হবে
      details.classList.toggle('open');
      button.textContent = details.classList.contains('open') ? 'Hide Details' : 'View Details';
    });
  });
});


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Optional: Auto slide every 3.5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3500);


