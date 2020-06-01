import React from 'react'

export default function Customer(props) {

    const getCustomerID = (event) => {
        props.setCustomerID(event.target.value)
        if (event.target.value === "") {
            props.setHaveID(false)
        } else {
            props.setHaveID(true)
        }
    }

    const getCustomerPay = (event) => {
        props.setCustomerPay(event.target.value)
    }

    return (
        <div className="mt-2 d-flex flex-column" style={{ borderWidth: 0.5, border: 'solid', borderColor: 'grey' }}>
            <h6 style={{ marginTop: -10, background: 'white', marginLeft: 10, width: 170, textAlign: 'center' }}>Thông tin khách hàng</h6>
            <div className="form-group col-6">
                <label htmlFor="formGroupExampleInput4">Thẻ khách hàng</label>
                <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Nhập thẻ khách hàng" onChange={(event) => getCustomerID(event)} />
                <label className="mt-2" htmlFor="formGroupExampleInput">Số tiền khách trả</label>
                <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="Nhập số tiền" onChange={(event) => getCustomerPay(event)} />
            </div>
        </div>
    );
};
