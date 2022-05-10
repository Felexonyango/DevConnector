import  '@testing-library/jest-dom/extend-expect'
import {register,login} from '../../actions/auth'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { initialState } from '../../reducers/auth';
// import fetchMock from 'fetch-mock';

import {
    REGISTER_SUCCESS,
    
    LOGIN_SUCCESS,
  
  } from "../../actions/types";

  const API_URL = 'http://localhost:5000'


const createStore = configureMockStore([thunk])

const store = createStore(initialState)


  describe('async action', () => {
    afterEach(() => {
        nock.cleanAll()
      })
 describe("AUTH",()=>{


    it('creates USER in actions  when user register succes',async() => {
        nock(API_URL)
          .post("/api/users")
          .reply(200, { data: 'Registered  successfully'})
            const expectedAction = {
            type:REGISTER_SUCCESS
            
        }

       const action =  store.dispatch(register({

            name:"example",
            email:'example@x.com',
            password: "password",
            terms:true

        })).then(() => {
            expect(action).toEqual(expectedAction)
        })
   
        
      })
      it('creates LOGIN_REQUEST and LOGINSUCCESS when correct username and password provided',async() => {
        nock(API_URL)
          .post("/api/auth")
          .reply(200, { data: 'Logged in   successfully'})


            const expectedAction = {
            type:LOGIN_SUCCESS,
            isAuthenticated: true,
            loading: false,
            
            
            
        }

       const action =  store.dispatch(login({
            email:'example@gmail.com',
            password: "testpassword",
     

        })).then(() => {
            expect(action).toEqual(expectedAction)
        })
   
        
      })



    
 })
     
    

})