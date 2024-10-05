import React, { useState, useEffect } from 'react';
import fsuuIcon from '/../images/fsuu-icon-01.svg'; 
import fsuuBackground1 from '/../images/fsuu-intro-01.svg'; 
import fsuuBackground2 from '/../images/fsuu-intro-02.svg'; 

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return [values, handleChange];
};

function LoginPage() {
    const PRIMARY_COLOR = '#070340'; 
    const [fadeIn, setFadeIn] = useState(false); 
    const [showPassword, setShowPassword] = useState(false); 
    const [roleSelected, setRoleSelected] = useState(false); 
    const [modalVisible, setModalVisible] = useState(false); 
    const [remindMe, setRemindMe] = useState(false); 
    const [formValues, handleInputChange] = useForm({
        username: '',
        password: '',
        role: '',
    });

    const { username, password, role } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Role:', role);
        console.log('Remind Me:', remindMe);
    };

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        handleInputChange(e); 
        setRoleSelected(selectedRole !== '');
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleRemindMeChange = () => {
        setRemindMe(!remindMe);
    };

    return (
        <div className="d-flex min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
            <div 
                className="image-container"
                style={{
                    backgroundImage: `url(${fsuuBackground1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '55%', 
                }}
            >
            </div>
            
            <div 
                className={`login-container d-flex align-items-center justify-content-center ${fadeIn ? 'fade-in' : ''}`}
                style={{
                    backgroundImage: `url(${fsuuBackground2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '45%', 
                    padding: '2rem',
                    borderRadius: '10px', 
                    color: '#fff',
                }}
            >
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="text-center mb-4">
                        <img src={fsuuIcon} alt="FSUU Icon" className="fsuu-icon" />
                    </div>
                    <h2 className="text-center mb-2" style={{ color: PRIMARY_COLOR }}>Welcome</h2>
                    <p className="text-center mb-4" style={{ color: PRIMARY_COLOR }}>To Father Saturnino Urios University</p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label" style={{ color: PRIMARY_COLOR }} >Login as:</label>
                            <select 
                                className="form-select form-select-lg"
                                id="role"
                                name="role"
                                value={role} 
                                onChange={handleRoleChange}
                                required 
                            >
                                <option value="">Select role</option> 
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                                <option value="administrator">Administrator</option>
                            </select>
                        </div>
                        {role && (
                            <>
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg"
                                        id="username"
                                        name="username"
                                        value={username} 
                                        onChange={handleInputChange} 
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <input 
                                            type={showPassword ? "text" : "password"}
                                            className="form-control form-control-lg"
                                            id="password"
                                            name="password"
                                            value={password} 
                                            onChange={handleInputChange} 
                                            placeholder="Enter your password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary btn-lg"
                                            style={{
                                                height: 'calc(1.85em + 0.75rem + 1px)', 
                                                borderTopLeftRadius: '0',
                                                borderBottomLeftRadius: '0',
                                            }}
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="form-check mb-3">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="remindMe" 
                                checked={remindMe} 
                                onChange={handleRemindMeChange} 
                            />
                            <label 
                                className="form-check-label" 
                                htmlFor="remindMe" 
                                style={{ color: PRIMARY_COLOR }} 
                            >
                                Remind Me
                            </label>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-lg w-100"
                            style={{ 
                                background: 'linear-gradient(90deg, #004aad, #007bff)', 
                                border: 'none', 
                                borderRadius: '25px', 
                                color: '#fff', 
                            }}
                            disabled={!roleSelected} 
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        <button onClick={toggleModal} className="text-decoration-none btn btn-link">Forgot Password?</button>
                    </div>
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h3 style={{ color: PRIMARY_COLOR }}>Forgot Password</h3>
                        <p>Please enter your email to receive password reset instructions.</p>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter your email" 
                            required 
                        />
                        <div className="text-center mt-3">
                            <button className="btn btn-primary">Send Reset Link</button>
                            <button className="btn btn-secondary" onClick={toggleModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
