const productDupes = {
    "haus labs concealer": [
        { name: "Maybelline Fit Me Concealer", brand: "Maybelline", price: "$7.99" },
        { name: "L'Oréal Paris Infallible Full Wear Concealer", brand: "L'Oréal", price: "$11.99" }
    ],
    "fenty beauty pro filt'r foundation": [
        { name: "Maybelline Fit Me Matte + Poreless Foundation", brand: "Maybelline", price: "$7.99" },
        { name: "L'Oréal Paris Infallible Fresh Wear Foundation", brand: "L'Oréal", price: "$14.99" }
    ],
    "too faced better than sex mascara": [
        { name: "L'Oréal Voluminous Lash Paradise", brand: "L'Oréal", price: "$9.99" },
        { name: "Maybelline Lash Sensational Mascara", brand: "Maybelline", price: "$7.99" }
    ],
    "rare beauty soft pinch liquid blush": [
        { name: "Milani Cheek Kiss Liquid Blush", brand: "Milani", price: "$10.00" },
        { name: "Flower Beauty Blush Bomb Color Drops", brand: "Flower Beauty", price: "$9.99" }
    ],
    "dior backstage glow face palette": [
        { name: "e.l.f. Bite-Size Face Duo", brand: "e.l.f.", price: "$3.00" },
        { name: "Milani Rose Glow Palette", brand: "Milani", price: "$14.99" }
    ],
    "glossier boy brow": [
        { name: "NYX Tinted Brow Mascara", brand: "NYX", price: "$7.00" },
        { name: "e.l.f. Wow Brow Gel", brand: "e.l.f.", price: "$4.00" }
    ],
    "laura mercier translucent setting powder": [
        { name: "Maybelline Fit Me Loose Finishing Powder", brand: "Maybelline", price: "$8.99" },
        { name: "Coty Airspun Loose Face Powder", brand: "Coty", price: "$6.99" }
    ],
    "charlotte tilbury hollywood flawless filter": [
        { name: "e.l.f. Halo Glow Liquid Filter", brand: "e.l.f.", price: "$14.00" },
        { name: "L'Oréal True Match Lumi Glotion", brand: "L'Oréal", price: "$12.99" }
    ]
};

// Function to search for dupes (case-insensitive and allows partial matches)
function findDupes(productName) {
    const resultsDiv = document.getElementById('dupeResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    const productNameLower = productName.toLowerCase().trim();
    let found = false;
    const ul = document.createElement('ul');

    for (const key in productDupes) {
        if (key.includes(productNameLower)) {  // Allow partial matches
            const dupes = productDupes[key];
            found = true;

            dupes.forEach(dupe => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${dupe.name}</strong> by ${dupe.brand} - ${dupe.price}`;
                ul.appendChild(li);
            });
        }
    }

    if (found) {
        resultsDiv.appendChild(ul);
    } else {
        resultsDiv.innerHTML = '<p>Sorry, no dupes were found for this product.</p>';
    }
}

// Handle form submission
document.getElementById('dupeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    findDupes(productName);
});
