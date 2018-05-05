import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import axios from 'axios';
import AddData from './AddData';
// import dataProducts from 'http://localhost:4000/getData01';
//  Lấy Dữ liệu từ Nodejs ( URL )
const getProductData=()=>{
  return (
    axios.get('/getData01') 
    .then(res=>res.data)
    .catch(err=>{
      console.log(err);
    }))
}; 
const addProductAction=(name,price,images)=>{
  return axios.post("/add",{name,price,images})

}
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      data:null
    }
  }
  
  componentWillMount() {
    if(this.state.data===null){
      getProductData().then((res)=>{
        this.setState({
          data:res
        });
      })
    }
  }
  printData=()=>{
    if(this.state.data!==null)
      return this.state.data.map((x,y)=>{
        return <ProductList key={y} name={x.name} price={x.price} images={x.images}></ProductList>
      })
         
  }
  HandleAddProduct=(name,price,images)=>{
    addProductAction(name,price,images)
    .then(res=>{
      if(res){
        // Cách 1 là gọi là url và set vào data.
        // getProductData().then((res)=>{
        //   this.setState({
        //     data:res
        //   });
        // })
        
        // Cách 2: tự thêm 1 dữ liệu.
        var item={name,price,images};
        var datatemp=this.state.data;
        datatemp.push(item);
        this.setState({
          data:datatemp
        });
      }
    })
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="">
        <Header></Header>
        <AddData HandleAddProduct={(a,b,c)=>{this.HandleAddProduct(a,b,c)}}></AddData>
        <div className="container">
          <div className="row">
            {this.printData()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
