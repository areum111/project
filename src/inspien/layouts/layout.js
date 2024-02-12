import React from "react";
import styled from "styled-components";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({children, useType}) => {
    let visibleHeader = true;
    let visibleSidebar = true;
    const hideHeaderPageArr = ["/", "/main/login1", "/main/login2", "/main/login3", "/main/main1"];
    const hideSideBarPageArr = ["/", "/404", "/403", "/500"];
    const windowPath = window.location.pathname;
    if(hideHeaderPageArr.indexOf(windowPath) > -1){
        visibleHeader = false;
    }
    if(windowPath.indexOf("/main") > -1 || hideSideBarPageArr.indexOf(windowPath) > -1){
        visibleSidebar = false;
    }

    return (
        <Wrapper>
            {visibleHeader && <Header />}
            {visibleSidebar && <Sidebar />}
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    
`;

export default Layout;