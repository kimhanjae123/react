import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Navbar,Nav,NavItem,NavLink,UncontrolledDropdown
    ,DropdownItem,DropdownMenu,NavbarBrand,NavbarToggler,
    DropdownToggle} from 'reactstrap';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
     const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color = "right" light expand="md">
            <NavbarBrand href="/"><i><b>KostaBank</b></i></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink href="/">로그인</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/join">회원가입</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                    <DropdownToggle  tag="a" nav caret>계좌</DropdownToggle >
                    <DropdownMenu>
                        <DropdownItem tag="a" href="/makeAccount">계좌개설</DropdownItem>
                        <DropdownItem tag="a" href="/deposit">입금</DropdownItem>
                        <DropdownItem tag="a" href="/withdraw">출금</DropdownItem>
                        <DropdownItem tag="a" href="/accountInfoForm">계좌조회</DropdownItem>
                        <DropdownItem tag="a" href="/transfer">계좌이체</DropdownItem>
                        <DropdownItem tag="a" href="/allAccountInfo">전체계좌조회</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    );
}

export default Header;