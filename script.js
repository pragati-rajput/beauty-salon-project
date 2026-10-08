* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #fcf8f8;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background: linear-gradient(135deg, #e91e63, #f48fb1);
    color: white;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 28px;
    font-weight: 700;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 600;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 20px;
}

.hero h2 { font-size: 38px; margin-bottom: 10px; }
.hero p { font-size: 18px; margin-bottom: 20px; }

/* Services Section */
.services {
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

.services h2 {
    color: #d81b60;
    margin-bottom: 25px;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.service-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.service-card h3 { color: #e91e63; margin-bottom: 8px; }

/* Form Section */
.enquiry-section {
    background-color: #fff0f5;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
}

.form-container {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 450px;
}

.form-container h2 {
    text-align: center;
    color: #d81b60;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.btn-group {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.btn {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: white;
}

.btn-email { background-color: #e91e63; }
.btn-whatsapp { background-color: #25D366; }

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px;
}