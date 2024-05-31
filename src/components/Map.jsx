import React, { useState, useEffect } from 'react';

const Map = () => {
  const [latLong, setLatLong] = useState({ lat: '', long: '' });

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const p = position.coords;
        console.log(p.latitude.toString())
        console.log(p.longitude.toString())
        setLatLong({
          lat: p.latitude.toString(),
          long: p.longitude.toString(),
        });
      },
      (error) => {
        console.error('Error getting location', error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    getLoc();
  }, []);

  return (
    <>
    <div className='header'>
      <h1 className='header-text'>Nearby Clinics and Hospitals</h1>
    </div>
      {latLong.lat && latLong.long ? (
        <iframe
          className='map-frame'
          src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15085.006956865254!2d${latLong.long}!3d${latLong.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals%20%26%20clinics!5e0!3m2!1sen!2sin!4v1708970485669!5m2!1sen!2sin`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div>Loading map...</div>
      )}
      <div className='map-content'>
      <p className='emergency-text'>To the right, you will find a map displaying nearby clinics and hospitals based on your current location.</p>
        <h2 ><br/>Emergency Numbers (India only)</h2>
        <p className='emergency-text'>
    Police: <b>100</b><br />
    Fire: <b>101</b><br />
    Ambulance: <b>102</b><br />
    Disaster Management Services: <b>108</b><br />
    Emergency Response Support System (ERSS): <b>112</b><br />
    Women Helpline: <b>1091</b><br />
    Child Helpline: <b>1098</b><br />
    Road Accident Emergency Service: <b>1073</b><br />
    National Highway Emergency Number: <b>1033</b><br />
    Tourist Helpline: <b>1363</b> or <b>1800-111-363</b><br />
    Senior Citizen Helpline: <b>14567</b>
</p>

      </div>
    </>
  );
};

export default Map;
