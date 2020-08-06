


import React from 'react'
import PropTypes from 'prop-types'
import { StyledNavBar } from './style.js';

export default function NavBar({ children }, ...rest){ 
    return (
        <StyledNavBar {...rest}>
            {children}
        </StyledNavBar>
    )
}

NavBar.propTypes = {
   children: PropTypes.any
}



