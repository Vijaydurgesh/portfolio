/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Web Designer","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

function downloadFile() {
  const link = document.createElement("a");
  link.href = "S_VIJAY_DURGESH resume.pdf"; // Replace with the file's URL or path
  link.download = "Seelamanthula_vijaya_durgesh.pdf"; // Replace with the desired download filename
  link.click();
}

window.addEventListener('scroll', scrollActive)


// Initialize EmailJS with your user ID
emailjs.init("w4VpWF0nUtjh4TZy-"); // Replace with your EmailJS User ID

// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const mail_id = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate input fields
    if (name === "" || mail_id === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_qfc8ln9", "template_y6c6mhu", {
        name: name,        // Will match {{name}} in the template
        mail_id: mail_id,  // Will match {{mail_id}} in the template
        message: message   // Will match {{message}} in the template
    }).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully!");
            document.getElementById('contactForm').reset();  // Reset the form fields
        },
        function (error) {
            console.error("FAILED...", error);
            alert("Failed to send email. Please try again.");
        }
    );
});
