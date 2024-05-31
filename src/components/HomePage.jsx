
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { MyContext } from '../context';

const HomePage = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate(); 
    const [inputList, setInputList] = useState(['']);
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

    const addInput = () => {
        setInputList([...inputList, ''])
      };

    const handleInputChange = (index, value) => {
    const newList = [...inputList];
    newList[index] = value;
    setInputList(newList);
    };
  return (
        <div className='home'>
            <nav id='sidebar'>
                <div className='sidebar-header'>
                <svg className='svgs' xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                <path d="M34.7649 0.984062C32.5374 1.02484 29.2517 1.71348 28.1246 4.44245C30.5034 8.55461 31.9608 12.3319 32.5104 16.5404C29.9454 14.9317 27.1835 13.8003 24.3278 13.227C22.7139 12.9032 21.1441 12.7329 19.6914 12.7833C9.32595 13.1438 0.488374 22.1563 0.658671 35.1208C0.85414 50.0124 11.8398 64.3238 24.5691 66.8798C26.1839 67.2042 28.1683 67.374 29.9438 67.2094C31.7194 67.0449 33.2367 66.5232 34.0571 65.7371L34.9009 64.9288L35.8017 65.6713C36.5861 66.3167 38.198 66.8337 40.0162 67.003C41.8345 67.1722 43.8473 67.0353 45.4126 66.6908C58.0541 63.9095 67.5072 49.4983 67.3107 34.5406C67.2127 27.0902 64.5193 21.0265 60.3498 17.1821C57.2225 14.2989 53.271 12.6301 48.8227 12.5634C47.34 12.5412 45.8035 12.6988 44.2215 13.0469C41.7191 13.5974 39.2976 14.5808 37.0323 15.9385C37.1808 11.0106 36.7626 6.49136 35.648 1.00136C35.3538 0.983903 35.0591 0.978086 34.7645 0.983921L34.7649 0.984062ZM34.4001 23.084C35.921 24.8151 36.442 26.3296 36.3295 27.7598C36.2202 29.1453 35.4206 30.6271 33.9342 32.1807C30.6801 29.3702 31.4363 24.8373 34.4002 23.084H34.4001ZM43.8307 28.2126C44.3052 28.2098 44.799 28.2657 45.3073 28.3794C44.9451 30.4996 44.2329 32.0234 43.1847 32.9366C42.1028 33.8795 40.5738 34.3665 38.276 34.1759C37.9661 31.2242 40.2928 28.3538 43.6286 28.2169C43.6954 28.2141 43.7628 28.2127 43.8305 28.2127L43.8307 28.2126ZM24.029 28.5684C26.8401 28.4995 29.2186 30.5223 29.61 33.1255C27.4352 33.8848 25.8352 33.7976 24.552 33.1564C23.3086 32.5348 22.2349 31.2376 21.3528 29.276C22.1607 28.8618 22.973 28.6384 23.7566 28.5817C23.848 28.575 23.9384 28.5705 24.0291 28.5684H24.029ZM22.9962 36.6456C24.9762 36.6414 26.8452 37.6915 27.7775 39.4229C25.9851 40.8742 24.4478 41.3379 23.0225 41.1675C21.6426 41.0023 20.195 40.1447 18.7028 38.5965C19.9634 37.2497 21.5089 36.6484 22.9961 36.6453L22.9962 36.6456ZM42.7147 37.1597C42.8207 37.1593 42.9287 37.1625 43.0353 37.1681C44.749 37.2624 46.4803 38.1494 47.6366 39.9677C45.8827 41.2118 44.3033 41.7888 42.9166 41.6946C41.4851 41.5975 40.0615 40.8593 38.5705 39.1019C39.5834 37.8513 41.1214 37.1636 42.7147 37.1598V37.1597ZM26.578 44.6741C27.1894 44.6836 27.8 44.8053 28.384 45.0346C27.9544 47.3 27.081 48.6423 25.8834 49.4333C24.7242 50.1992 23.0647 50.48 20.9264 50.2638C21.097 46.8647 23.6607 44.7757 26.3143 44.6782C26.4015 44.6754 26.4905 44.6726 26.578 44.674V44.6741ZM38.8078 44.6961C41.4628 44.7319 44.0785 46.7595 44.3274 50.1542C42.1927 50.4205 40.5257 50.1814 39.3483 49.4422C38.1333 48.6794 37.229 47.3536 36.7467 45.1004C37.3986 44.8249 38.1004 44.6873 38.808 44.6961H38.8078ZM32.6246 47.0122C35.5894 48.7658 36.343 53.2984 33.0861 56.1088C31.6005 54.5553 30.8001 53.0727 30.6912 51.6875C30.5785 50.2574 31.1038 48.7428 32.6248 47.0118L32.6246 47.0122Z" fill="#E48686"/>
                </svg>
                    <h1 className='titleh'>an Apple a day</h1>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <p onClick={() => navigate('/map')}>Find Health Centers</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/about')}>About</p>
                    </li>
                </ul>
                    <div className='tips'></div>
                    <ul className='list-unstyled components'>
                        <li>
                            <p>Health Support</p>
                        </li>
                    </ul>
            </nav>
            <nav id='rightsidebar'>
                <div className='sidebar-header'>
                    <h1 className='history'>History</h1>
                    <img height="68" width="68" className='profilepic' src={auth?.currentUser?.photoURL} alt="" />
                </div>
                <ul className="list-unstyled components histori">
                    
                </ul>
                <div className='userne'>
                    <span id='name'>{auth?.currentUser?.displayName}</span>
                    <span id='email'>{auth?.currentUser?.email}</span>
                </div>
            </nav>
            <div className='main'>
                <div className='input'>
                    <h1 className='catchphrase'>Not feeling your best? Let's help.</h1>
                    <form onSubmit={handleSubmit}>
                        <input name = 'sym1' type='text' placeholder='Add your Symptom...' className='form-control form-control-md symptom' />
                        <input name = 'sym2' type='text' placeholder='Add your Symptom...' className='form-control form-control-md symptom' />
                        {inputList.map((input, index) => (
                            <div key={index}>
                            <input name='sym3' type='text' placeholder='Add your Symptom...' className='form-control form-control-md symptom' />
                            </div>
                        ))}
                        <button className='add' onClick={addInput}>+</button><br />
                        <button type='submit' className='diagnosis'>Start Diagnosis   <svg  className="up" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 23 23" fill="none">
                            <path d="M1.9901 21.0304L21.0275 1.99298M21.0275 1.99298L21.0275 19.9727M21.0275 1.99298L3.04773 1.99298" stroke="#D6F6D0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className='output'>
                    <div className='container'>
                    <p className='text'>{data.Message}</p>
                    </div>
                
                </div>
            </div>
        </div>
  )
}

export default HomePage