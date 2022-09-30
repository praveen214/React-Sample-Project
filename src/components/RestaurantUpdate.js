import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';
class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null
        }
        
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurant/' + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                //this.setState({ list: result });
                console.warn(result);
                this.setState({
                    name: result.name,
                    email: result.email,
                    id: result.id,
                    rating: result.rating,
                    address: result.address
                })
            })
        })
    }

    update() {
        fetch('http://localhost:3000/restaurant/' + this.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert('Restaurant Updated Successfully!!');
            })
        })
    }

    render() {
        return (
            <div>
                <NavBarMenu />
                <h4>Restaurant Update</h4>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder='Enter Name' value={this.state.name} /><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder='Enter Email' value={this.state.email} /><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder='Enter Rating' value={this.state.rating} /><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder='Enter Address' value={this.state.address} /><br /><br />
                    <Button onClick={() => this.update()}>Update Restaurant</Button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;