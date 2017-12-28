
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import {logout} from './../../helpers.jsx';
import Login from './Login.jsx';

class Protected extends React.Component {
	
    constructor () {
        super(); 
				this.state = {  
					isAuthenticated:false  
    		    } 	    
    		    this.authenticate = this.authenticate.bind(this);
    }
    logout() {
    	logout()
    	.then(()=>{
    		this.setState({isAuthenticated: false});
    	})
     	
    }
  
    authenticate() {
           this.setState({isAuthenticated: true});
    }
    
    
	render() {
		return (<section>
		<h2>Protected Page</h2>
		
		{
          this.state.isAuthenticated===true ? 
          <div>
    	      <p>Welcome</p>
    	      <button onClick={()=>this.logout()}>Logout</button>
          </div>
        : 
         <Login isAuthenticated={this.authenticate} /> 
		}
			
		</section>);
	}
}

export default Protected;

