import styled from 'styled-components'
import {ChatSquare} from '@styled-icons/bootstrap'
import {VipCrown} from '@styled-icons/remix-line'
import {Bell} from '@styled-icons/bootstrap'
import Heart from '@styled-icons/bootstrap/SuitHeart'
import ArrowClose from'@styled-icons/boxicons-regular/ArrowFromRight'
import {MoreHorizontalOutline, ArrowIosForwardOutline,
ArrowIosBackOutline} from'@styled-icons/evaicons-outline'
import {MagnifyingGlass} from'@styled-icons/entypo'
import Backup from'@styled-icons/material-outlined/SettingsBackupRestore'
import Delete from'@styled-icons/typicons/DeleteOutline'
import  {Twitch} from'@styled-icons/fa-brands'

export const Container = styled.div` 
display: flex; 
justify-content: space-between;
width: 100%;
height: max(4vw , min(10vw, 1vw)) ;
 align-items: center;
 background: var(--branco);
 -webkit-box-shadow: -1px 1px 4px -1px rgba(168,166,168,1);
-moz-box-shadow: -1px 1px 4px -1px rgba(168,166,168,1);
box-shadow: -1px 1px 4px -1px rgba(168,166,168,1);
` 




export const ContainerGeralMenu = styled.div` 
display: flex; 
justify-content: space-around; 
align-items: center; 
width: 33%; 
`
export const TwitchImg = styled(Twitch)`
width: max(1.5vw , min(4vw , 2vw));
fill: blue!important; 

`
export const LinksMenu = styled.a`
font-family: 'Quicksand', sans-serif;
font-size: 1.2vw; 

 :hover { 
      color: #b104d4;
       cursor: pointer;
 }
`


export const HorizontalMenu = styled(MoreHorizontalOutline)` 
 width: 2vw; 
 padding: 2px; 
 border-radius: 3px; 
 cursor: pointer;
 :hover { 
     background: #cfcfcf
 }

`

export const HorizontalMenuNav = styled.ul` 
position: absolute;

width: 60px;
padding: 1vw;
width: 10vw;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 1vw;

background: var(--branco);
height: auto;
-webkit-box-shadow: 0px 2px 3px -1px rgba(135,133,135,1);
-moz-box-shadow: 0px 2px 3px -1px rgba(135,133,135,1);
box-shadow: 0px 2px 3px -1px rgba(135,133,135,1);
li { 
    list-style: none;
    padding: 0.4vw;
    border-radius: 0.3vw;
    width: 100%;
    font-size: 1vw;
    cursor: pointer;
    :hover { 
        background: #cfcfcf
    }
}

`
export const HorizontalMenuContainer = styled.div`
position: relative;
`





export const ContainerSearch = styled.div` 
display: flex; 
justify-content: center; 
align-items: center; 
width: 33%;
`
export const InputSearch = styled.input` 
outline: none;
border: solid 1.5px transparent; 
font-size: 1vw;
padding: 0.2vw; 
width: 20vw ;
height: 2vw;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
-moz-outline-radius-bottomleft: 10px; 
-moz-outline-radius-topleft: 10px; 
transition: border 0.1s; 
 :focus { 
    border:solid 1.5px  #ab02e3
 } 
`
export const SearchImgContainer = styled.div` 
position: static;
display: flex;
align-items: center;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
height: 2.6vw;

cursor: pointer; 
:hover { 
    background: #cfcfcf
}
`
export const SearchImg = styled(MagnifyingGlass)` 
width: max(5px , min(50px, 2vw)) ;
height: max(5px , min(18px, 2vw));
`






export const ContainerUserInfo = styled.div` 
.UtilToIcon { 
    cursor: pointer;
    position: relative;
    .Notification { 
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center; 
      left: 35% ;
      width: 2vw; 
      height: 1.2vw;
      border-radius: 2vw;
      background:red; 
      color: white;
    }
    .HoverText {   
      display:none;
  }
   :hover { 
    .HoverText { 
        position: absolute;
         top: 100%;
        right: 50%; 
        transform: translateX(60%);
        padding: 0.3vw;
       span { 
        white-space: nowrap;}
        font-size: 0.8vw;
        background: black;
        border-radius: 0.6vw;
        color: white;
        font-family: Roboto;
        display: block;
   }
   }
}
.BuyBits { 
    font-size: 1vw;
    padding: 6px;
:hover { 
    border-radius: 0.3vw;
 background: #cfcfcf;
}
}
.UserProfilePic { 
     width: 2.6vw;
}
width: 33%; 
display: flex; 
justify-content: flex-end; 
align-items: center;
* { 
     margin: 0.4vw;
}
`
export const Sino = styled(Bell)`
 padding:5px;
width: 1.5vw; 
div{ 
    position: absolute;
    
    background: red;
    width: 20px;
    height: 20px;
}
:hover { 
    border-radius: 0.3vw;
 background: #cfcfcf;
}
`
export const Chat = styled(ChatSquare)`
padding: 5px;
width: 1.5vw; 
position: relative;

:hover { 
    border-radius: 0.3vw;
 background: #cfcfcf;
}
`
export const Crown = styled(VipCrown)` 
padding: 5px;
width: 1.5vw; 
:hover { 
    border-radius: 0.3vw;
 background: #cfcfcf;
}
`