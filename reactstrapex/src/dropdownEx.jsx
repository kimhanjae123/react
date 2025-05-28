import { useState } from 'react';
import {ButtonDropdown, DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

export default function DropdownEx(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = ()=> {
        setDropdownOpen(!dropdownOpen)
    }
    return(
        <>
        <ButtonDropdown toggle={toggle} isOpen={dropdownOpen} direction='up'>
            <DropdownToggle caret>
                Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem >Another Action</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
        </>
    )
}