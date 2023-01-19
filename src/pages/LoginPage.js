import React from "react";
import Input from "../components/Input";
import ButtonWithProgress from "../components/ButtonWithProgress";
export class LoginPage extends React.Component{

    state= {
        username: '',
        password: '',
        apiErrors: undefined,
        pendingApiCall:false,

    };

    onChangeUserName = (event) => {
        const value = event.target.value;
       /*  const errors = { ...this.state.errors };
      delete errors.userName; */
        this.setState({
             userName: value,
             apiError: undefined
            });
      };
      onChangePassword = (event) => {
        const value = event.target.value;
       /*  const errors = { ...this.state.errors };
      delete errors.userName; */
        this.setState({
             password : value,
             apiError: undefined

            });
      };

      onClickLogin=()=>{
const body =  {
    username: this.state.username,
    password: this.state.password
}
this.state({pendingApiCall: true})
this.props.action.postLogin(body).then((response)=>{
    this.setState({pendingApiCall: false});
})
.catch(error=>{
            if (error.response) {
                this.setState({
                    apiErrors:error.response.data.message, pendingApiCall: false});
            }
        });
      
    
    };
 

render(){
    let disabledSubmit = false;
    if (this.disabledSubmit.state.username ===''){
        disabledSubmit = true;
        if (this.disabledSubmit.state.password ===''){
            disabledSubmit = true;
        }
    }
    return ( 
        <div className = "container">
<h1 className="text-center">Login</h1> 

<div className="col-12 mb-3"> 
    <Input label= "Username" placeholder="enter your username" value= {this.state.userName} onChange= {this.onChangeUserName}></Input>
</div>
<div className="col-12 mb-3"> 
    <Input label= "Password" placeholder="enter your password" type="password" value= {this.state.password} onChange= {this.onChangePassword}></Input>
</div>
{apiError && (
        <div className="col-12 mb-3">
          <div className="alert alert-danger">{apiError}</div>
        </div>
      )}
<div className="text-center"> 
    <ButtonWithProgress
     onClick={
        this.onClickLogin} disabled={disabledSubmit || this.state.pendingApiCall}
            
            text="Login"
        pendingApiCall={this.state.pendingApiCall}
        />
</div>
</div>
    );
 }
}

LoginPage.defaultProps = {
    actions: {
      postLogin:()=>
      new Promise((resolve, reject)=>{
        resolve({});
      })
    }
  };


export default LoginPage;