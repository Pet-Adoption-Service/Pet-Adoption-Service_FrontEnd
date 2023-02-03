import React, { useState } from 'react'
import { Input, Menu} from 'semantic-ui-react'

export default function NavbarLg() {
  const [activeItem, setActiveItem] = useState('home')
  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Menu secondary>
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
          <Input icon='search' placeholder='Search...' />
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
    </Menu>
  )
}