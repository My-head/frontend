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
        <div> 
<h1> Sign up</h1>
<div>
<input placeholder="Your display name"
value={this.state.displayName}
onChange={this.onChangeDisplayName}
/>
</div>
<div>
<input placeholder="Your username"
value={this.state.userName}
onChange={this.onChangeUserName}
/>
</div>
<div>
<input placeholder="Your password" type="password"
value={this.state.password}
onChange={this.onChangePassword}
/>
</div>
<div>
<input placeholder="Repeat your password" type="password"
value={this.state.passwordRepeat}
onChange={this.onChangePasswordRepeat}
/>
</div>

<div>
<button onClick={this.onChlickSignup}>Sign up!</button>
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