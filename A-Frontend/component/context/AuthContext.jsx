import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // check login on refresh
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");

        // prevent JSON.parse crash
            if (storedUser && storedUser !== "undefined") {
                setUser(JSON.parse(storedUser));
            }
        }catch (error) {
            console.log("Invalid user data in localStorage");
            localStorage.removeItem("user");
            setUser(null);
        }
    }, []);

  // login function
    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    // logout function
    const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); 
    setUser(null);
};

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
