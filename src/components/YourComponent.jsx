import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const jsonData = await response.json();
      console.log('Response:', jsonData);
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch('http://localhost:5000/submit_symptoms', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Symptoms submitted successfully');
        // Optionally, you can fetch data again after submission
        fetchData();
      } else {
        console.error('Failed to submit symptoms');
      }
    } catch (error) {
      console.error('Error submitting symptoms:', error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name='sym1' type='text' placeholder='Add your Symptom...' className='form-control form-control-md symptom' />
          <input name='sym2' type='text' placeholder='Add your Symptom...' className='form-control form-control-md symptom' />
          <button type='submit' className='diagnosis'>Start Diagnosis</button>
        </form>
      </div>
      <div>
        <h1>Output:</h1>
        <h1>{data.Message}</h1>
      </div>
    </>
  );
};

export default YourComponent;
