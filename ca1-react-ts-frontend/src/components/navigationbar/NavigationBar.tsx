import {
    HeaderContainer,
    SkipToContent,
    HeaderMenuButton,
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    Header,
    HeaderGlobalBar,
    HeaderGlobalAction,
    Notification,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNav,
}
from "carbon-components-react";

import React from "react";
import {
    Fade,
    Search,
    Switcher
} from "@carbon/icons-react";
import CreatePerson from "../person/CreatePerson";
import {Constants} from "../misc/Constants";

const constants = new Constants();

export default function NavigationBar() {
    return (
        <HeaderContainer
            render={({isSideNavExpanded, onClickSideNavExpand}) => (
                <>
                    <Header aria-label="CA1 Gruppe P">
                        <SkipToContent/>
                        <HeaderMenuButton
                            aria-label="Open menu"
                            isCollapsible
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href={constants.NAVIGATION_PATH_FRONTPAGE} prefix="CA1">
                            Gruppe P
                        </HeaderName>
                        <HeaderNavigation aria-label="CA1 Gruppe P">
                            <HeaderMenuItem href={constants.NAVIGATION_PATH_FRONTPAGE}>Home</HeaderMenuItem>
                            {/*
                            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                            </HeaderMenu>
                            */}
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            isRail
                            expanded={isSideNavExpanded}
                            onOverlayClick={onClickSideNavExpand}>

                            <SideNavItems>
                                <SideNavMenu renderIcon={Fade} title="Persons" large>
                                    <SideNavMenuItem href={constants.NAVIGATION_PATH_LIST_PERSONS}>
                                        All persons
                                    </SideNavMenuItem>
                                   <SideNavMenuItem href={constants.NAVIGATION_PATH_CREATE_PERSON}>
                                     Create person
                                   </SideNavMenuItem>
                                 </SideNavMenu>
                                <SideNavMenu renderIcon={Fade} title="Hobbies" large>
                                    <SideNavMenuItem href={constants.NAVIGATION_PATH_LIST_HOBBIES}>
                                        All hobbies
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="#">
                                        Create hobby
                                    </SideNavMenuItem>
                                </SideNavMenu>
                                {/*}
                                <SideNavLink renderIcon={Fade}
                                             href="#"
                                             large={true}>
                                    Homepage
                                </SideNavLink>
                                */}
                            </SideNavItems>
                        </SideNav>
                    </Header>
                </>
            )}
        />
    )
}