document.addEventListener('DOMContentLoaded', () => {
    // Reservation Form Validation
    const reserveBtn = document.getElementById('sub');
    if (reserveBtn) {
        reserveBtn.addEventListener('click', (e) => {
            const name = document.getElementById('nameOfReserver').value;
            const date = document.getElementById('dateOfReserving').value;
            const time = document.getElementById('time-of-reserving').value;
            const email = document.getElementById('email-of-reserver').value;
            const phone = document.getElementById('phone-of-reserver').value;

            if (!name || !date || !time || !email || !phone) {
                alert('Please fill in all fields for your reservation.');
                return;
            }

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert(`Thank you, ${name}! Your reservation for ${date} at ${time} has been received.`);
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            alert(`Message sent! Thank you for contacting us, ${name}. We will get back to you soon.`);
            contactForm.reset();
        });
    }
});
