import React, { useState } from 'react'
import Data from '../components/data.json'

export default function HoaDon(props) {
    const data = Data
    const [id, setId] = useState('')
    const [name, setName] = useState('Tên sản phẩm')
    const [origin, setOrigin] = useState('Xuất sứ')
    const [price, setPrice] = useState(0)
    const [check, setCheck] = useState(false)

   
    const getProductInfo = (event) => {
        setId(event.target.value)
        data.forEach((item) => {
            if (item.id === event.target.value) {
                setName(item.name)
                setOrigin(item.origin)
                setPrice(item.price)
                setCheck(true)

            }
            if (item.id === id) {
                setName('item.name')
                setOrigin('item.origin')
                setPrice('item.price')
                setCheck(false)
            }
        })

    }

    const addProduct = () => {
        if (check) {
            let item = {}
            item.id = id;
            item.name = name;
            item.origin = origin;
            item.price = price;
            item.quantity = 1;
            item.productCost = price
            props.addProduct(item)
        } else {
            alert('Sản phẩm không tồn tại! Vui lòng kiểm tra lại!')
        }
    }

        return (
            <div className="mt-4">
                <div className="">

                    <h5>Hóa đơn bán hàng</h5>
                    <div className="d-flex justify-content-between">
                        <h6>Ngày xuất: {props.date}</h6>

                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Thêm sản phẩm
                    </button>
                    </div>
                </div>
                <hr></hr>

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thêm sản phẩm</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Mã sản phẩm</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Mã sản phẩm" onChange={(event) => getProductInfo(event)} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Tên sản phẩm</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" value={name} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Xuất sứ</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput3" value={origin} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Giá bán</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput4" value={price} disabled />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => addProduct()}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Table*/}
                
                {/* <hr></hr>
                <Pay cost={cost} point={point} />
                <Customer /> */}
            </div>

        );
    
};
