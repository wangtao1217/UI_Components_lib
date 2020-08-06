// import { styled } from "sty";
import styled,{css} from 'styled-components'

const CircleIcon = (color,size = '8px') => css`
        content:'';
        display:block;
        position:absolute;
        height:${size};
        width:${size};
        border-radius:50%;
        background:${color};
`;

//头像组件最外层容器
const AvatarContant = styled.div`
    position:relative;
    border:none;
`;

//在线状态
const StatusIcon = styled.div`
    position:absolute;
    top:2px;
    left:4px;
    &::before{
        ${({size}) => CircleIcon('white',size)}
        transform:scale(2);
    }
    &::after{
        ${({theme, status, size}) => {
            if(status === 'online'){
                return CircleIcon(theme.green)
            }
            if(status === 'offline'){
                return CircleIcon(theme.gray,size) 
            }
        }}
    }

`;


//头像圆形蒙版
const AvatarClip = styled.div`
    display:block;
    height:${({size})=>size};
    width:${({size})=>size};
    border-radius:100%;
    background:red;
    overflow:hidden;
`;


const AvatarImag = styled.img`
    height:100%;
    width:100%;
    object-fit:100%;
    object-position:center;
    background:#383e56;
`;

export { AvatarContant,StatusIcon,AvatarClip,AvatarImag };