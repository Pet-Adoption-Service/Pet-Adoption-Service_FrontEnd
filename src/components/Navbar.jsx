import React, { useState } from 'react'
import { useMediaQuery} from 'react-responsive'
import { Input, Menu } from 'semantic-ui-react'
import NavbarLg from './NavbarLg'
import NavbarMb from './NavbarMb'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')
  const handleItemClick = (e, { name }) => setActiveItem(name)
  const renderLinks=()=>{

    return <>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='find a pet'
        active={activeItem === 'find a pet'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='contact'
        active={activeItem === 'contact'}
        onClick={handleItemClick}
        />
      <Menu.Item
        name='FAQ'
        active={activeItem === 'faq'}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Menu Secondary attached size="mini">
          <Input icon='search' placeholder='Search...' />
          </Menu>
        </Menu.Item>
      <Menu.Item
        name='login'
        active={activeItem === 'login'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='register'
        active={activeItem === 'register'}
        onClick={handleItemClick}
      />  
      </Menu.Menu>
    </>
}

  const none = useMediaQuery({ query: '(max-width: 576px)' })
  const sm = useMediaQuery({ query: '(min-width: 576px)' })
  const md = useMediaQuery({ query: '(min-width: 768px)' })
  const lg = useMediaQuery({ query: '(min-width: 992px)' })
  const xl = useMediaQuery({ query: '(min-width: 1200px)' })
  const xxl = useMediaQuery({ query: '(min-width: 1400px)' })
    const size = {none, sm, md, lg, xl, xxl}
  return (
    <div>
      {size.sm ? <NavbarLg renderLinks={renderLinks}/> : <NavbarMb renderLinks={renderLinks}/>}
    </div>
  )
}

export default Navbar