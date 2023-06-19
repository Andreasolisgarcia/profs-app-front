import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';

const LogIn = () => {
    return (
<div className="form-page-container">

<div className="form-container">
    <h2>Log in</h2>
    <form action="">
        <FormInput/>

        <div className="btn-container">
        <Link to="/signin"><button className="btn-complementary-left btn-cap">sign in</button></Link>
            <button  className= "btn-complementary-right btn-cap" type='submit'>Log in</button>
        </div>
    
    </form>
</div>

</div>
    );
};

export default LogIn;