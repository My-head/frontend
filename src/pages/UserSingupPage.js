import React from "react";

  export  class UserSingupPage extends React.Component{

    state = {
      displayName: '',
      userName: '',
      password: '',
      passwordRepeat: '',

    };
onChangeDisplayName = (event) => {
  const value = event.target.value;
  this.setState({ displayName: value});
};
onChangeUserName = (event) => {
  const value = event.target.value;
  this.setState({ userName: value});
};
onChangePassword = (event) => {
  const value = event.target.value;
  this.setState({ password: value});
};
onChangePasswordRepeat = (event) => {
  const value = event.target.value;
  this.setState({ passwordRepeat: value});
};

onChlickSignup = ()=>{
  
const user = {
userName: this.state.userName,
displayName:this.state.displayName,
password:this.state.password
};
  this.props.actions.postSignup(user);
};

    render(){
        return(
        <div className="conrainer"> 
<h1 className="text-center"> Sign up</h1>

<div className="col-12 mb-3">
  <label>DisplayName</label>
<input  className="form-control"
placeholder="Your display name"
value={this.state.displayName}
onChange={this.onChangeDisplayName}
/>
</div>

<div className="col-12 mb-3">
  <label>User name</label>
<input  className="form-control"
placeholder="Your username"
value={this.state.userName}
onChange={this.onChangeUserName}
/>
</div>

<div className="col-12 mb-3">
  <label>Password</label>
<input  className="form-control"
placeholder="Your password" type="password"
value={this.state.password}
onChange={this.onChangePassword}
/>
</div>

<div className="col-12 mb-3">
  <label>Repeat password</label>
<input  className="form-control"
placeholder="Repeat your password" type="password"
value={this.state.passwordRepeat}
onChange={this.onChangePasswordRepeat}
/>
</div>

<div className="text-center">
<button className="btn btn-primary" onClick={this.onChlickSignup}>Sign up!</button>
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