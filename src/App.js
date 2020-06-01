import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HoaDon from './components/HoaDon';
import TableData from './components/TableData';
import Pay from './components/Pay';
import Customer from './components/Customer';
import Footer from './components/Footer';


function App() {
  const [bill, setBill] = useState(false);
  const [product, setProduct] = useState([])
  const [payment, setPayment] = useState(0)
  const [point, setPoint] = useState(0)
  const [outDate, setOutDate] = useState()
  const date = new Date()
  const [count, setCount] = useState(1)
  const [customerID, setCustomerID] = useState("")
  const [customerPay, setCustomerPay] = useState(0)
  const [haveID, setHaveID] = useState(false)
  const [billNumber, setBillNumber] = useState(1)

  const resetAfterPrint = () => {
    setBill(false)
    setProduct([])
    setPayment(0)
    setPoint(0)
    setOutDate()
    setCount(1)
    setHaveID(false)
    setCustomerID("")
    setCustomerPay(0)
  }

  const getDate = () => {
    if (!bill) {
      if (count === 1) {
        setOutDate(date.toLocaleString())
        setCount(0)
      }
    } else {
      setCount(1)
    }
  }

  const addProduct = (products) => {
    setProduct(product => [...product, products])
    setPayment(payment + products.price)
    setPoint(parseInt((payment + products.price) * 0.00005))
  }

  const updateCost = (products) => {
    let item = [...product]
    item.forEach((value) => {
      if (value.id === products.id) {
        if (value.quantity < products.quantity) {
          setPayment(payment + ((products.quantity - value.quantity) * value.price))
          setPoint(parseInt((payment + ((products.quantity - value.quantity) * value.price)) * 0.00005))
        } else {
          setPayment(payment - ((value.quantity - products.quantity) * value.price))
          setPoint(parseInt((payment - ((value.quantity - products.quantity) * value.price)) * 0.00005))
        }
        value.quantity = products.quantity
        value.productCost = products.productCost
      }
    })
    setProduct(item)
  }

  const deleteProduct = (productID) => {
    let tempData = [...product]
    tempData.forEach(item => {
      if (item.id === productID) {
        setPayment(payment - item.productCost)
        setPoint(parseInt((payment - item.productCost) * 0.00005))
      }
    })
    tempData = tempData.filter(item => item.id !== productID)

    setProduct(tempData)

  }

  return (
    <div className="container-fluid main">
      <Header bill={bill} setBill={setBill} getDate={getDate} billNumber={billNumber} />
      {
        bill ?   
        <div className="container content">
          <HoaDon bill={bill} addProduct={addProduct} date={outDate} />
          <TableData product={product} updateCost={updateCost} deleteProduct={deleteProduct} />
          <hr></hr>
          <Pay payment={payment} point={point} />
          <Customer setCustomerID={setCustomerID} setCustomerPay={setCustomerPay} setHaveID={setHaveID} />
          <Footer product={product} date={outDate} payment={payment} point={point} resetAfterPrint={resetAfterPrint} customerID={customerID} customerPay={customerPay} haveID={haveID} setBillNumber={setBillNumber} billNumber={billNumber} />
        </div>
        : <div></div>
      }
      
    </div>
  );
}

export default App;
