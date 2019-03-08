import React, { Component } from 'react';

class PasswordInput extends Component {

    //constructor
    constructor(props){
        super(props);

        //state
        this.state = {
            password: ''
            
        }

        //even handlers
        this.onPasswordChange = this.onPasswordChange.bind(this);
             
      

    }

    onPasswordChange(event){
        const password = event.target.value;
        //this is lifting the state value to the parent
        this.props.onPasswordInputChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );

    }

    render() {
        const password=this.props.password;
        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input className="form-control" 
                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                       title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                       id="exampleInputPassword1" 
                       onChange={this.onPasswordChange}
                       placeholder="Password" 
                       type="password"
                       value={this.state.password}  />
                <div id="message">
                    <h3>Password must contain the following:</h3>
                    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" class="invalid">A <b>number</b></p>
                    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                </div>
            </div>
            
        );
    };
}

export default PasswordInput;