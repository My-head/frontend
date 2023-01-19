import React from "react";
import Input from "../components/Input";
import ButtonWithProgress from "../components/ButtonWithProgress";

  export  class UserSingupPage extends React.Component{
    state = {
      displayName: '',
      userName: '',
      password: '',
      passwordRepeat: '',
      pendingApiCall:false,
      errors: {},
      passwordRepeatConfirmed: true,

    };
onChangeDisplayName = (event) => {
  const value = event.target.value;
  const errors = { ...this.state.errors };
delete errors.displayName;
  this.setState({ displayName: value, errors});
};
onChangeUserName = (event) => {
  const value = event.target.value;
  const errors = { ...this.state.errors };
delete errors.userName;
  this.setState({ userName: value, errors});
};
onChangePassword = (event) => {
  const value = event.target.value;
  const passwordRepeatConfirmed = this.state.passwordRepeat === value; 
  const errors = { ...this.state.errors };
  delete errors.password;

errors.passwordRepeat= passwordRepeatConfirmed 
? ''
: 'Does not match ro password' ;
  this.setState({ password: value, passwordRepeatConfirmed, errors});
};
 
onChangePasswordRepeat = (event) => {
  const value = event.target.value;
  const passwordRepeatConfirmed = this.state.password === value; 
const errors = { ...this.state.errors };
errors.passwordRepeat= passwordRepeatConfirmed 
? ''
: 'Does not match ro password' ;
 
  this.setState({ passwordRepeat: value, passwordRepeatConfirmed, errors});
};



onChlickSignup = ()=>{
  
const user = {
userName: this.state.userName,
displayName:this.state.displayName,
password:this.state.password
};
this.setState({pendingApiCall: true});
  this.props.actions.postSignup(user).then((response)=>
  {
    this.setState({pendingApiCall: false});
  })
  .catch(apiErrors =>{
    let errors = {...this.state.errors}
    if(apiErrors.response.data && apiErrors.response.data.validationErrors)
    {
errors= {...apiErrors.response.data.validationErrors}

    }
    this.setState({pendingApiCall: false, errors});
  });
};

    render(){
        return(
        <div className="conrainer"> 
<h1 className="text-center"> Sign up</h1>

<div className="col-12 mb-3">
<Input  
placeholder="Your display name"
value={this.state.displayName}
onChange={this.onChangeDisplayName}
hasError={this.state.errors.displayName && true}
error={this.state.errors.displayName } 
/>
</div>

<div className="col-12 mb-3">
  <Input 
  placeholder="Your username"
value={this.state.userName}
onChange={this.onChangeUserName}
hasError={this.state.errors.displayName && true}
error={this.state.errors.displayName } 
/>
</div>

<div className="col-12 mb-3">
<Input 
placeholder="Your password" type="password"
value={this.state.password}
onChange={this.onChangePassword}
hasError={this.state.errors.displayName && true}
error={this.state.errors.displayName } 
/>
</div>

<div className="col-12 mb-3">
<Input 
placeholder="Repeat your password" type="password"
value={this.state.passwordRepeat}
onChange={this.onChangePasswordRepeat}
hasError={this.state.errors.displayName && true}
error={this.state.errors.displayName } 
/>
</div>

<div className="text-center">
<ButtonWithProgress onClick={this.onChlickSignup}
disabled={
  this.state.pendingApiCall || !this.state.passwordRepeatConfirmed}

  pendingApiCall={this.state.pendingApiCall } text="sign up!" 
  />
</div>
</div>
        );
    }
}
UserSingupPage.defaultProps = {
  actions: {
    postSignup:()=>
    new Promise((resolve, reject)=>{
      resolve({});
    })
  }
};
export default UserSingupPage;