import React, { useState } from 'react'
import '../../Styles/NavMenu.css'
import Menu from './Menu'
import MenuContent from './MenuContent'

function NavMenu(){
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:'Home', href: '/main'},
                    {value:'notHome', href: '/notmain'}]
    return (
        <div className='NavMenu'>
            <div className='burgerDiv'>
                <div className='burgerBtn' onClick={() => setMenuActive(!menuActive)}>
                    <span/> 
                </div>
            </div>
            <div className='rText'>
                <MenuContent />
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={'Burger Menu'} items={items} />
        </div>
    )
}

export default NavMenu;