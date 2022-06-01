import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'
import { store } from '../store'

const Navbar = () => {
  // 03 with this hook we can access the whole state
  // useSelector((store) => {
  //   console.log(store)
  // })
  // 03 we can access the data in the store in multiple way either by accessing directly or by destructuring
  // const amount = useSelector((store) => store.cart.amount)
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
