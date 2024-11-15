// Initialize EmailJS with your user ID
(function () {
    emailjs.init('Abhishek Gandhi'); // Replace with your EmailJS user ID
})();

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button functionality
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 }, 500);
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["Data-Science", "AI/ML", "Python-Developer", "Web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Data-Science", "AI/ML", "Python-Developer", "Web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Handle form submission for sending email via EmailJS
    $('#contact-form').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        // Send email using EmailJS
        emailjs.send('service_fpu4wvr', 'template_rhp8bvs', formData)
            .then(function (response) {
                alert('Message sent successfully!');
                $('#contact-form')[0].reset(); // Reset form after submission
            }, function (error) {
                alert('Error sending message. Please try again.');
            });
    });
});
