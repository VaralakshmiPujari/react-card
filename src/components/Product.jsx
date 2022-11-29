import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context'

function Product() {
  const params = useParams()
  const [product, setProduct] = useState(false)

  // context ref
  const context = useContext(DataContext)
  const addToCart = context.productApi.addToCart

  const initData= useCallback(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
    .then(out => out.json())
    .then(res => {
      // console.log('single product =', res);
      setProduct(res)
    }).catch(err => console.log(err.message))
  },[])

  useEffect(() => {
    initData()
  },[])

  return (
    <div className="container">
        <div className="row mt-5">
          <div className='col-md-6'>
            <img src={product.thumbnail} alt="" className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <h4 className='display-4 text-uppercase text-center'> {product.title} </h4>

            <div className="d-flex justify-content-between">
              <h5>
                <strong>Price</strong>
                <span className="text-warning"> &#8377; 
                <ins className='text-success'>
                  {product.price - ( product.price * (product.discountPercentage/100))}
                </ins>
                <del className='text-danger'> {product.price} </del>
                 </span>
              </h5>
              <h5>
                <strong>Rating</strong>
                <span className="text-warning"> {product.rating} </span>
              </h5> 
            </div>
            <div className="card-content mt-3">
              <h6 className="text-warning">Product Details</h6>
              <p className="text-secondary"> {product.description}</p>
            </div>
            <hr/>

            <ul className='list-group'>
              <li className="list-group-item">
                <strong>Discount</strong>
                <span className="text-warning float-end">{product.discountPercentage} % </span>
              </li>
              <li className="list-group-item">
                <strong>Stock</strong>
                <span className="text-warning float-end">{product.stock}</span>
              </li>
              <li className="list-group-item">
                <strong>Brand</strong>
                <span className="text-warning float-end">{product.brand}</span>
              </li>
              <li className="list-group-item">
                <strong>Category</strong>
                <span className="text-warning float-end">{product.category}</span>
              </li>
            </ul>
            <div className='d-grid gap-2 mt-3'>
              <button onClick={() => addToCart(product)} className='btn btn-success'>Add to cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product  