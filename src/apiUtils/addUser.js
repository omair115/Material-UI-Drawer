import API from './API'
import {Config} from '../Config'

 export const GetAllUsers = () => {

  const config = {
    headers:
      {
      
      },
      params: {
       
      
      },
  }
    let URL = Config
    const myAPI = new API({ url: `${URL}`})
    myAPI.createEntity({ name: 'users' })
    return myAPI.endpoints.users.getAll();

  }
