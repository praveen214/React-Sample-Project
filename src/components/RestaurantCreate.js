import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';
class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null
        }
    }
    create() {
        //console.warn(this.state);
        fetch('http://localhost:3000/restaurant', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert('Restaurant Added');
            })
        })

    }
    render() {
        return (
            <div>
                 <NavBarMenu />
                <h4>Restaurant Create</h4>
                <div>

                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder='Enter Name' /><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder='Enter Email' /><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder='Enter Rating' /><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder='Enter Address' /><br /><br />
                    <Button onClick={() => this.create()}>Add Restaurant</Button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;