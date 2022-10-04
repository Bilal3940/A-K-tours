import React from 'react'
function Navbar(){
return(    
    <nav>
    <ul>
        <li className="brand">A-K Tours</li>
        <li><a href='/my-app'> Home</a></li>
        <li> <a href='/Reviews'>Reviews </a></li>
        <li> <a href='/contact'>Contact </a></li>
    </ul>
</nav>
)
}
export default Navbar;