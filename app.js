/* -------------------- */
/* 1. Global Reset & Body Styling (Attractive Page Color & Image) */
/* -------------------- */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif; /* A more modern font */
}

body {
  /* Attractive Gradient Background */
  background: linear-gradient(135deg, #304352 0%, #d7d2cc 100%); 
  
  /* Background Image Setup (Add your image file here) */
  /* 1. Place your fitness/gym image (e.g., 'fitness-bg.jpg') in the 'public' folder 
     2. Uncomment and use the lines below
  */
  /*
  background-image: url('./fitness-bg.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-blend-mode: overlay; 
  background-color: rgba(48, 67, 82, 0.7); 
  */
  
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* -------------------- */
/* 2. Main App Container (Calculator Box) */
/* -------------------- */

.App {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.container {
  background-color: rgba(255, 255, 255, 0.95); /* Slightly transparent white */
  padding: 40px;
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3); /* Prominent shadow */
  width: 100%;
  max-width: 420px;
  text-align: center;
  backdrop-filter: blur(2px); /* Slight blur effect behind the box */
  transition: transform 0.3s ease;
}

.container:hover {
    transform: translateY(-5px); /* Interactive lift effect on hover */
}

.container h2 {
  color: #333333;
  margin-bottom: 30px;
  font-size: 2.2em;
  border-bottom: 2px solid #5cb85c; /* Primary color line */
  padding-bottom: 10px;
}

/* -------------------- */
/* 3. Form and Input Styling */
/* -------------------- */

label {
  display: block;
  margin-bottom: 8px;
  color: #444444;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}

input[type='text'] {
  width: 100%;
  padding: 14px;
  border: 2px solid #dddddd;
  border-radius: 8px;
  font-size: 1.1em;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type='text']:focus {
  border-color: #5cb85c; /* Primary color focus */
  box-shadow: 0 0 8px rgba(92, 184, 92, 0.3);
  outline: none;
}

/* -------------------- */
/* 4. Button Styling (Vibrant & Interactive) */
/* -------------------- */

/* Ensure buttons are nicely spaced */
form > div:last-of-type {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 35px;
  margin-bottom: 0;
}

.btn {
  flex: 1;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease, transform 0.15s ease, opacity 0.3s ease;
}

/* Primary Calculate Button (Vibrant Green) */
.btn[type='submit'] { 
  background-color: #5cb85c; /* Vibrant Green */
  color: white;
}

.btn[type='submit']:hover {
  background-color: #4cae4c;
  transform: translateY(-2px);
}

/* Outline Reload Button */
.btn-outline {
  background-color: transparent;
  color: #5cb85c;
  border: 2px solid #5cb85c;
}

.btn-outline:hover {
  background-color: #5cb85c;
  color: white;
}

/* -------------------- */
/* 5. Result Display Area */
/* -------------------- */

.center {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #eeeeee;
}

.center h3 {
  color: #333333;
  font-size: 1.6em;
  margin-bottom: 10px;
}

.center p {
  font-size: 1.3em;
  font-weight: 700;
  color: #d9534f; /* Use a strong color for the message */
}
