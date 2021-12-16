import React, { Fragment } from 'react';
import HuddleLogo from '../../assests/logo.svg';
import { HeaderImage, HeaderButton } from '../styles/HuddleHeader.styled';

function HuddleHeader(props) {
    return (
        <Fragment>
            <HeaderImage Src={HuddleLogo} Alt={"Huddle Company"} />
            <HeaderButton>Try it free</HeaderButton>
        </Fragment>
    );
}

export default HuddleHeader;