import React from 'react';
import { Headerr } from '../../components/styles/HuddleHeader.styled';
import HuddleHeader from '../../components/HuddleHeader/HuddleHeader';

const Header = (props) => {
    return (
        <Headerr>
            <HuddleHeader />
        </Headerr>
    );
}

export default Header;