// noinspection ES6CheckImport
import React, {Component} from "react";
import s from './App.module.css';

import NavBar from "./components/NavBar/NavBar";
import {Navigate, Route} from "react-router";
import {BrowserRouter, Routes} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/Users-Container"
import HeaderContainer from "./components/Header/Header-Container";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/store-redux";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-Container'));
const ProfileParamsContainer = React.lazy(() => import('./components/Profile/ProfileParams-Container'));


class App extends Component {
    catchAllUnhandleErrors = (promiseRejectionEvent) =>{
        alert(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.app_wrapper}>
                <HeaderContainer/>
                <NavBar store={this.props.store}/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route exact path='/'
                               element={<Navigate to={"/profile/0"}/>}/>
                        <Route path='/login' element={
                            <React.Suspense fallback={<Preloader/>}>
                                <Login/>
                            </React.Suspense>}
                        />
                        <Route strict path='/profile/:userId' element={
                            <React.Suspense fallback={<Preloader/>}>
                                <ProfileParamsContainer/>
                            </React.Suspense>}
                        />
                        <Route path='/dialogs' element={
                            <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>}
                        />
                        <Route path='/users' element={
                            <React.Suspense fallback={<Preloader/>}>
                                <UsersContainer/>
                            </React.Suspense>}
                        />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                        <Route path='*' element={<div>404 NOT FOUND</div>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer store={store}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default SamuraiJSApp;

