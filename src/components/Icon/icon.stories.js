
import React from 'react'
import Icon from './index';
import { ReactComponent as smilIcon } from "../../source/icons/smile.svg";

import "../../index.css"

export default {
    title:'UI 组件/Icon',
    component: Icon
}

export const Default = () => ( < Icon icon={smilIcon}/>)
