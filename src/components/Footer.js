import React, { useState, useEffect } from 'react'

export default function Footer(props) {
    const [product, setProduct] = useState(props.product)

    useEffect(() => {
        setProduct(props.product)
    }, [props.product])

    const resetAfterPrint = () => {
        if (props.payment !== 0 && props.customerPay >= props.payment && props.customerPay !== 0) {
            alert('In hóa đơn thành công!')
            props.setBillNumber(props.billNumber + 1)
            props.resetAfterPrint()
        } else {
            alert('Vui lòng kiểm tra lại nhập xuất thông tin hóa đơn!')
        }
    }

    
    const getXXXID = str => {
        let subStr = str.substring(str.length - 3, str.length)
        let newStr = "XXXXXXXXX".concat(subStr)
        return newStr

    }

    return (
        <div className="mt-4">
            <div className="text-center">
                <button type="button" className="btn btn-success mb-2" data-toggle="modal" data-target="#outputModal">Xuất hóa đơn</button>
                <div className="modal fade" id="outputModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Xuất hóa đơn</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container d-flex justify-content-between">
                                    <div className="header-hoa-don-name">
                                        <img src={require('./images/tree.jpg')} alt="..." width="50" height="50" />
                                        <h6>my-shop</h6>
                                    </div>
                                    <div className="header-hoa-don-info">
                                        <h6>Thôn cành lá - Xã cành cây</h6>
                                        <h6>Huyện gió mây - Tỉnh đồi núi</h6>
                                        <h6>012.34567.89</h6>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <h6>HÓA ĐƠN BÁN HÀNG</h6>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <p>Ngày bán: {props.date}</p>
                                        <p>HĐ: {"0000000" + props.billNumber}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Quầy: 001</p>
                                        <p>NVBH: 0900681</p>
                                    </div>
                                    <p>-------------------------------------------------------------------</p>
                                    <div className="d-flex justify-content-between">
                                        <p>Mặt hàng</p>
                                        <p>Đơn giá</p>
                                        <p>SL</p>
                                        <p>Thành tiền</p>
                                    </div>
                                    {
                                        product.map((value, key) => (
                                            <div key={key}>
                                                <p className="text-left">{value.name}</p>
                                                <div className="d-flex justify-content-between">
                                                    <p>{value.id}&nbsp;&nbsp;&nbsp;</p>
                                                    <p>{value.price}</p>
                                                    <p>{value.quantity}</p>
                                                    <p>{value.productCost}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <p>-------------------------------------------------------------------</p>
                                    <div className="d-flex justify-content-between">
                                        <p>TỔNG TIỀN PHẢI T.TOÁN</p>
                                        <p>{props.payment}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>TỔNG TIỀN ĐÃ GIẢM</p>
                                        <p>-0</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>TỔNG TIỀN KHÁCH TRẢ</p>
                                        <p>{props.payment}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>TIỀN MẶT</p>
                                        <p>{props.customerPay}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>TIỀN TRẢ LẠI</p>
                                        <p>{props.customerPay - props.payment}</p>
                                    </div>
                                    <p className="text-center">(Giá đã bao gồm thuế GTGT)</p>
                                    <p>-------------------------------------------------------------------</p>
                                    { props.haveID ?
                                        <div>
                                            <div className="d-flex justify-content-between">
                                                <p>ID thẻ khách hàng</p>
                                                <p>{getXXXID(props.customerID)}</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Điểm tích lũy</p>
                                                <p>{props.point}</p>
                                            </div>
                                            <p>-------------------------------------------------------------------</p>
                                    </div> : <div></div>
                                    }
                                    <p className="text-center">CHỈ XUẤT HÓA ĐƠN TRONG NGÀY</p>
                                    <p className="text-center">Tax invoice will be issued within same day</p>
                                    <p>--------------------------------------------------------------------</p>
                                    <p className="text-center">CẢM ƠN QUÝ KHÁCH! HẸN GẶP LẠI!</p>
                                    <p className="text-center">Hotline: 012.34567.89 Website: www.my-shop.com</p>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => resetAfterPrint()}>In hóa đơn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}