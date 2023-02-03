import React, { useState } from 'react'
import { Input, Menu} from 'semantic-ui-react'

export default function NavbarLg({renderLinks}) {
  return (
    <Menu secondary attached size="tiny">
      {renderLinks()}
    </Menu>
  )
}