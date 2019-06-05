import React from 'react';
import { connect } from 'react-redux';

import { addToBasket } from './../actions/basket';

import OverlayHolder from './OverlayHolder'
import { MenuPriceTag } from './MenuItem';


import "./MenuSelection.scss";

const MenuOptionGroup = ({ optionGroup, addItemAction }) => {
    
    const { title, options, type } = optionGroup,
          isSingle = type==="single";
    
    return (<div>
                <h4>{ title }</h4>
                { options.map((option, idx)=>{
                    return (<div key={idx} className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" name={title} type={ isSingle ? 'radio' : 'checkbox' } onClick={ addItemAction } value={ option } />
                                    { option }
                                </label>
                            </div>)
                })}
            </div>)
}

class MenuSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: {},
            qty: 1,
        };
    }

    _addSelectedOption = e => {
        let selectedOptions = this.state.selectedOptions;
        const {name, value} = e.target;

        selectedOptions[name] = value;

        this.setState({
            selectedOptions: selectedOptions
        });
    }

    _setQty = e => {
        this.setState({
            qty: e.target.value
        });
    }

    _addToOder = e => {
        const { selectedOptions, qty } = this.state;
        this.props.addToBasket(this.props, selectedOptions, qty);
        this.props.closeAction();
    }

    _closeAction = () => {
        this.props.closeAction();
    }

    render() {
        const { name, price, options, description } = this.props,
              qtyOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        
        return (<OverlayHolder>
                    <div className="MenuSelection">
                        <h2>{ name }</h2>
                        <MenuPriceTag price={ price } />
                        <p>{ description }</p>
                        <div className="MenuSelection-qty">
                            <h4>Quantity</h4>
                            <select className="form-control" onChange={ this._setQty } >
                                { qtyOptions.map((val, idx)=>(<option key={idx} value={val}>{ val }</option>))}
                            </select>
                        </div>
                        <div className="MenuSelection-options">
                            { options.map((optionGroup, idx)=>(<MenuOptionGroup key={idx} optionGroup={ optionGroup } addItemAction={ this._addSelectedOption } />)) }
                        </div>
                        <div className="MenuSelection-buttonBar">
                            <button className="btn btn-primary btn-block" type="button" onClick={ this._addToOder }>Add to Order</button>
                            <button className="btn btn-link " type="button" onClick={ this._closeAction }>Cancel</button>
                        </div>
                    </div>
                </OverlayHolder>)
    } 
}

const mapStateToProps = (state,props) => ({});

export default connect(mapStateToProps, {addToBasket})(MenuSelection);