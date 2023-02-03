import { useState } from 'react'
import { Menu, Sidebar} from 'semantic-ui-react'

function Overlay() {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.795)',
            position: 'fixed',
            height: '110vh',
            width: '100%',
        }} />
    )
}

function HamIcon() {
    return (<i className="big bars icon inverted" />)
}

function CloseIcon() {
    return (<i className="big close red icon" />)
}

function NavbarMB({renderLinks}) {
    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState(HamIcon())
    const [active, setActive] = useState("home")
    const handleItemClick = (e, { name }) => setActive(name)
    const hideSidebar = () => {
        setVisible(false)
        setIcon(HamIcon())
    }
    const showSidebar = () => {
        setVisible(true)
        setIcon(CloseIcon())
    }
    const toggleSidebar = () => {
        visible ? hideSidebar() : showSidebar()
    }
    return (
        <>
        {visible && <Overlay />}
        <Menu inverted
        size="tiny"
        borderless
        attached
        >
            <Menu.Menu position="right">
                <Menu.Item onClick={toggleSidebar}>
                    {icon}
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        <Sidebar as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
        >
        {renderLinks()}
        </Sidebar>
        </>
    )   
}

export default NavbarMB