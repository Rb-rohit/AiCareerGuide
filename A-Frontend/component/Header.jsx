import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../component/context/AuthContext";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        
        logout();
        navigate("/login");
    };

    const BackBtn = () => {
        navigate("/careerForm");
    };
    return (
        <div className='border border-b border-gray-400 h-12 flex items-center space-x-5'>
            {user ? (
                <>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>

                <button
                    onClick={BackBtn}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Back To Form
                </button>
                </>
            ) : (
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Login
                </button>
            )}

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    <Link to= '/register'>Register</Link>
                </button>

                

        </div>
        
    )
}

export default Header;