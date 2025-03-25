/* General Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    transition: 0.3s ease;
}

/* Light Mode */
body {
    background-color: #f8f9fa;
    color: #333;
}

/* Dark Mode */
body.dark-mode {
    background-color: #222;
    color: #fff;
}

/* Header */
header {
    background: #0072ff;
    color: white;
    text-align: center;
    padding: 20px;
}

header h1 {
    margin-bottom: 10px;
}

input, select, button {
    padding: 10px;
    margin: 5px;
    width: 90%;
    max-width: 250px;
    border: none;
    border-radius: 5px;
    outline: none;
}

/* Dark Mode Button */
#darkModeToggle {
    cursor: pointer;
    background: #ffcc00;
    color: black;
    font-weight: bold;
}

/* Listings */
#listings {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

/* Listing Card */
.listing {
    background: white;
    width: 90%;
    max-width: 300px;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.listing:hover {
    transform: scale(1.05);
}

.listing h2 {
    margin-bottom: 5px;
    color: #0072ff;
}

.listing p {
    font-size: 14px;
    color: #555;
}

/* Dark Mode for Listings */
body.dark-mode .listing {
    background: #333;
    color: white;
    box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.1);
}

/* Links */
a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background: #0072ff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
}

a:hover {
    background: #005ecb;
}

/* Footer */
footer {
    background: #0072ff;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
}
