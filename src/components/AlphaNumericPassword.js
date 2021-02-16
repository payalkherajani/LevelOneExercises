import React, { useState } from 'react';

const AlphaNumericPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const passwordOnChange = (e) => {
        const { name, value } = e.target;

        if (name === 'password') {
            setPassword(value)
        }
        if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    }
    const checkPasswords = (e) => {
        e.preventDefault();
        console.log(e.target.password)
        setPassword("");
        setConfirmPassword("")
    }
    const visibilityPassword = () => {
        setShowPassword(true);
    }

    return (
        <div className="AlphaNumericPassword-div">
            <h3>AlphaNumericPassword</h3>
            <form onSubmit={e => checkPasswords(e)}>
                <div>
                    <button onClick={visibilityPassword}><i className="far fa-eye"></i></button>
                    <input type={showPassword === true ? "text" : "password"} name="password" placeholder="Enter Password" value={password} onChange={passwordOnChange} required />
                </div>

                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={passwordOnChange} required />
                {
                    password !== "" && confirmPassword !== "" && password === confirmPassword ? (<button>Submit</button>) : (<button disabled>Submit</button>)
                }
            </form>
        </div>
    )
}

export default AlphaNumericPassword;