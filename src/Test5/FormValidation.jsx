import React from "react";
import { useState } from "react";

const FormValidation = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setErrors] = useState({});

    const handlechange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("form Submitted Successfully");


            setFormData({
                name: "",
                email: "",
                password: ""

            })
            setErrors({});
        }



    }

    //regex

    const nameregex = /^[A-Za-z0-9 ]{3,30}$/;
    const emailregex = /^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Za-z]{2,}$/;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    //validate
    const validate = () => {

        let tempErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = "Name should not be empty.";
        } else if (!nameregex.test(formData.name)) {
            tempErrors.name = "Name must be 3-30 characters long.";
        }

        // Email Validation
        if (!formData.email.trim()) {
            tempErrors.email = "Email should not be empty.";
        } else if (!emailregex.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address with '@'.";
        }

        // Password Validation
        if (!formData.password) {
            tempErrors.password = "Password should not be empty.";
        } else if (!passwordregex.test(formData.password)) {
            tempErrors.password =
                "Password must be at least 6 characters (with upper, lower, number, & special char).";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    }

    return (
        <div>

            <form onSubmit={handlesubmit} className="row g-3">
                <h3>Form</h3>

                <div className="col-12">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        value={formData.name}
                        placeholder="Enter name..."
                        onChange={handlechange}
                    />
                </div>
                <p style={{color:"red"}}>{error.name}</p>

                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        name="email"
                        value={formData.email}
                        placeholder="Enter email.."
                        onChange={handlechange}
                    />
                </div>
                <p style={{color:"red"}}>{error.email}</p>

                <div className="col-md-6">
                    <label htmlFor="inputPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="password"
                        value={formData.password}
                        placeholder="Enter password"
                        onChange={handlechange}
                    />
                </div>
                <p style={{color:"red"}}>{error.password}</p>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )

}
export default FormValidation;