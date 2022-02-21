import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginScreen from "../pages/LoginScreen"
import RegisterScreen from "../pages/RegisterScreen"
import {firebase} from "../firebase/config.js"
import { useDispatch } from "react-redux";
import { Login} from "../actions/authActions";
import AppScreen from "../pages/AppScreen";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { readActions } from "../actions/valueActions";
import { loadData } from "../helpers/loadData";

const AuthRouter = () => {
 
 const dispatch = useDispatch()
  
  const [log, setLog] = useState(false)

 useEffect(() => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if(user){
      const nominalData = await loadData(user.uid)
      dispatch(Login(user.uid, user.displayName), dispatch(readActions(nominalData)))
      setLog(true)
    } else {
      setLog(false)
    }
  })
 }, [dispatch])


  return (

      <Router>
        <Routes>
          <Route path="/login" element={
          <PublicRouter log={log}>
            <LoginScreen />
          </PublicRouter>}>
          </Route>
          <Route path="/register" element={
          <PublicRouter>
            <RegisterScreen log={log}/>
          </PublicRouter>}>
          </Route>
          <Route path="/" element={
          <PrivateRouter log={log}>
            <AppScreen />   
          </PrivateRouter>}>
          </Route>
        </Routes>
      </Router>
    )
};

export default AuthRouter;