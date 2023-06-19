import React from 'react';
import FormInput from '../components/FormInput';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="form-page-container">

    <div className="form-container">
        <h2>Sign in</h2>
        <form action="">

                 <FormInput/>

            <div className="btn-container">
                <Link to="/login">
                <button className="btn-complementary-left btn-cap">log in</button>
                </Link>
                <button  className= "btn-complementary-right btn-cap" type='submit'>sign in</button>
            </div>
        
        </form>
    </div>

</div>
    );
};

export default SignIn;