import React from 'react'
import Avatar from './index';

import "../../index.css"

export default {
    title:'UI 组件/Avatar',
    component:Avatar
}

export const Default = () => {
    return <Avatar/>
}

export const Sizes = () => {
    return (
        <div className='styles'>
            <Avatar  size='48px'/>
            <Avatar  size='56px'/>
            <Avatar  size='64px'/>
        </div>
    )
}

export const Icons = () => {
    return (
        <div className='styles'>
            <Avatar  status='online'/>
            <Avatar  status='offline'/>
            <Avatar  size='64px' status='offline' statusIconSize='12px'/>
        </div>
    )
}