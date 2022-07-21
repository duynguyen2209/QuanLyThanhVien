import React from 'react';
import './Admin.css';
import NumberFormat from 'react-number-format';

function Admin() {
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
            <tr>
              <td>Nguyen Duc Duy</td>
              <td>092929991</td>
              <td>Duc Giang</td>
              <td>lmao@gmail.com</td>
              <td>22/09/2000</td>
              <td>Vip Pro</td>
              <td>14/07/2022</td>
              <td >
                <button className='button_edit btn-hover'>Sửa</button>
                <button className='button_delete btn-hover'>Xoá</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin