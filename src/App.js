import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import {Provider} from 'react-redux';
import store from './redux/store';
import './font.css'
import './App.css';
import SubCategoryPage from "./pages/SubCategoryPage";
import AddProductPage from "./pages/AddProductPage";
import ProductListPage from "./pages/productList/ProductListPage";


const About = () => <span>About</span>;

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div dir="rtl" style={{backgroundColor: '#fafafa'}}>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/brands">
                        <Brand/>
                    </Route>
                    <Route path="/category">
                        <SubCategoryPage/>
                    </Route>
                    <Route path="/addProductPage">
                        <AddProductPage/>
                    </Route>

                    <Route exact path="/productList">

                            <ProductListPage/>

                    </Route>
                    <Route path="/productList/:sort">
                        <ProductListPage/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
