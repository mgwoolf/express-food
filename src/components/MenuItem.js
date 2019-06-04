import React from 'react';

import MenuSelection from './MenuSelection';

import { showPrice } from './../helpers/pricing';

export const MenuPriceTag = ({ price }) => (<span className="badge badge-pill badge-secondary">{ showPrice(price) }</span>);

export const MenuImage = ({ imgSrc, altText }) => {
    imgSrc = imgSrc.length>0 ? imgSrc : "img/no-image.svg";
    return (<img src={imgSrc} alt={ altText } />);
}

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOptions: false
        }
    }

    _showOptions = () => {
        this.setState({
            showOptions: !this.state.showOptions
        });
    }

    render() {

        const { showOptions } = this.state,
              { name, price, img, description }  = this.props;

        return (<>
                { showOptions && (<MenuSelection { ...this.props } closeAction={ this._showOptions } />) }
                <div className="card mb-3 mb-mb-0">
                    <MenuImage imgSrc={img} altText={ name } />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <h5><MenuPriceTag price={ price } /></h5>
                        <p className="card-text Menu-text">{ description }</p>
                        <button className="btn btn-outline-primary btn-sm" onClick={ this._showOptions }>Add to Order</button>
                    </div>
                </div>
                </>);
    }

}

export default MenuItem;