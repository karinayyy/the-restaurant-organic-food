import React from 'react'
import '../../Styles/Menu.css'

function Menu ({header, items, active, setActive}) {
    return(
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur' />
            <div className='menuContent'>
                <div className='menuHeader'>{header}</div>
                <ul>
                    {items.map(item => 
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;