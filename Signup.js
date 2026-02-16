// This file ONLY handles Registration
const registerBtn = document.getElementById('registerBtn');
const msg = document.getElementById('msg');

registerBtn.addEventListener('click', async () => {
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const role = document.getElementById('role').value;

    msg.innerText = "Registering...";

    // Use our DB connection from db.js
    // We send extra info (Metadata) that Supabase can store
    const { data, error } = await DB.sb.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                full_name: fullName,
                phone_number: phone,
                address: address,
                role: role
            }
        }
    });

    if (error) {
        msg.innerText = "Error: " + error.message;
        msg.style.color = "red";
    } else {
        msg.innerText = "Success! Account created as " + role + ". Please check your email.";
        msg.style.color = "green";
    }
});