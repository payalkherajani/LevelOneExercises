import React, { useState } from 'react';

const PasswordMatch = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value)
        }
        if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    }
    const checkPasswords = () => {
        if (password === confirmPassword) {
            alert("Passwords match")
        }
        else {
            alert("Passwords do not match")
        }
    }
    return (
        <div className="passwordmatch-div">
            <h3>Password Match</h3>
            <form>
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={passwordOnChange} required >

                </input>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={passwordOnChange} required></input>
                <button onClick={checkPasswords}>Check</button>
            </form>
        </div>
    )
}

export default PasswordMatch;