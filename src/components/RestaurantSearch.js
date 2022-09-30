import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
import { Table, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import {
    Link
} from 'react-router-dom';

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            serachData: null,
            noData: false,
            lastSearch: ""
        }
    }
    search(key) {
        //console.warn(key);
        this.setState({ lastSearch: key });
        fetch('http://localhost:3000/restaurant?q=' + key).then((data) => {
            data.json().then((resp) => {
                //console.warn("Resp: ",resp);
                if (resp.length > 0) {
                    this.setState({ serachData: resp, noData: false });
                } else {
                    this.setState({
                        noData: true,
                        serachData: null
                    });
                }
            })
        })
    }

    delete(id) {
        //alert('deleted');
        fetch('http://localhost:3000/restaurant/' + id, {
            method: "DELETE"
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        }).then((result) => {
            result.json().then((resp) => {
                alert('Restaurant Deleted Successfully!!');
                this.search(this.state.lastSearch);
            })
        })
    }

    render() {
        return (
            <Container>
                <div>
                    <NavBarMenu />
                </div>
                <h4>Restaurant Search</h4>
                {/* <input type="text" onChange={(event) => this.search(event.target.value)}></input> */}
                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Restaurant" />
                <div>
                    {
                        this.state.serachData ?
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Rating Name</th>
                                            <th>Location</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.serachData.map((item) =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.rating}</td>
                                                    <td>{item.address}</td>
                                                    <td><Link to={"/update/" + item.id}> <FontAwesomeIcon icon={faEdit} color="blue" /> </Link>
                                                        <span onClick={() => this.delete(item.id)} style={{ marginLeft: 15 }} ><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            :
                            <div></div>
                    }
                    {
                        this.state.noData ? <h5>No Records Founds</h5> : null
                    }
                </div>
            </Container>
        );
    }
}

export default RestaurantSearch;