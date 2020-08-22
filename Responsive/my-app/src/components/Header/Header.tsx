import React , {useState} from 'react';
import { Container , TwitchImg , LinksMenu , ContainerGeralMenu 
,ContainerSearch,ContainerUserInfo, HorizontalMenu
, InputSearch,SearchImg , SearchImgContainer , 
Chat,
Crown,Sino , HorizontalMenuContainer,HorizontalMenuNav
} from './style'


function App() {

    const [menu , setMenu] = useState(false)

  


  return (
   <Container>
       <ContainerGeralMenu>
       <TwitchImg/> 
       <LinksMenu> Seguindo </LinksMenu>
       <LinksMenu> Procurar </LinksMenu>
       <LinksMenu>  Esports </LinksMenu>
       <LinksMenu>  Musica </LinksMenu>
       <HorizontalMenuContainer onClick={() => setMenu(!menu)} >
                   <HorizontalMenu/>  
                  {menu && ( <HorizontalMenuNav>
                       <strong>Geral</strong>
                       <li> Anunciantes</li>
                       <li> Blogs </li>
                       <li> Desenvolvedores </li>
                       <li> Baixar Aplicativo </li>
                   </HorizontalMenuNav>)}
       </HorizontalMenuContainer>
        
       
       
       </ContainerGeralMenu>
       <ContainerSearch>
            <InputSearch placeholder='Buscar' />
             <SearchImgContainer>
             <SearchImg/> 
             </SearchImgContainer> 
               
       </ContainerSearch>
       <ContainerUserInfo>
           <div className='UtilToIcon'>
                     <Crown/>
                    <div className='HoverText' >
                        <span> Novo loot prime </span>
                    
                    </div>
           </div>      
           <div className='UtilToIcon'  >
                <div className='Notification' >2</div>
                <Sino/>
                <div className='HoverText' >
                    Notificações
                </div>
           </div>       
           <div className='UtilToIcon' >
               <Chat/> 
               <div className='HoverText' >
                    Sussurros
                </div>
          </div>
       
      
        <strong className='BuyBits'>
           Comprar Bits
        </strong>
        <img className='UserProfilePic' src='https://static.vecteezy.com/system/resources/previews/000/574/512/non_2x/vector-sign-of-user-icon.jpg'
         /> 
       </ContainerUserInfo>
        
   </Container>
  );
}

export default App;