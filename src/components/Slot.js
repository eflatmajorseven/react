import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from 'react-select';
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import axios from 'axios';


const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ];

         
     export default  class Slot extends React.Component {
            state = {
              selectedOption: null,
              users: [],
            };
            componentDidMount = () => {
                this.populateOptions();
            };
            //sitas veikia
            // populateOptions = () => {
            //     axios.get('http://localhost:8080/api/auth/users')
            //     .then((response) => {
            //         const data = response.data;
            //         this.setState({ users: data});
            //         console.log("users recieved")
            //     })
            //     .catch(()=> {
            //         console.log("failed to retrieve users")
            //     });
            // }
            populateOptions = () => {
                const gotusers = AuthService.getUsers;
                this.setState({users: gotusers})
                console.log(gotusers);
            };

            handleSelectChange = (selectedOption) => {
              this.setState({ selectedOption }
              );
              console.log(UserService.getPublicContent);
            };
            handleSubmit =(e)=> {
                e.preventDefault();
                alert('submit');
            }
            
            
            render() {
              const { selectedOption } = this.state;
          
              return (
                  <div>
                  <Form onSubmit={this.handleSubmit} > 
                  
                <Select
                  value={selectedOption}
                  onChange={this.handleSelectChange}
                  options={options}
                />
                <div className="form-group">
                <button className="btn btn-primary btn-block">Confirm</button>
              </div>
                <CheckButton style={{ display: "none" }} />
                </Form>
                <h2></h2>
                </div>
                
              );
            }
          }



  
 


