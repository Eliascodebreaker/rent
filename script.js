document.addEventListener('DOMContentLoaded', () => {
    const messageField = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const maxChars = 300;

    // Live character counter for the message textarea
    messageField.addEventListener('input', () => {
        const currentChars = messageField.value.length;
        charCount.textContent = `${currentChars} / ${maxChars} characters`;
        charCount.style.color = currentChars > maxChars ? 'red' : 'green';

        // Disable the submit button if character limit exceeded
        document.querySelector('button[type="submit"]').disabled = currentChars > maxChars;
    });

    // Animating input fields on focus
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 10px rgba(0, 240, 212, 0.8)';
        });

        input.addEventListener('blur', () => {
            input.style.boxShadow = 'none';
        });
    });

    // Dynamic update of contact details (just for fun)
    const contactDetails = {
        email: "newemail@ivyparkdwell.com",
        phone: "+321 654 0987"
    };

    setTimeout(() => {
        document.getElementById('email').textContent = contactDetails.email;
        document.getElementById('phone').textContent = contactDetails.phone;
    }, 3000); // Simulates data update after 3 seconds
});
