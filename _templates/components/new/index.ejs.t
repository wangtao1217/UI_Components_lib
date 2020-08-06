---
to: src/components/<%= name %>/index.js
---



import React from 'react'
import PropTypes from 'prop-types'
import { Styled<%= name %> } from './style.js';

export default function <%= name %>({ children }, ...rest){ 
    return (
        
        <ThemeProvider theme={theme}>
            <Styled<%= name %> {...rest}>
            {children}
            </Styled<%= name %>>
        </ThemeProvider>
    )
}

<%= name %>.propTypes = {
   children: PropTypes.any
}



