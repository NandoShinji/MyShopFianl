import React, { useState, useEffect } from 'react'
import Product from './Product'

export default function Table(props) {
    const [product, setProduct] = useState(props.product)

    useEffect(() => {
        setProduct(props.product)   
    }, [props.product])

    return (
        <table className="table table-striped text-center" style={{ color: 'blue' }}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Xuất sứ</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá tiền</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((value, key) => (
                        <Product key={key} stt={key} id={value.id} name={value.name} origin={value.origin} price={value.price} quantity={value.quantity} productCost={value.productCost} updateCost={props.updateCost} deleteProduct={props.deleteProduct} />
                    ))
                }
            </tbody>
        </table>
    );
};
