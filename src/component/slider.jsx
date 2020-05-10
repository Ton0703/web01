import React, { useState } from 'react'


function Slider() {
    const [visible, set] = useState(false)
    function handleClick(){
        set(!visible)
    }
    return (
        <div className='slider-container'>
            <div className='logo-container'>
                <div className="logo-svg">
                    <img src={require('../img/logo.svg')} alt=''/>
                </div>
            </div>
            <div className="menu-container">
                <div className="menu-btn" onClick={handleClick}>
                    <div className={`menu ${visible? 'rotate' : ''}`}>Menu</div>
                </div>
                <div className={`menu-list ${visible ? 'show' : ''}`}>
                    <ul>
                        <li>
                            <a href=''>关于我们</a>
                        </li>
                        <li>
                            <a href=''>初次使用的用户</a>
                        </li>
                        <li>
                            <a href=''>申请书</a>
                        </li>
                        <li>
                            <a href=''>联系我们</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="slider-link">
                <a href=''>申请<br />入口</a>
            </div>
        </div>
    )
}

export default Slider
  