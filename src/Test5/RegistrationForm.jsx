import React, { useState } from "react";

const RegistrationForm = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handlechange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        alert("form Submitted Successfully");


    }


    return (
        <div>

            <form onSubmit={handlesubmit} className="row g-3">
                <h3>Registration Form</h3>

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

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )


}
export default RegistrationForm;

