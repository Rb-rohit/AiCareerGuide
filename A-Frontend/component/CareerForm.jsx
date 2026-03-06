import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CareerForm() {
    const [formData, setFormData] = useState({
        name: "",
        education:"",
        skills: "",
        interests: "",
        experience: "",
        country: "",
        goalType: "",
        
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post("http://localhost:5000/api/career/analyze", formData);
        console.log(res.data);
        localStorage.setItem(
            "careerData",
            JSON.stringify(res.data)
        );
        navigate("/careerResult", {
            state: {
                careerData: res.data.data
            }
            
        });
        console.log(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

            <h2 className="text-2xl font-bold text-center mb-6">
            AI Career Guidance Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Full Name
                </label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
                required
                />
            </div>

            {/* Interests */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Interests
                </label>
                <select
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                >
                <option value="">Select Interest</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Cloud">Cloud Computing</option>
                </select>
            </div>

            {/* Education */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Education Level
                </label>
                <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                >
                <option value="">Select Education</option>
                <option value="12th">12th</option>
                <option value="Diploma">Diploma</option>
                <option value="BCA">BCA</option>
                <option value="BTech">BTech</option>
                <option value="MCA">MCA</option>
                <option value="Other">Other</option>
                </select>
            </div>

            {/* Skills */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Current Skills (comma separated)
                </label>
                <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="React, Node, MongoDB"
                required
                />
            </div>

            

            {/* Experience */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Experience Level
                </label>
                <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                >
                <option value="">Experience</option>
                <option value="0-1 years">0-1 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="5-8 years">5-8 years</option>
                </select>
            </div>

            {/* Country */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Preferred Country
                </label>
                <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Remote">Remote</option>
                </select>
            </div>

            {/* Goal Type */}
            <div>
                <label className="block text-sm font-medium mb-1">
                Career Goal Type
                </label>
                <select
                name="goalType"
                value={formData.goalType}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                >
                <option value="">Select Goal</option>
                <option value="Job">Job</option>
                <option value="Freelancing">Freelancing</option>
                <option value="Startup">Startup</option>
                <option value="Higher Studies">Higher Studies</option>
                </select>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
                Generate Career Guidance
            </button>

            </form>
        </div>
        </div>
    );
}
