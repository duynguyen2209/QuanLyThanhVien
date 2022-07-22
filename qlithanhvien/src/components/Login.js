import React from 'react';
import NumberFormat from 'react-number-format';
import './Login.css'

function Login() {
    return (
        <div>
            <form className='fomr-login'>
                <div className='form-inner'>
                    <h2 className='headerlogin'>Đăng nhập</h2>
                    <div className='wrapoverlogin'>
                        <div className='form-login'>
                            <div className='lable_login'>Số điện thoại<span className='red'>*</span>:</div>
                            <br />
                            <NumberFormat maxLength={10}
                                className='input_login'
                                required
                                thousandSeparator={false} prefix={''}
                                placeholder='Số điện thoại'
                                // value={this.state.datagroup.p_holdingrate}
                                decimalScale={0} allowNegative={false} />
                        </div>

                        <div className='form-login'>
                            <div className='lable_login'>Mật khẩu<span className='red'>*</span>:</div>
                            <br />
                            <input
                                className='input_login'
                                placeholder='Mật khẩu'
                                type="password"
                                required
                            // onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                            >
                            </input>
                        </div>
                    </div>
                    <div className='wrapbtn'>
                        <button type='Submit' className='btn-submit'>Đăng nhập</button>
                    </div>
                    <div className='wrapbtn'>
                        <button type='Submit' className='btn-submit'>Quên mật khẩu?</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login