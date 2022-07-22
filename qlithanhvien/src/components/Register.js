import React from 'react';
import NumberFormat from 'react-number-format';
import './Register.css'

function Register() {
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
                  placeholder='Họ và tên'
                  type="text"
                  required
                // onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                >
                </input>
              </div>

              <div className='form-group'>
                <div className='lable_register'>Số điện thoại<span className='red'>*</span>:</div>
                <br />
                <NumberFormat maxLength={10}
                  className='input_register'
                  required
                  thousandSeparator={false} prefix={''}
                  placeholder='Số điện thoại'
                  // value={this.state.datagroup.p_holdingrate}
                  decimalScale={0} allowNegative={false} />
              </div>

              <div className='form-group'>
                <div className='lable_register'>Mật khẩu<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  placeholder='Mật khẩu'
                  type="password"
                  required
                // onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                >
                </input>
              </div>
            </div>

            <div className='wrap2'>
              <div className='form-group'>
                <div className='lable_register'>Ngày sinh<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  placeholder='Ngày sinh'
                  type="text"
                  required
                // onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                >
                </input>
              </div>

              <div className='form-group'>
                <div className='lable_register'>Email<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  placeholder='Email'
                  type="text"
                  required
                // onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                >
                </input>
              </div>
              <div className='form-group'>
                <div className='lable_register'>Địa chỉ(Tỉnh/TP)<span className='red'>*</span>:</div>
                <br />
                <input
                  className='input_register'
                  placeholder='Địa chỉ'
                  type="text"
                  required
                // onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                >
                </input>
              </div>

            </div>
          </div>
          <div className='wrapbtn'>
            <button type='Submit' className='btn-submit'>Đăng ký</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;