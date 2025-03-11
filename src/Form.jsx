import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myarr: {},
            name: "",
            password: "Default@123",
            email: "example@gmail.com",
            mobile: "",
            gender: "",
            hobbies: [],
            city: "",
            submittedData: null
        };
    }

    dataValidation() {
        var isValid = true;
        var temparr = {};

        // Name validation
        if (this.state.name.trim().length < 2) {
            isValid = false;
            temparr.name = "Name should be at least 2 letters";
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(this.state.email)) {
            isValid = false;
            temparr.email = "Enter a valid email (example@gmail.com)";
        }

        // Mobile number validation
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(this.state.mobile)) {
            isValid = false;
            temparr.mobile = "Enter a valid 10-digit mobile number.";
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(this.state.password)) {
            isValid = false;
            temparr.password = "Password must be 8+ chars, include uppercase, lowercase, number & special character (e.g., Hello@123).";
        }

        // Gender validation
        if (!this.state.gender) {
            isValid = false;
            temparr.gender = "Select a gender";
        }

        // Hobbies validation
        if (this.state.hobbies.length < 1) {
            isValid = false;
            temparr.hobbies = "Select at least one hobby.";
        }

        // City validation
        if (!this.state.city) {
            isValid = false;
            temparr.city = "Please select a city.";
        }

        this.setState({ myarr: temparr });
        return isValid;
    }

    getData(e) {
        e.preventDefault();
        var doCheck = this.dataValidation();
        if (doCheck) {
            this.setState({
                submittedData: {
                    name: this.state.name,
                    email: this.state.email,
                    mobile: this.state.mobile,
                    password: this.state.password,
                    gender: this.state.gender,
                    hobbies: this.state.hobbies.join(", "),
                    city: this.state.city
                }
            });
        }
    }

    handleHobbyChange = (e) => {
        const { value, checked } = e.target;
        this.setState((prevState) => ({
            hobbies: checked 
                ? [...prevState.hobbies, value] 
                : prevState.hobbies.filter((hobby) => hobby !== value)
        }));
    };

    render() {
        const formStyle = {
            maxWidth: "400px",
            margin: "auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        };
        const inputStyle = {
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px"
        };
        const buttonStyle = {
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
        };
        const errorStyle = { color: "red", fontSize: "12px" };
        return (
            <>
                 <div style={formStyle}>
                <h2 style={{ textAlign: "center" }}>Form</h2>
                <label>Name:</label>
                <input type='text' name='name' onChange={(e) => this.setState({ name: e.target.value })} style={inputStyle} />
                <p style={errorStyle}>{this.state.myarr.name}</p>

                <label>Email:</label>
                <input type='text' name='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} style={inputStyle} />
                <p style={errorStyle}>{this.state.myarr.email}</p>

                <label>Mobile:</label>
                <input type='text' name='mobile' value={this.state.mobile} 
                    onChange={(e) => this.setState({ mobile: e.target.value.replace(/\D/g, "") })} maxLength='10' style={inputStyle} />
                <p style={errorStyle}>{this.state.myarr.mobile}</p>

                <label>Gender:</label><br/>
                <input type='radio' name='gender' value='male' onChange={(e) => this.setState({ gender: e.target.value })} /> Male
                <input type='radio' name='gender' value='female' onChange={(e) => this.setState({ gender: e.target.value })} /> Female
                <p style={errorStyle}>{this.state.myarr.gender}</p>

                <label>Hobbies:</label><br />
                <input type='checkbox' value='Reading' onChange={this.handleHobbyChange} /> Reading
                <input type='checkbox' value='Traveling' onChange={this.handleHobbyChange} /> Traveling
                <input type='checkbox' value='Gaming' onChange={this.handleHobbyChange} /> Gaming
                <input type='checkbox' value='Music' onChange={this.handleHobbyChange} /> Music
                <p style={errorStyle}>{this.state.myarr.hobbies}</p>

                <label>City:</label>
                <select onChange={(e) => this.setState({ city: e.target.value })} style={inputStyle}>
                    <option value=''>Select City</option>
                    <option value='New York'>New York</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='Chicago'>Chicago</option>
                    <option value='Houston'>Houston</option>
                </select>
                <p style={errorStyle}>{this.state.myarr.city}</p>

                <input type='submit' value='Submit' onClick={this.getData.bind(this)} style={buttonStyle} />
            </div>

                {this.state.submittedData && (
                    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
                        <h3>Submitted Data:</h3>
                        <p><strong>Name:</strong> {this.state.submittedData.name}</p>
                        <p><strong>Email:</strong> {this.state.submittedData.email}</p>
                        <p><strong>Mobile:</strong> {this.state.submittedData.mobile}</p>
                        <p><strong>Gender:</strong> {this.state.submittedData.gender}</p>
                        <p><strong>Hobbies:</strong> {this.state.submittedData.hobbies}</p>
                        <p><strong>City:</strong> {this.state.submittedData.city}</p>
                         
                    </div>
                )}
            </>
        );
    }
}

export default Form;
