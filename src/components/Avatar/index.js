import React from 'react'
import PropTypes from 'prop-types'
import { AvatarContant,StatusIcon,AvatarClip,AvatarImag } from './style.js';
import {ThemeProvider} from "styled-components"
import theme from '../../theme.js'

export default function Avatar({src, size = '48px', status, statusIconSize = '8px'}, ...rest){ //  ?? ...rest的好处 
    return (
        
        <ThemeProvider theme={theme}>
            <AvatarContant>
            {/* {status&& <StatusIcon status={status} size={statusIconSize}/>}  */}
            <StatusIcon status={status} size={statusIconSize}/>
                <AvatarClip size={size}>
                    <AvatarImag src={src}/>
                </AvatarClip>
            </AvatarContant>
        </ThemeProvider>
    )
}

Avatar.propTypes = {
    src:PropTypes.string,
    size:PropTypes.string,
    statusIconSize:PropTypes.string,
    status:PropTypes.oneOf(['online','offline'])
}



