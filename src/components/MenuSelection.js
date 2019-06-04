import React from 'react';

import OverlayHolder from './OverlayHolder'
import { MenuPriceTag } from './MenuItem';

import "./MenuSelection.scss";

const MenuOptionGroup = ({ optionGroup, addItemAction }) => {
    
    const { title, options, type } = optionGroup,
          isSingle = type==="single";
    
    return (<div>
                <h3>{ title }</h3>
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
            selectedOptions: {}
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

    _addToOder = e => {
        this.props.closeAction();
    }

    _closeAction = () => {
        this.props.closeAction();
    }

    render() {
        const { selectedOptions } = this.state,
              { name, price, options, description } = this.props;

        console.log(selectedOptions);
    
        return (<OverlayHolder>
                    <div className="MenuSelection">
                        <h2>{ name }</h2>
                        <MenuPriceTag price={ price } />
                        <p>{ description }</p>
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

export default MenuSelection;