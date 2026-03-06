import React, { useState } from 'react'
import { useAuth } from "../component/context/AuthContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password
        }
        

        axios.post('http://localhost:5000/api/auth/login', payload, {withCredentials: true} )
            .then((res) => {
                setLoading(false);
                toast("Login Successful");
                // console.log("Login done", res);
                // console.log("FULL RESPONSE:", res.data);
                login(res.data.result);
                localStorage.setItem("token", res.data.token);
                navigate("/careerForm");
                
                
            })
            .catch((err) => {
                toast("Invalid Credencial");
                console.log("Error while login", err);
                setLoading(false);
            })
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                </div>
                <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-2 disabled:opacity-70 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        {loading ? 'Submitting..' : "Login"}
                    </button>
            </form>
            </div>
            
        </div>
    )
}

export default Login;