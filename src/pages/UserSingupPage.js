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
<button>Sign up!</button>
</div>

        </div>
        );
    }
}
export default UserSingupPage;