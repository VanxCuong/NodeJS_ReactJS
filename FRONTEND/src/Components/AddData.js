import React, { Component } from 'react';
class AddData extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            name:'',
            price:'',
            images:''
        }
    }
    isChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name]:value
        });
    }
    handleClick=()=>{
        const {name,price,images}=this.state;
        this.props.HandleAddProduct(name,price,images);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="col-8 mx-auto">
                        <form>
                        <div className="form-group">
                            <label>Tên Sản Phẩm</label>
                            <input onChange={(e)=>{this.isChange(e)}} type="text" name="name" className="form-control" placeholder="Tên Sản Phẩm"/>

                        </div>
                        <div className="form-group">
                            <label>Giá</label>
                            <input onChange={(e)=>{this.isChange(e)}} type="text" name="price" className="form-control" placeholder="Giá"  />

                        </div>
                        <div className="form-group">
                            <label>Đường Link Ảnh</label>
                            <input onChange={(e)=>{this.isChange(e)}} type="text" name="images" className="form-control" placeholder="Đường dẫn ảnh" />

                        </div>
                        <button type="reset" onClick={()=>{this.handleClick()}} className="btn btn-primary">Thêm Mới</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddData;