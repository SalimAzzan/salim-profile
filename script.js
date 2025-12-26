document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // منع الإرسال الحقيقي
    alert("Thank you! Your message has been sent 😊");
    form.reset(); // تفريغ الحقول
  });
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.backgroundColor = "#005fa3";
  } else {
    header.style.backgroundColor = "#0077cc";
  }
});
// رسالة عند إرسال الفورم
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});