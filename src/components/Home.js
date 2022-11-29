import React, { useContext } from 'react'
import { DataContext } from '../Context'
import { NavLink } from 'react-router-dom'

//useContext => to read context data


function Home() {
  const context = useContext(DataContext)
  const [products] = context.productApi.products

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success"> Home</h3>
                
            </div>
        </div>

        <div className="row align-content-center justify-content-center d-flex">
          {
            products.map((item,index)=>{
              const {id , title , price , description ,rating ,stock,brand , category , images , thumbnail } = item
              return(
                <div className="col-md-4 mt-2" key={index}>
                  
                  <div className="card">
                  <NavLink to={`/product/${id}`}>
                    <img src={thumbnail} alt="no product" className='img-fluid rounded' />
                  </NavLink>
                    <div className="card-body">
                    <h6 className="text-success display-6 text-center">{title}</h6>
                    <div className='d-flex justify-content-between'>
                      <p className="text-secondary"> &#8377;{price} </p>
                      <p className="text-muted">
                        <strong>Rating:</strong>
                        <span className="text-warning">{rating}</span>
                      </p>
                    </div>
                   </div>
                   <div>
                      <p> {description} </p>
                   </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Home