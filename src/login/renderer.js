import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false};
    }



//render everything component
    
    
    
    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false;})
    }
    
    
    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false; })
    }
    
    
    
    
  render() {
      return (
       
      <div className ="root-container">
          
          <div className = "box-controller">
          
          <div className = {"controller" + (this.state.isLoginOpen ? "selected-controller": "") onClick ={this.showLoginBox.bind(this)}>
            Login
          </div>
             <div className = {"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick ={this.showRegisterBox.bind(this)}>
              //if this then return this
              Register

             </div>
          
          </div>
          
          <div className="box-container">
              {this.state.isLoginOpen && <LoginBox />} 
              {this.state.isRegisterOpen && RegisterBox />}
          </div>
          
          </div>
      );
         
  }
    
}



class LoginBox extends React.Component {
    //constructor class below the main application 
    //create login box
    constructor(props){
        super(props);
        this.state = {
            //create empty errors array inside the state
            errors: []
        };
    }

    //two methods show validation erroe
    
    
    showValidationErr(elm, msg) {
        //element represents user name or password
        //grab previous state provide call back
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}]}) )
    }
    //takes the element which represents the element username input or password input
    clearValidationErr(elm){
        
    }
    
    
    
 submitRegister(e){
       
   }
    
    
    
    render() {
          return (
        //couple of input fields
        <div className = "inner-container">
           <div className = "header">
             Login
           </div>
           <div className="box">

             <div className="input-group">
             <label htmlFor="username"> UserName</label>
             <input type = "text" name="username" placeholder="username" id="username" className="login-input"/>
             </div>
   
             <div className="input-group">
             <label htmlFor="password"> Password</label>
             <input type = "password" name="password" className="login-input" placeholder="Password" id="password"/>
             </div>
           

             /* I want an onclick event here */
           <button type="button" className="login-btn" onClick ={this.submitLogin.bind(this)}>login</button>

        </div>
        </div>
        );
    }
}





class RegisterBox extends React.Component {
    //constructor class below the main application 
    //create login box
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            //couple of input fields
            <
            div className = "inner-container" >
            <
            div className = "header" >
            Register <
            /div> <
            div className = "box" >

            <
            div className = "input-group" >
            <
            label htmlFor = "username" > UserName < /label> <
            input type = "text"
            name = "username"
            placeholder = "username"
            id = "username" / >
            <
            /div>

            <
            div className = "input-group" >
            <
            label htmlFor = "password" > Password < /label> <
            input type = "password"
            name = "password"
            className = "login-input"
            placeholder = "Password"
            id = "password" / >
            <
            /div>


            /* I want an onclick event here */
            <
            button type = "button"
            className = "login-btn"
            onClick = {
                this.submitRegister.bind(this)
            } > Register < /button>

            <
            /div> <
            /div>
        );
    }
    }
reactDOM.render(<App />, document.getElementById("root"));
