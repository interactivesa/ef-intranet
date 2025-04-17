// sidenav.js
const collapseBtn = document.getElementById("collapseBtn");
const sidenav = document.getElementById("sidenav");

collapseBtn.addEventListener("click", () => {
  sidenav.classList.toggle("collapsed");
  collapseBtn.querySelector(".toggle-icon").classList.toggle("rotate");
});

// darkmode.js
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("modeToggle");
  const topBar = document.getElementById("topBar");

  toggle.addEventListener("click", () => {
    topBar.classList.toggle("light-mode");
  });
});
// carousel slider swiper
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    rtl: true,
  });

  // Handle video autoplay
  swiper.on("slideChange", () => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const video = currentSlide.querySelector("video");
    if (video) {
      video.play().catch(() => {});
    }
  });
});
// tabs.js & swiper.js
document.addEventListener("DOMContentLoaded", function () {
  // تهيئة Swiper
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // إدارة التبويبات
  const tabs = document.querySelectorAll(".tab");
  const slides = document.querySelectorAll(".swiper-slide");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // إزالة النشاط من جميع التبويبات
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // إخفاء جميع الشرائح
      slides.forEach((slide) => {
        slide.classList.remove("active");
        slide.style.display = "none";
      });

      // عرض الشريحة المحددة
      const targetTab = this.dataset.tab;
      const activeSlides = document.querySelectorAll(
        `.swiper-slide[data-tab="${targetTab}"]`
      );

      activeSlides.forEach((slide) => {
        slide.classList.add("active");
        slide.style.display = "block";
      });

      // تحديث Swiper
      swiper.update();
      swiper.slideTo(0);
    });
  });
});
// onboarding.js
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".onboarding-popup");
  const closeBtn = document.querySelector(".close-btn");
  const trigger = document.getElementById("onboardingTrigger");
  const steps = document.querySelectorAll(".step");
  const contentSteps = document.querySelectorAll(".content-step");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const subtitle = document.querySelector(".popup-subtitle");
  let currentStep = 1;

  // Open popup
  trigger.addEventListener("click", () => {
    popup.style.display = "block";
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Update all elements
  function updateSteps() {
    // Update steps
    steps.forEach((step, index) => {
      const isCompleted = index < currentStep - 1;
      const isActive = index === currentStep - 1;

      step.classList.toggle("completed", isCompleted);
      step.classList.toggle("active", isActive);

      // Update connecting lines
      if (index > 0) {
        const prevLine = step.previousElementSibling;
        if (prevLine.classList.contains("step-line")) {
          prevLine.classList.toggle("active-line", index < currentStep);
        }
      }
    });

    // Update content
    contentSteps.forEach((step) => {
      step.classList.toggle(
        "active",
        parseInt(step.dataset.step) === currentStep
      );
    });

    // Update subtitle color
    subtitle.style.color = currentStep > 1 ? "#999" : "#000";

    // Update buttons
    const isFirstStep = currentStep === 1;
    prevBtn.classList.toggle("active", !isFirstStep);
    nextBtn.classList.toggle("active", !isFirstStep);
  }

  // Next step
  nextBtn.addEventListener("click", () => {
    if (currentStep < 5) {
      currentStep++;
      updateSteps();
    }
  });

  // Previous step
  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateSteps();
    }
  });

  // Initial setup
  updateSteps();
});

// suggestion buttons & proplems
document.querySelector(".complaint-btn").addEventListener("click", () => {
  document.querySelector(".complaint-popup").style.display = "block";
});

document
  .querySelector(".complaint-popup .close-btn")
  .addEventListener("click", () => {
    document.querySelector(".complaint-popup").style.display = "none";
  });

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("complaint-popup")) {
    document.querySelector(".complaint-popup").style.display = "none";
  }
});

// meeting section
document.addEventListener("DOMContentLoaded", function () {
  const dayCards = document.querySelectorAll(".day-card");
  const meetingItems = document.querySelectorAll(".meeting-item");
  const selectedDate = document.querySelector(".selected-date");

  dayCards.forEach((card) => {
    card.addEventListener("click", function () {
      // إزالة النشاط من جميع الأيام
      dayCards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");

      // تحديث التاريخ المعروض
      selectedDate.textContent = this.dataset.date;

      // إخفاء جميع الاجتماعات
      meetingItems.forEach((item) => item.classList.remove("active"));

      // عرض الاجتماعات الخاصة باليوم المحدد
      const targetDay = this.dataset.day;
      document
        .querySelectorAll(`.meeting-item[data-day="${targetDay}"]`)
        .forEach((item) => {
          item.classList.add("active");
        });
    });
  });
});
// rating-star.js
document.querySelectorAll(".rating-star").forEach((star) => {
  star.addEventListener("click", function () {
    const isActive = this.dataset.rating === "true";
    this.dataset.rating = !isActive;

    // إذا كنت تريد تغيير شكل النجمة عند التفعيل
    this.textContent = isActive ? "☆" : "★";
  });
});
// اشعار تقدير
// JavaScript
document
  .getElementById("sendAppreciation")
  .addEventListener("click", function () {
    document.getElementById("appreciationModal").style.display = "flex";
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("appreciationModal").style.display = "none";
});

// إغلاق النافذة عند النقر خارجها
window.onclick = function (event) {
  const modal = document.getElementById("appreciationModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// إغلاق النافذة بالزر Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("appreciationModal").style.display = "none";
  }
});

// معالجة إرسال النموذج
document
  .querySelector(".appreciation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("تم إرسال إشعار التقدير بنجاح!");
    document.getElementById("appreciationModal").style.display = "none";
    this.reset();
  });

//appreciation-modal.js
document.querySelectorAll(".quick-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const message = this.textContent.trim();
    const textarea = document.querySelector(".message-input");
    textarea.value = message;
    this.classList.add("active");

    // Remove active class from other buttons
    document.querySelectorAll(".quick-btn").forEach((otherBtn) => {
      if (otherBtn !== this) otherBtn.classList.remove("active");
    });
  });
});

document.querySelectorAll(".notification-tabs .tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const tabName = this.dataset.tab;

    // Remove active class from all tabs and content
    document.querySelectorAll(".tab, .tab-content").forEach((el) => {
      el.classList.remove("active");
    });

    // Add active class to clicked tab and corresponding content
    this.classList.add("active");
    document
      .querySelector(`.tab-content[data-tab="${tabName}"]`)
      .classList.add("active");
  });
});

document.querySelector(".send-btn").addEventListener("click", function () {
  alert("تم إرسال الإشعار بنجاح!");
  document.querySelector(".message-input").value = "";
  document
    .querySelectorAll(".quick-btn")
    .forEach((btn) => btn.classList.remove("active"));
});
