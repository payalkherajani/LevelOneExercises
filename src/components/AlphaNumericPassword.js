import React, { useState } from 'react';

const AlphaNumericPassword = () => {
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
        console.log("password")
    }

    return (
        <div className="AlphaNumericPassword-div">
            <h3>AlphaNumericPassword</h3>
            <form onSubmit={checkPasswords}>
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={passwordOnChange} required >
                </input>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={passwordOnChange} required></input>
                {
                    password !== "" && confirmPassword !== "" && password === confirmPassword ? (<button>Submit</button>) : (<button disabled>Submit</button>)
                }
            </form>
        </div>
    )
}

export default AlphaNumericPassword;