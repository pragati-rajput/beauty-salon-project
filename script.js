const targetEmail = "globalwebworldservices@gmail.com";
const whatsappNumber = "917020236767";

// Function to fetch form input data and validate
function getFormData() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !service) {
        alert('Please fill in all required fields!');
        return null;
    }

    return { name, phone, service, message };
}

// Function 1: Send via Email (mailto URL)
function sendEmail() {
    const data = getFormData();
    if (!data) return;

    const subject = encodeURIComponent(`Beauty Salon Enquiry from ${data.name}`);
    const body = encodeURIComponent(
        `Name: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nMessage: ${data.message || 'N/A'}`
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
}

// Function 2: Send via WhatsApp Web / API
function sendWhatsApp() {
    const data = getFormData();
    if (!data) return;

    const text = encodeURIComponent(
        `*New Beauty Salon Enquiry*\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nMessage: ${data.message || 'N/A'}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
}
