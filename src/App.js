import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';

import Basket from './components/Basket';
import Restaurant from './components/Restaurant';

const store = createStore(reducers)

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
