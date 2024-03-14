import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Logout=()=>{
    const [message, setMessage] = useState('');
    const Navigate=useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            if (!token) {
                setMessage('No token found');
                return;
            }
            const response = await axios.post(
                'http://localhost:8000/logout',
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                setMessage('Logged out successfully');
                localStorage.removeItem('token'); // Remove token from localStorage
                Navigate("/login");
            }
        } catch (error) {
            setMessage('Error logging out');
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
