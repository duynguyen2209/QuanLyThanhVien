import React, { useState, useEffect } from 'react';
import './Admin.css';
import NumberFormat from 'react-number-format';
import axios from 'axios';

function Admin() {
  const url = "http://localhost:8800";
  const [customer, setCustomer] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCustomer()
  }, [])


  const fetchCustomer = async () => {
    try {
      const resDT = await axios({
        method: 'get',
        url: `${url}/api/customer`,
        headers: {}
      })
      const { data } = resDT
      setCustomer(data)
      console.log('khangia',data);
    } catch (e) {
      setError(e.message || 'Unknown error.')
    }
  }

  const handleDelete = async (id) => {
    setError('')

    try {
        const res = await axios.delete(`${url}/api/customer/${id}`)
        fetchCustomer()

    } catch (e) {
        setError(e.message || 'Unknown error.')
    } 
}
  return (
    <div className='wrapper'>
      <h1 className='header_title'>Quản lý thông tin thành viên rạp phim</h1>
      <div className='Container_Table'>
        <table className='TableMangage'>
          <thead>
            <tr>
              <th colSpan="4" className='detechborder1'>Danh sách thành viên</th>
              <th colSpan="4" className='detechborder2'>
                <NumberFormat maxLength={10}
                  className='input_search'
                  thousandSeparator={false} prefix={''}
                  placeholder='Tìm kiếm theo số điện thoại'
                  // value={this.state.datagroup.p_holdingrate}
                  decimalScale={0} allowNegative={false} />
              </th>
            </tr>
            <tr>
              <th>HỌ VÀ TÊN</th>
              <th>SỐ ĐIỆN THOẠI</th>
              <th>ĐỊA CHỈ
                (TỈNH/TP)</th>
              <th>EMAIL</th>
              <th>NGÀY SINH</th>
              <th>HẠNG</th>
              <th>NGÀY XEM GẦN NHẤT</th>
              <th>SỬA/XOÁ TÀI KHOẢN</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((item) => (             
              <tr>
                <td>{item.fullname}</td>
                <td>{item.phone_number}</td>
                <td>{item.location}</td>
                <td>{item.email}</td>
                <td>{item.dateofbirth}</td>
                <td></td>
                <td></td>
                <td >
                  <button className='button_edit btn-hover'>Sửa</button>
                  <button className='button_delete btn-hover' onClick={()=>handleDelete(item._id)}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin