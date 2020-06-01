import React from 'react'

export default function Header(props) {

    const setInfo = () => {
        props.setBill(!props.bill)
        props.getDate()
    }

    return (
        <div className="headers pt-4">
            <h3 className="text-center">Hệ thống quản lý Wibu</h3>
            <p className="text-center">Nhập xuất hóa đơn</p>
            <hr></hr>
            <div className="container">
                <div className="d-flex flex-row justify-content-between" style={{ fontWeight: 'bold' }}>
                    <p>Số hóa đơn đã tạo: {props.billNumber - 1}</p>
                    <p>Quầy: 001</p>
                    <p>Nhân viên: 0900681</p>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-success" onClick={() => setInfo()}>Tạo hóa đơn</button>
                </div>
            </div>
        </div>

    );
};
