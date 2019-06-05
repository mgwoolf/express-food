import React from 'react';
import { Provider } from 'react-redux'

import store from './store';

import Basket from './components/Basket';
import Restaurant from './components/Restaurant';

const App = () => (<Provider store={ store }>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8">
                                    <Restaurant />
                                </div>
                                <div className="col-sm-4">
                                    <Basket />
                                </div>
                            </div>
                        </div>
                   </Provider>);

export default App;
