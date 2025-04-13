// Logo Transition on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Upload Form Functionality
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];
    if (!file) {
        alert('Please upload an image!');
        return;
    }

    let imageUrl = URL.createObjectURL(file);
    
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Your Uploaded Outfit</h3><img src="${imageUrl}" alt="Uploaded outfit" style="max-width: 100%;">`;

    // Makeup Recommendations
    const makeupOptions = [
        {
            look: "a natural look with neutral tones",
            products: {
                foundation: "L'Oréal True Match",
                eyeshadow: "Urban Decay Naked Palette",
                lipstick: "MAC Velvet Teddy"
            }
        },
        {
            look: "a bold red lip with a classic winged liner",
            products: {
                foundation: "NARS Sheer Glow",
                eyeshadow: "Huda Beauty Rose Quartz Palette",
                lipstick: "Fenty Beauty Stunna Lip Paint (Uncensored)"
            }
        }
    ];

    const randomLook = makeupOptions[Math.floor(Math.random() * makeupOptions.length)];

    outputDiv.innerHTML += `
        <h4>Suggested Makeup Look</h4>
        <p>We recommend ${randomLook.look}.</p>
        <ul>
            <li>Foundation: ${randomLook.products.foundation}</li>
            <li>Eyeshadow: ${randomLook.products.eyeshadow}</li>
            <li>Lipstick: ${randomLook.products.lipstick}</li>
        </ul>
    `;
});
// Show the main content and hide cover page after clicking "Enter Site"
document.getElementById('enter-site').addEventListener('click', function() {
    document.getElementById('cover-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});
