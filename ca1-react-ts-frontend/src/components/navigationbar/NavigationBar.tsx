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

export default function NavigationBar(props: Props<any>) {
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
                        <HeaderName href="#" prefix="CA1">
                            Gruppe P
                        </HeaderName>
                        <HeaderNavigation aria-label="CA1 Gruppe P">
                            <HeaderMenuItem href="#">Home</HeaderMenuItem>
                            <HeaderMenuItem href="#">About</HeaderMenuItem>
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
                                    <SideNavMenuItem href="#">
                                        All persons
                                    </SideNavMenuItem>
                                   <SideNavMenuItem href="#">
                                     Create person
                                   </SideNavMenuItem>
                                 </SideNavMenu>
                                <SideNavMenu renderIcon={Fade} title="Hobbies" large>
                                    <SideNavMenuItem href="#">
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