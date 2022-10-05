import React from "react";
import { render , cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import {UserSingupPage} from './UserSingupPage';
beforeEach(cleanup);
describe('UserSingupPage', ()=>{


    describe('Layout', ()=>{
  
        it('has header or Sing Up', ()=> {
          const {container} =   render(<UserSingupPage/>);
          const header = container.querySelector('h1');

            expect(header).toHaveTextContent('Sign up');

        });

it('has input to display name',()=> {
  const {queryByPlaceholderText} = render (<UserSingupPage/>);
  const displayNameInput = queryByPlaceholderText('Your display name');
  expect (displayNameInput).toBeInTheDocument();


});
it('has input to username',()=> {
  const {queryByPlaceholderText} = render (<UserSingupPage/>);
  const   userNameInput = queryByPlaceholderText('Your username');
  expect (userNameInput).toBeInTheDocument();


});
it('has input to password',()=> {
  const {queryByPlaceholderText} = render (<UserSingupPage/>);
  const   passwordInput = queryByPlaceholderText('Your password');
  expect (passwordInput).toBeInTheDocument();


});
it('has password type for input ',()=> {
  const {queryByPlaceholderText} = render (<UserSingupPage/>);
  const   passwordInput = queryByPlaceholderText('Your password');
  expect (passwordInput.type).toBe('password');


});
it('repeat your password',()=> {
  const {queryByPlaceholderText} = render (<UserSingupPage/>);
  const   passwordRepeatInput = queryByPlaceholderText('Repeat your password');
  expect (passwordRepeatInput).toBeInTheDocument();


});
it('has password type for repeatInput',()=> {
  const {queryByPlaceholderText} = render (<UserSingupPage/>);
  const   passwordRepeatInput = queryByPlaceholderText('Repeat your password');
  expect (passwordRepeatInput.type).toBe('password');


});
it('has submit btn',()=> {
  const {container} = render (<UserSingupPage/>);
  const   button = container.querySelector('button');
  expect (button).toBeInTheDocument();


        });
    });


describe ('Interactions', ()=>{

  const changeEvent = (content) =>{
    return{
    targer:{
      value: content
    }
  };
        };

        let button, displayNameInput, userNameInput, passwordInput, passwordRepeatInput;
        
        const setupForSubmit=(props)=>{
          
          const rendered = render(
            <UserSingupPage actions{...props} />
      
          );
           const {container, queryByPlaceholderText} = rendered;
           displayNameInput = queryByPlaceholderText('Your display name');
           userNameInput = queryByPlaceholderText('Your username');
           passwordInput = queryByPlaceholderText('Your password');
            passwordRepeatInput = queryByPlaceholderText('Repeat your password');
      
          fireEvent.change(displayNameInput, changeEvent('my-display-name'));
          fireEvent.change(userNameInput, changeEvent('my-user-name'));
          fireEvent.change(passwordInput, changeEvent('my-password'));
          fireEvent.change(passwordRepeatInput, changeEvent('my-password'));
      
           button = container.querySelector('button');
          return rendered;
        };
  it('sets displayName value into state', ()=> {
    const {queryByPlaceholderText} =   render(<UserSingupPage/>);
    const displayNameInput = queryByPlaceholderText('Your display name');
    fireEvent.change(displayNameInput, changeEvent('my-display-name'));
    expect(displayNameInput).toBeValid('my-display-name');
  });
  //<!-- toBeValid ! not toHaveValue-->

  it('set userName value into state', ()=> {
    const {queryByPlaceholderText} =   render(<UserSingupPage/>);
    const userNameInput = queryByPlaceholderText('Your username');
    fireEvent.change(userNameInput, changeEvent('my-user-name'));
   expect(userNameInput).toBeValid('my-user-name');
  });
  it('set password value into state', ()=> {
    const {queryByPlaceholderText} =   render(<UserSingupPage/>);
    const passwordInput = queryByPlaceholderText('Your password');
    fireEvent.change(passwordInput, changeEvent('my-password'));
    expect(passwordInput).toBeValid('my-password');
  });
  it('repeat password value into state', ()=> {
    const {queryByPlaceholderText} =   render(<UserSingupPage/>);
    const passwordRepeatInput = queryByPlaceholderText('Repeat your password');
    fireEvent.change(passwordRepeatInput, changeEvent('my-password'));
    expect(passwordRepeatInput).toBeValid('my-password');
  });

  it ('calls postSignup when filds are valid', ()=>{
    const actions ={
      postSignup: jest.fn().mockResolvedValueOnce({})
    };

    setupForSubmit({actions});  
    fireEvent.click(button);
    expect(actions.postSignup).toHaveBeenCalledTimes(1);
  });

  it ('not throw exception when clicking the button when action not provided', ()=>{
   
     setupForSubmit();

   
    expect(()=> fireEvent.click(button)).not.toThrow();
  });

  it ('calls post with user body when filds are valid', ()=>{
    const actions ={
      postSignup: jest.fn().mockResolvedValueOnce({})
    };

    setupForSubmit({actions});  
    fireEvent.click(button);
    const expectedUserObject = {
      userName: 'my-user-name',
      displayName: 'my-display-name',
      password: 'my-password'
    };
    expect(actions.postSignup).toHaveBeenCalledWith(expectedUserObject);
  });
});
});