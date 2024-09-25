// Importing necessary libraries and components
// Ensure that custom CSS is imported last to override default styles if needed
import { useState } from 'react'; // useState hook for managing component state
import './App.css'; // Importing custom CSS styles
import Navbar from './components/Navbar'; // Importing Navbar component
import TextForm from './components/TextForm'; // Importing TextForm component for text analysis
import Alert from './components/Alert'; // Importing Alert component for notifications
import About from './components/About';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // State variables
  const [mode, setMode] = useState('light'); // State to toggle between light and dark mode, default is 'light'
  const [alert, setAlert] = useState(null); // State to manage alert messages

  // Function to show alert messages with message text and type (e.g., success or warning)
  const showAlert = (message, type) => {
    setAlert({
      msg: message, // The message content of the alert
      type: type, // The type of alert (success, warning, etc.)
    });
    
    // Clear the alert after 2 seconds
    setTimeout(() => {
      setAlert(null); // Reset alert to null
    }, 2000);

    // Unused code: Intervals to change document title (commented out for performance and usability reasons)
    // setInterval(() => {
    //   document.title = "Textutils is amazing"; // Change document title every 2 seconds
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install Textutils"; // Alternate document title every 900ms
    // }, 900);
  };

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // Switch to dark mode
      document.body.style.backgroundColor = '#2f5288'; // Apply dark background color
      document.title = "Now dark mode"; // Change the document title when dark mode is enabled
      showAlert("Dark mode enabled", "success"); // Show success alert when dark mode is enabled
    } else {
      setMode('light'); // Switch to light mode
      document.body.style.backgroundColor = 'white'; // Apply light background color
      document.title = "Now light mode"; // Change the document title when light mode is enabled
      showAlert("Light mode enabled", "warning"); // Show warning alert when light mode is enabled
    }
  };

  // The main JSX return block to render the UI
  return (
   
    
    <>
      {/* Navbar component with dynamic mode and toggleMode function passed as props */}
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      
      {/* Alert component to show notification messages */}
      <Alert alert={alert} />
      
      {/* Main container for the TextForm component */}
      <div className='container my-3'>
        {/* TextForm component for text analysis, with mode and showAlert passed as props */}
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
      </div>

{/* for routing pages   exact used to match exit words  of file/user   /user/home  etc
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/TextForm" element={  <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />} />
        </Routes>
    
   */}
   <div className='container my-4'>
   <About />

   </div>
    </>
  );
}

// Exporting the App component as default export to be used in index.js
export default App;
