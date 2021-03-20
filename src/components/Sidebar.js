import styled from 'styled-components';
import React from 'react'
import FiberManualRecordIcn from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from './SidebarOption';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons/';



function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                <hr />
                    <h2>papa fam hq</h2>
                    <h3>
                        <FiberManualRecordIcn />
                        sanjay mehra
                    </h3>
                <hr />    
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channels" />
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid var(--slack-color);
    max-width: 260px;
    margin-top: 60px;
    > hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    } 
    `;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px var(--slack-color);
    
    margin: 0px 13px 13px 15px;

    > .MuiSvgIcon-root{
         margin-top: 5px; 
        padding: 10px;
        color: var(--slack-color);
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
        flex: 1;
        
        > h2 {
            font-size: 15px;
            font-weight: 900;
            margin-bottom: 5px
        }

        > h3 {
            display: flex;
            font-size: 13px;
            font-weight: 400;
            align-items: center;
        }
        > h3 > .MuiSvgIcon-root{
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: green;
        }
        > hr{
        /* margin-top: 10px; */
        /* margin-bottom: 10px; */
        border: 1px solid #49274b;
    } 
`;