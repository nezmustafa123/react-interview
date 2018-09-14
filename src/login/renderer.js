import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {};
    }
  render() {
      return (
       
      <div className ="root-container">
          
          <div className = "box-controller">
          
          <div className = "controller">
            Login
          </div>
             <div className = "controller">
              
              register

             </div>
          
          </div>
          
          <div className="box-container">
              
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

        };
    }

    render() {

        //couple of input fields
        <div className = "inner-container">
           
           <div className="box">

             <div className="input-group">
             <label htmlFor="username"> UserName</label>
             <input type = "text" name="username" placeholder="username" id="username"/>
             </div>
   
             <div className="input-group">
             <label htmlFor="password"> Password</label>
             <input type = "password" name="password" className="login-input" placeholder="Password" id="password"/>
             </div>
           

             /* I want an onclick event here */
           <button type="button" className="login-btn" onClick ={this.submitLogin.bind(this)}>login</button>

        </div>
        </div>
    }
}





class LoginBox extends React.Component {
    //constructor class below the main application 
    //create login box
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        //couple of input fields
        <div className = "inner-container">
           
           <div className="box">

             <div className="input-group">
             <label htmlFor="username"> UserName</label>
             <input type = "text" name="username" placeholder="username" id="username"/>
             </div>
   
             <div className="input-group">
             <label htmlFor="password"> Password</label>
             <input type = "password" name="password" className="login-input" placeholder="Password" id="password"/>
             </div>
           

             /* I want an onclick event here */
           <button type="button" className="login-btn" onClick ={this.submitLogin.bind(this)}>login</button>

        </div>
        </div>
    }
}

reactDOM.render(<App />, document.getElementById("root"));
