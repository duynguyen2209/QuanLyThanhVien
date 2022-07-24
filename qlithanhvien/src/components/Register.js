import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import './Register.css'
import axios from 'axios';

function Register() {
  const [fullname, Setfullname] = useState('');
  const [dateofbirth, Setdateofbirth] = useState('');
  const [phonenumber, Setphonenumber] = useState('');
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const [location, Setlocation] = useState('');
  const [level, Setlevel] = useState('Members');
  const url = "http://localhost:8800";

  const sendData = {
    fullname, dateofbirth, phonenumber, location, email, password, level
  }

  const handelChange = (set, value) => {
    set(value)
  }


  const handleSubmit = async (e) => {
    try {
      await axios.post(`${url}/api/customer/new`, {
        fullname: fullname,
        password: password,
        email: email,
        dateofbirth: dateofbirth,
        location: location,
        phone_number: phonenumber,
        level:'Member'
      });
      console.log('adsf');
    } catch (err) { }
  }

  return (
    <div>
      <form className='fomr-register'>
        <div className='form-inner'>
          <h2 className='headerRegister'>Đăng ký thông tin thành viên</h2>
          <div className='wrapover'>
            <div className='wrap1'>
              <div className='form-group'>
                <div className='lable_register'>Họ và tên<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  value={fullname}
                  placeholder='Họ và tên'
                  type="text"
                  required
                  onChange={(e) => handelChange(Setfullname, e.target.value)}
                >
                </input>
              </div>

              <div className='form-group'>
                <div className='lable_register'>Số điện thoại<span className='red'>*</span>:</div>
                <br />
                <NumberFormat maxLength={10}
                  className='input_register'
                  value={phonenumber}
                  required
                  thousandSeparator={false} prefix={''}
                  placeholder='Số điện thoại'
                  onValueChange={(e) => handelChange(Setphonenumber, e.value)}
                  decimalScale={0} allowNegative={false} />
              </div>

              <div className='form-group'>
                <div className='lable_register'>Mật khẩu<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  value={password}
                  placeholder='Mật khẩu'
                  type="password"
                  required
                  onChange={(e) => handelChange(Setpassword, e.target.value)}
                >
                </input>
              </div>
            </div>

            <div className='wrap2'>
              <div className='form-group'>
                <div className='lable_register'>Ngày sinh (dd/mm/yyyy)<span className='red'>* </span>:</div>
                <br />
                <input
                  className='input_register'
                  value={dateofbirth}
                  placeholder='Ngày sinh'
                  type="text"
                  required
                  onChange={(e) => handelChange(Setdateofbirth, e.target.value)}
                >
                </input>
              </div>

              <div className='form-group'>
                <div className='lable_register'>Email<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  value={email}
                  placeholder='@gmail.com'
                  type="text"
                  required
                  onChange={(e) => handelChange(Setemail, e.target.value)}
                >
                </input>
              </div>
              <div className='form-group'>
                <div className='lable_register'>Địa chỉ(Tỉnh/TP)<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  value={location}
                  placeholder='Địa chỉ'
                  type="text"
                  required
                  onChange={(e) => handelChange(Setlocation, e.target.value)}
                >
                </input>
              </div>

            </div>
          </div>
          <div className='wrapbtn'>
            <button className='btn-submit' onClick={handleSubmit}>Đăng ký</button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default Register;