import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/config'

export const googleLogin = () => {
 
  return(dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(({user}) => {
       dispatch(Login(user.uid, user.displayName))
    })
  }
};

export const Register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
          await user.updateProfile({displayName: username})
          dispatch(
            Login(user.uid, user.displayName)
          )
        })
      }
}

export const Login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
        uid,
        displayName
    }  
  }
}



export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch({
      type: types.logout
    })
  }
}


