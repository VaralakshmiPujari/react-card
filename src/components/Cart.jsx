import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'

function Cart() {
    const context = useContext(DataContext)
    const [cart, setCart] = context.productApi.cart

    const [subTotal,setSubTotal] = useState(0)
    const [discount,setDiscount] = useState(5)
    const [gst,setGst] = useState(5)
    const [dc,setDc] = useState(50)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev,item)=> {
                let discountPrice = item.price - (item.price * (item.discountPercentage/100))
                return prev + (discountPrice * item.quantity)
            }, 0)
  
            setSubTotal(total)

        }
        getTotal()

    }, [cart,subTotal])
    
    // product quantity increment
    const increment = (id) => {
        cart.forEach(item => {
            if(item.id === id) {
                item.quantity += 1
            }
        })
        setCart([...cart])
    }
     
    // product quantity decrement
    const decrement = (id) => {
        cart.forEach(item => {
            if(item.id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
            }
        })

        setCart([...cart])
    }

    const updateCart = async (cart) => {}

    const delItem = (id) => {
        if(window.confirm(`DO you want to remover product?`)) {
            cart.forEach((item,index) => {
                if(item.id === id) {
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
        }
    }

    if(cart.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-secondary">Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className="display-3 text-center">Cart</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-9">
                <div className="table table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                        <tr className='text-center'>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index) => {
                                const {id, title, price, thumbnail,quantity, discountPercentage} = item
                                return(
                                    <tr className='text-center' key={index} >
                                        <td>{ title }</td>
                                        <td>
                                            <img src={thumbnail} alt="no product" className="img-fluid" style={{width: '40px'}} />
                                        </td>
                                        <td> &#8377;
                                            <ins className='text-success'> 
                                            { price - (price * (discountPercentage/100))}
                                            </ins>
                                            <del className='text-danger'>
                                                {price}
                                            </del>
                                        </td>
                                        <td>
                                            <span onClick={() => decrement(id)} className='text-danger me-2' style={{ cursor: 'pointer'}}>
                                                <i className='bi bi-dash-circle'></i>
                                            </span>
                                            <strong className='text-secondary'>{ quantity }</strong>
                                            <span onClick={() => increment(id)} className='text-success ms-2' style={{ cursor: 'pointer'}}>
                                                <i className='bi bi-plus-circle'></i>
                                            </span>
                                        </td>
                                        <td>
                                            <button onClick={() => delItem(id)} className="btn btn-danger btn-sm">
                                                <i className='bi bi-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>    
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <h4>Cart Info</h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>sub Total</strong>
                                <span className="float-end text-success">
                                    (+) &#8377; {Math.round(subTotal)}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <strong>
                                    Discount <span className="text-warning"> {discount}%</span>(on SubTotal)
                                </strong>
                                <span className='float-end text-danger'>
                                    (-) &#8377; {Math.round(subTotal * (discount/100))}
                                </span>
                            </li>
                            <li className="list-group-item">
                                <strong>Delivery Charge</strong>
                                <span className="float-end text-success"> (+) &#8377; {dc}</span>
                            </li>
                        </ul>
                        <ul className="list-group mt-2">
                            <li className="list-group-item">
                                <strong>Total</strong>
                                <span className="text-success float-end">
                                    (=) &#8377; {Math.round((subTotal+dc) - (discount))}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer d-grid gap-2">
                        <button className="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart