import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Layout from './components/Layout';
import Home from './components/Home';
import Github,{sayhello} from './components/Github';
import Profile from './components/Profile';
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom';
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route loader={sayhello} path='/github' element={<Github/>}/>
        </Route>
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
)