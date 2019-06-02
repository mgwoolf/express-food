import React from 'react';
import axios from 'axios';

import "./Menu.scss"

import Loading from './Loading';

const MenuSectionItem = ({ name, img, description, options }) => {
    const imgSrc = img.length > 0 ? img : "img/no-image.svg"
    return (<div className="card mb-3 mb-mb-0">
                <img src={imgSrc} alt={ name } />
                <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text Menu-text">{ description }</p>
                <button className="btn btn-outline-primary btn-sm">Add to Order</button>
                </div>
            </div>);
}

const MenuSection = ({ name, items }) => {
    return (<div>
            <h3 className="my-3">{ name }</h3>
            <div className="row">
                { items.map((item, idx)=>{
                    return (<div key={ idx } className="col-sm"><MenuSectionItem {...item} /></div>)
                }) }
            </div>
        </div>);
}

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            menuData: [],
        };
    }

    componentDidMount() {
        axios.get('mock/menu.json')
             .then((res)=>{
                 console.log(res);
                 this.setState({
                     hasLoaded: true,
                     menuData: res.data
                 })
             })
    }

    render() {
        const { hasLoaded, menuData } = this.state;
        return (<div>{ hasLoaded ? menuData.map((section, idx) => (<MenuSection key={ idx } {...section} />)) : (<Loading screenReaderText="Menu is loading..." />) }</div>);
    }

}

export default Menu;
