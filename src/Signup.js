import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
 
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [workspace, setWorkspace] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
 
    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check password validation before submitting the form
        if (validatePassword()) {
            axios.post('http://localhost:3001/register', { name, email, workspace, password })
                .then(result => {
                    console.log(result);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        } else {
            // Show password error message
            setPasswordError("Password should be at least 6 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
             // Clear the error message after 10 seconds
            setTimeout(() => {
              setPasswordError("");
            }, 10000);
          }
    }
 
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
 
    const handleNameChange = (e) => {
        let input = e.target.value;
        input = input.replace(/[^a-zA-Z\s]/g, '');
        input = input.toUpperCase();
        setName(input);
    }
 
    const handleWorkspaceChange = (e) => {
        setWorkspace(e.target.value);
        // Check if workspace name is 'orangestar'
        if (e.target.value === 'orangestar') {
            // Show popup
            setShowPopup(true);
        } else {
            // Hide popup
            setShowPopup(false);
        }
    }
 
    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    }
 
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><strong>Sign-Up</strong></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="workspace">
                            <strong>Workspace</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Workspace"
                            autoComplete="off"
                            name="workspace"
                            className="form-control rounded-0"
                            onChange={handleWorkspaceChange}
                            required
                        />
                    </div>
                    {showPopup && <p style={{ color: 'red' }}>This workspace name is already taken. Please enter another name.</p>}
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                name="password"
                                className="form-control rounded-0"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword(!showPassword)}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        {passwordError && <p style={{ color: 'red', marginTop: '5px' }}>{passwordError}</p>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p style={{ marginTop: "20px" }}>Already Have an Account? Login</p>
                <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" style={{ marginTop: "-20px" }}>
                    Login
                </Link>
            </div>
        </div>
    );
}
 
export default Signup;