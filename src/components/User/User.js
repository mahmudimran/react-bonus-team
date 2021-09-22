import React, { useState } from 'react';

const User = (props) => {
    const { name, email, picture, website, phone } = props.user;
    const [mobile, setMobile] = useState('')
    const showNumber = () =>setMobile(phone)
    const fullName = name.first + ' ' + name.last 
    return (
        <div className="container">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={picture.large} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Name: {fullName}</h5>
                            <p class="card-text">Email: {email}</p>
                            <p class="card-text"><small class="text-muted">Phone: {mobile}</small></p>
                            <button  onClick={showNumber} type="button" class="btn btn-outline-primary m-1">Show Phone</button>
                            <button  onClick = {()=>props.addMember(fullName)}type="button" class="btn btn-success">Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;