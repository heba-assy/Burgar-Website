import React from 'react';
import { SidebarContainer, Icon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, CloseIcon } from './SidebarElements';

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Burger</SidebarLink>
                <SidebarLink to="/">Appetizers</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;