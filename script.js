// Import the Firebase JavaScript SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrBEGR7qpCY3txx73DfuJjOpYbvxNzIec",
  authDomain: "projects-80402.firebaseapp.com",
  projectId: "projects-80402",
  storageBucket: "projects-80402.appspot.com",
  messagingSenderId: "496560848010",
  appId: "1:496560848010:web:19d6c1b5b4196211b6c173",
  measurementId: "G-HX696XNQ43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Function to fetch all documents and the "Quote" field from Firestore
async function getRandomQuote() {
  const quotesRef = collection(db, 'quotes');

  try {
    const querySnapshot = await getDocs(quotesRef);
  
    const quotes = [];
    querySnapshot.forEach((doc) => {
      // Retrieve the "Quote" field from each document
      quotes.push(doc.data().Quote);
    });
  
    // Debugging: Check if quotes array has data
    console.log('Quotes array:', quotes);
  
    // Select a random quote from the fetched quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    // Debugging: Check the selected random quote
    console.log('Random quote:', randomQuote);
  
    // Display the random quote on the page
    document.getElementById('quote-text').textContent = randomQuote;
  } catch (error) {
    console.error('Error fetching quotes: ', error);
  }
}

// Event listener for the button
document.getElementById('generate-btn').addEventListener('click', getRandomQuote);

// Initial quote on page load
getRandomQuote();
