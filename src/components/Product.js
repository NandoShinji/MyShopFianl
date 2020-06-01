import React from 'react'

const Product = (props) => {

    const changeProductCost = (event) => {
        let products = {}
        products.id = props.id
        products.name = props.name
        products.origin = props.origin
        products.price = props.price
        products.quantity = parseInt(event.target.value)
        products.productCost = event.target.value * props.price
        props.updateCost(products)
    }

    return (
        <tr>
            <th scope="row">{props.stt+1}</th>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.origin}</td>
            <td>{
                <input type="number" value={props.quantity} min="1" max="500" className="text-center" style={{ backgroundColor: 'rgba(190, 190, 190, 0.5)', color: 'blue', fontWeight: 'bold' }} onChange={(event) => changeProductCost(event)}></input>
            }
            </td>
            <td>{props.price}</td>
            <td>{props.productCost}</td>
            <td>
                <button style={{ border: 'none', background: 'none', color: 'blue' }} onClick={() => props.deleteProduct(props.id)}><i className="far fa-trash-alt"></i></button>
            
            </td>
        </tr>
    )
}

export default Product