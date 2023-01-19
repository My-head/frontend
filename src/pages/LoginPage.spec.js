import React from 'react';
import { render , fireEvent, waitForElementToBeRemoved,waitForElement, queryByText
  }
 from "@testing-library/react";
import {LoginPage} from './LoginPage';
import { wait } from '@testing-library/user-event/dist/utils';

describe('LoginPage', ()=>{


    describe('Layout', ()=>{
        it('has header or login', ()=> {
            const {container} =   render(<LoginPage/>);
            const header = container.querySelector('h1');

              expect(header).toHaveTextContent('Login');
    });
    it('has input for username',()=> {
        const {queryByPlaceholderText} = render (<LoginPage/>);
        const   usernameInput = queryByPlaceholderText('Your username');
        expect (usernameInput).toBeInTheDocument();
      });
      it('has input for password',()=> {
        const {queryByPlaceholderText} = render (<LoginPage/>);
        const   passwordInput = queryByPlaceholderText('Your password');
        expect (passwordInput).toBeInTheDocument();
      });
      it('has password type for password intup  ',()=> {
        const {queryByPlaceholderText} = render (<LoginPage/>);
        const   passwordInput = queryByPlaceholderText('Your password');
        expect (passwordInput).toBe('password');
      });
      it('has login btn', ()=> {
        const {container} =   render(<LoginPage/>);
        const button = container.querySelector('button ');
          expect(button).toBeInTheDocument();
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

            let userNameInput, passwordInput, button; 
            const setupForSubmit = (props) => {
              const rendered = render(<LoginPage {...props}/>);
              const {container, queryByPlaceholderText} = rendered;
                              
                 userNameInput = queryByPlaceholderText('Your username ');
                fireEvent.change(userNameInput, changeEvent('my-user-name'));
                
                   passwordInput = queryByPlaceholderText('Your password ');
                  fireEvent.change(passwordInput, changeEvent('my-password'));
                 button = container.querySelector.button;
                fireEvent.click(button);
            }


            it ('sets user value into state' , ()=> {
              const {queryByPlaceholderText} =   render(<LoginPage/>);
              const userNameInput = queryByPlaceholderText('Your username ');
              fireEvent.change(userNameInput, changeEvent('my-user-name'));
                expect(userNameInput).toHaveValue('my-user-name');
                }) ;
                it ('sets password value into state' , ()=> {
                  const {queryByPlaceholderText} =   render(<LoginPage/>);
                  const passwordInput = queryByPlaceholderText('Your password ');
                  fireEvent.change(passwordInput, changeEvent('my-password'));
                    expect(passwordInput).toHaveValue('my-password');
                    }) ;
                    
  it ('calls postLogin when the actions are provided in props and input fields have value', ()=>{
    const actions ={
      postLogin: jest.fn().mockResolvedValueOnce({})
    };

setupForSubmit({actions})
fireEvent.click(button);
expect(actions,postLogin ).toHaveBeenCalledTimes(1);
                 }) ;

 it ('does not throw exception when clicking the button when action not provided', ()=>{

setupForSubmit();
expect(()=>fireEvent.click(button)).not.toThrow();
                 }) ;

it ('calls postLogin when credentials in body', ()=>{
    const actions ={
      postLogin: jest.fn().mockResolvedValueOnce({})
    };

setupForSubmit({actions})
fireEvent.click(button);
const expectedUserObject = {
  username: 'my-user-name',
  password: 'my-password',
}
expect(actions,postLogin ).toHaveBeenCalledWith(expectedUserObject);
                 }) ;
 it ('enabled button when forms is not empty', ()=>{

setupForSubmit();
expect(button).toBeDisabled();
                 }) ;
it ('disabled button when username is  empty', ()=>{

setupForSubmit();
fireEvent.change(userNameInput,changeEvent(''));
expect(button).toBeDisabled();
                 }) ;
it ('disabled button when password is  empty', ()=>{

setupForSubmit();
fireEvent.change(passwordInput,changeEvent(''));
expect(button).toBeDisabled();
                 }) ;
it ('alert when login faled', async ()=>{
  const actions ={
    postLogin: jest.fn().mockResolvedValueOnce({
      response:{
        data:{
          message: 'Login faled'
        }
      }
    })
  };
  const {queryByTest} =   setupForSubmit({actions});

fireEvent.click(button);

const alert = await waitForElement(()=> queryByText('login failed'));
expect(alert).toBeInTheDocument();
                 }) ;

it ('clears alert when change username', async ()=>{
  const actions ={
    postLogin: jest.fn().mockResolvedValueOnce({
      response:{
        data:{
          message: 'Login faled'
        }
      }
    })
  };
  const {queryByText} =   setupForSubmit({actions});

fireEvent.click(button);

 await waitForElement(()=> queryByText('login failed'));
 fireEvent.change(userNameInput, changeEvent('update-username'));
const alert = queryByText('Login failed')

expect(alert).not.toBeInTheDocument();

                 }) ;
 it ('clears alert when change password', async ()=>{
  const actions ={
    postLogin: jest.fn().mockResolvedValueOnce({
      response:{
        data:{
          message: 'Login faled'
        }
      }
    })
  };
  const {queryByText} =   setupForSubmit({actions});

fireEvent.click(button);

 await waitForElement(()=> queryByText('login failed'));
 fireEvent.change(userNameInput, changeEvent('update-password'));
const alert = queryByText('Login failed')

expect(alert).not.toBeInTheDocument();

                 }) ;
             });

          });

          console.error=()=> {};