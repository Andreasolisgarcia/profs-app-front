import React from 'react';

const FormInput = () => {
    return (
        <>
        <div className="radios-container">
        <input type="radio" id="teacher" name="user-type"/>
        <label className="label-left" for="teacher">Teacher</label>

        <input type="radio" id="student" name="user-type" checked />
        <label className="label-rigth" for="student">Student</label>
     </div>


     <label for="">email :</label>
    <input type="text" placeholder="youremail@exemple.com"/>
    <label for="">password :</label>
    <input type="password" placeholder="tell nobody..."/>
    </>
    );
};

export default FormInput;