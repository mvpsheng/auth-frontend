import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
       
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:3000/register",
            data: {
                email,
                password,
            },
      };

        // make the API call
        axios(configuration)
        .then((result) => {
            setRegister(true)
        })
        .catch((error) => {console.log(error);})

      }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    name="password"
                    value={password}  
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
                Submit
                </Button>

                {/* display success message */}
                {register ? (
                <p className="text-success">You Are Registered in Successfully</p>
                ) : (
                <p className="text-danger">You Are Not Registered</p>
                )}
            </Form>
        </>
    )
}
