import React, { Component } from 'react'
import '../../style.css'
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
export default function Forgetpassword() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        <div>
            <nav class="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
                <a class="navbar-brand font-bold mob_75" href="index.html"><img src="images/logo.png" class="navbar_logo" /></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText1" aria-controls="navbarText1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText1">
                </div>
            </nav>



            <div class="bg_managec">
                <div class="container">
                    {/* <div class="main_bg"> */}
                        <div class="row justify-content-center">
                            
                            <div class="col-md-6">
                                <div class="signin-form">
                                    <h1>Reset Password</h1>
                                    <p>Enter the email and we'll send you a link to reset your password</p>
                                    <form onSubmit={handleClick}>
                                        <input type="text" id="username" name="validation password" placeholder="Email / Phone No" autocomplete="off" ref={email} />

                                        <br /><span id="messages"></span>

                                        {/* <input type="password" id="password" name="validation password" placeholder="Password" ref={password} /><br /> */}
                                        <span id="messages2"></span>

                                        <input src="./setnewpassword" type="submit" name="submit" value="Submit"  disabled={isFetching}/>
                                        {isFetching ? (
                                                <CircularProgress color="white" size="20px" />
                                            ) : (
                                                ""
                                            )}
                                           
                                    </form>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="text_right">
                                                <a href="/setnewpassword" class="sin_up"><img src="https://img.icons8.com/material-rounded/15/000000/less-than.png"/>Back to Sign In</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )

}
