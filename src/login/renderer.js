import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = { 
     isLoginOpen: true, isRegisterOpen: false
    };
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
          
          <div className = {"controller" + (this.state.isLoginOpen ? "selected-controller": "")} onClick ={this.showLoginBox.bind(this)}>
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
            username : "", email : "", password : "",
            errors: [],
            pwdState: null,
            //initialise it as null
        };
    }

    //two methods show validation error
    
     submitLogin(e) {}
    
    showValidationErr(elm, msg) {
        //element represents user name or password
        //grab state/errors and concatenate to form new array
        this.setState((prevState) => ({errors: [...prevState.errors, {elm, msg}]}) );
    }
    //takes the element which represents the element username input or password input
    clearValidationErr(elm){
        this.setState((prevState) => {
            let newArr = [];
            for(let err of prevState.errors){
                if(elm != err.elm){
                    newArr.push(err);
                    //while not equal push curent element to new array
                }
            }
            return {errors: newArr};
        });
    }
    
    
    
     
    
    onUsernameChange(e) {
        this.setState({username: e.target.value});
        this.clearValidationErr("username");
    }
    
    onEmailChange(e) {
        this.setState({email: e.target.value});
        this.clearValidationErr("email");
    }
    
    
    onPasswordChange(e) {
        this.setState({password: e.target.value});
          this.clearValidationErr("password");
    }
    
    
 submitRegister(e){
       //submit the form when click the submit button
     if(this.state.username == "") {
         
      this.showValidationErr("Username", "Usernme Cannot be empty!");
         
     } if (this.state.email == "") {
         this.showValidationErr("email", "Usernme Cannot be empty!");
     }  if (this.state.password == "")
          return this.showValidationErr("password", "Usernme Cannot be empty!");
   }
    
    //take array look through it and check is theres any elements regarding username and passwprd
}
    
    render() {
        let usernameErr = null,
            passwordErr = null, 
            emailErr = null;
        
        for( let err of this.state.errors){
            //loop through each error
            if(err.elm == "username"){
                UsernameErr = err.msg;
                
            } if (err.elm == "password") {
                passwordErr = err.msg;
            } if (err.elm == "email") {
                emailErr = err.msg; //xurrent error message
            }
        }
        
          return (
        //couple of input fields
        <div className = "inner-container">
           <div className = "header">
             Login
           </div>
           <div className="box">

             <div className="input-group">
             <label htmlFor="username"> UserName</label>
             <input type = "text" name="username" placeholder="username" id="username" className="login-input"/
              onChange ={this.onUsernameChange.bind(this)}/>
            <small className = "danger-error">{emailErr ? emailErr : ""}</small>

             </div>

    
         <div className="input-group">
             <label htmlFor="password"> Password</label>
             <input type = "password" name="password" className="login-input" placeholder="Password" id="Password"
              onChange= {this.onEmailChange.bind(this)}
             />
               <small className = "danger-error">{passwordErr ? passwordErr : ""}</small>
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
            placeholder = "Username"
            id = "username" / 
            onChange ={this.onUsernameChange.bind(this)}/>
            <small className = "danger-error">{usernameErr ? usernameErr : ""}</small>
            <
            /div>


            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
             <small className = "danger-error">{emailErr ? emailErr : ""}</small>
            </div>




            <
            div className = "input-group" >
            <
            label htmlFor = "password" > Password < /label> <
            input type = "password"
            name = "password"
            className = "login-input"
            placeholder = "Password"
            id = "password" 
            
            onChange = {this.onEmailChange.bind(this)}
   
            / >
            <small className = "danger-error">{passwordErr ? passwordErr : ""}</small>
           
            < div className = "password-state" >
                <
                div className = {
                    "pwd pwd-weak"
                } > < /div> <
                /div
            className = {
                    "pwd pwd-medium"
                } > < /div> <
                div className = {
                    "pwd pwd-strong"
                } > < /div>

                <
                /div>
              
            
              </div>


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
