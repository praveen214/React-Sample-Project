import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    login() {
        //console.warn(this.state);
        fetch('http://localhost:3000/login?q=' + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("Resp: ",resp);
                if(resp.length>0)
                {
                    localStorage.setItem('login',JSON.stringify(resp));
                    console.warn(this.props.history.push('list'));
                }else{
                    alert('Please check user name or password');
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <h5>Let's Login</h5>
                <input type="text" name="user" onChange={(event) => this.setState({ name: event.target.value })} placeholder="User Name"></input> <br /><br />
                <input type="text" name="password" onChange={(event) => this.setState({ password: event.target.value })} placeholder="Password"></input> <br /><br />

                <Button onClick={() => this.login()}> Login</Button>
            </div>
        );
    }
}

export default Login;