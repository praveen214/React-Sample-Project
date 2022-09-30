import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavBarMenu from './NavBarMenu';
import {
    Link
} from 'react-router-dom';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData(){
        fetch('http://localhost:3000/restaurant').then((response) => {
            response.json().then((result) => {
                this.setState({ list: result });
            })
        })
    }
    delete(id)
    {
        //alert('deleted');
        fetch('http://localhost:3000/restaurant/'+id,{
            method: "DELETE"
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        }).then((result) => {
            result.json().then((resp) => {
                alert('Restaurant Deleted Successfully!!');
                this.getData();
            })
        })
    }
    render() {
        console.warn(this.state);
        return (
            <div>
                 <NavBarMenu />
                <h4>Restaurant List</h4>
                {
                    this.state.list ?
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
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={"/update/" + item.id}> <FontAwesomeIcon icon={faEdit}  color="blue"/> </Link>
                                                <span onClick={()=>this.delete(item.id)} style={{ marginLeft: 15 }} ><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                                    {/* <Link to={"/update/" + item.id} style={{ marginLeft: 15 }}> <FontAwesomeIcon icon={faTrash} color="red" /> </Link> */}
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please wait</p>
                }
            </div>
        );
    }
}

export default RestaurantList;