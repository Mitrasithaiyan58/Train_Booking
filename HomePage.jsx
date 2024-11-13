import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  // State to store search results
  const [trains, setTrains] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // To track if a search was performed
  const [selectedMode, setSelectedMode] = useState(''); // State to store selected train mode
  const [selectedClass, setSelectedClass] = useState(''); // State to store selected train class

  // Dummy train data (this could be fetched from an API in a real-world scenario)
  const trainData = [
    { id: 1, name: 'Express Train 101', mode: 'High-speed', departure: 'New York', arrival: 'Washington', fee: 150, classType: 'AC' },
    { id: 2, name: 'Coastal Ride 202', mode: 'Sleeper', departure: 'Boston', arrival: 'Miami', fee: 120, classType: 'Second Sitting' },
    { id: 3, name: 'Mountain Express 303', mode: 'Regional', departure: 'Denver', arrival: 'Salt Lake City', fee: 180, classType: 'Sleeper' },
    { id: 4, name: 'Pacific Line 404', mode: 'High-speed', departure: 'San Francisco', arrival: 'Los Angeles', fee: 160, classType: 'AC' },
    { id: 5, name: 'Night Rider 505', mode: 'Sleeper', departure: 'Chicago', arrival: 'New Orleans', fee: 195, classType: 'Sleeper' }
  ];

  // Function to handle the "Book Now" button click event
  const handleBookNowClick = () => {
    alert('Your train is booked!'); // Display the alert message
  };

  // Function to handle the form submission
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Filter train data based on selected mode and class
    const filteredTrains = trainData.filter(train => 
      (train.mode === selectedMode || selectedMode === '') &&
      (train.classType === selectedClass || selectedClass === '')
    );
    setTrains(filteredTrains);
    setSearchPerformed(true);
  };

  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Book Your Train</div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Login/signup">Login/Signup</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World by Train</h1>
          <p>Find the best routes and book your tickets easily.</p>
          <button className="btn-primary" onClick={handleBookNowClick}>Book Now</button>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="search-section">
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Departure Station" required />
          <input type="text" placeholder="Arrival Station" required />
          <input type="date" required />
          <select value={selectedMode} onChange={(e) => setSelectedMode(e.target.value)}>
            <option value="">Select Train </option>
            <option value="VANDEBHARAT">VANDEBHARAT</option>
            <option value="KANYAKUMARI EXP">KANYAKUMARI EXP</option>
            <option value="ALLEPPEY EXP">ALLEPPEY EXP</option>
            <option value="KERALA EXP">KERALA EXP</option>
            <option value="WEST COAST EXP">WEST COAST EXP</option>
            <option value="ERNAKULAM EXP">ERNAKULAM EXP</option>
          </select>
          {/* New Dropdown for Train Class */}
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="">Select Train Class</option>
            <option value="AC">AC 2 Tier(2A)</option>
            <option value="Second Sitting">Second Sitting(2S)</option>
            <option value="Sleeper">Sleeper(SL)</option>
            <option value="Second Sitting">All class</option>
            <option value="Sleeper">AC First Class(1A)</option>
            <option value="Sleeper">AC 3 Tier(3A)</option>
            <option value="Sleeper">Exec.Chair Car(EC)</option>
            <option value="Sleeper">AC</option>
          </select>
          <button type="submit" className="btn-primary">Search</button>
        </form>
      </section>

      {/* Train Results Section */}
      {searchPerformed && (
        <section className="train-results">
          <h2>Available Trains</h2>
          {trains.length > 0 ? (
            <ul>
              {trains.map((train) => (
                <li key={train.id}>
                  <span>{train.name}</span> - 
                  <span>Mode: {train.mode}</span> - 
                  <span>Class: {train.classType}</span> - 
                  <span>Departure: {train.departure}</span> - 
                  <span>Arrival: {train.arrival}</span> - 
                  <span>Fee: ${train.fee}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No trains found for the selected route, mode, and class.</p>
          )}
        </section>
      )}

      {/* Features Section */}
      <section className="features">
        <h2>Why Book with Us?</h2>
        <div className="feature">
          <h3>Easy Booking</h3>
          <p>Quick and hassle-free booking process with multiple payment options.</p>
        </div>
        <div className="feature">
          <h3>Real-Time Updates</h3>
          <p>Stay updated with real-time train schedules and seat availability.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>Our customer support is available around the clock to assist you.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Train Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;