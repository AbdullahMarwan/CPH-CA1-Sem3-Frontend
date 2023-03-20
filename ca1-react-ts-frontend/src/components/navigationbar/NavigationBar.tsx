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

export default function NavigationBar() {
    return (
        <HeaderContainer
            render={({isSideNavExpanded, onClickSideNavExpand}) => (
                <>
                    <Header aria-label="IBM Platform Name">
                        <SkipToContent/>
                        <HeaderMenuButton
                            aria-label="Open menu"
                            isCollapsible
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="#" prefix="IBM">
                            [Platform]
                        </HeaderName>
                        <HeaderNavigation aria-label="IBM [Platform]">
                            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                            </HeaderMenu>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            isRail
                            expanded={isSideNavExpanded}
                            onOverlayClick={onClickSideNavExpand}>
                            <SideNavItems>
                                <SideNavMenu renderIcon={Fade} title="Category title">
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                </SideNavMenu>
                                <SideNavMenu renderIcon={Fade} title="Category title">
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem
                                        aria-current="page"
                                        href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                </SideNavMenu>
                                <SideNavMenu renderIcon={Fade} title="Category title">
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                                        Link
                                    </SideNavMenuItem>
                                </SideNavMenu>
                                <SideNavLink
                                    renderIcon={Fade}
                                    href="https://www.carbondesignsystem.com/">
                                    Link
                                </SideNavLink>
                                <SideNavLink
                                    renderIcon={Fade}
                                    href="https://www.carbondesignsystem.com/">
                                    Link
                                </SideNavLink>
                            </SideNavItems>
                        </SideNav>
                    </Header>
                </>
            )}
        />
    )
}