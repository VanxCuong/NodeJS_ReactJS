import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="col-4 mb-1">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.images} alt="" />
                    <div className="card-body">
                    <p className="card-title float-left">{this.props.name}</p>
                    <p className="card-text float-right">{this.props.price}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductList;