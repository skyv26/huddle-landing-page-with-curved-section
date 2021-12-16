import React from 'react';
import FooterTopMobile from '../../assests/bg-footer-top-mobile.svg';
import FooterTopDesktop from '../../assests/bg-footer-top-desktop.svg';
import { Foooter, FooterWrapper } from '../../components/styles/HuddleFooter.styled';
import Contact from '../../components/HuddleFooter/Contact/Contact';
import Newsletter from '../../components/HuddleFooter/Newsletter/Newsletter';
import { Img } from '../../components/styles/HuddleIllustration.styled' 

const Footer = (props) => {
    return (
        <Foooter>
            <Img Src={FooterTopMobile} className='mobile' Alt={"Curved Section"} />
            <Img Src={FooterTopDesktop} className='desktop' Alt={"Curved Section"} />
            <FooterWrapper Display={'column'} BGColor={'hsl(192, 100%, 9%)'}>
                <Newsletter />
                <Contact />
            </FooterWrapper>
        </Foooter >
    );
}

export default Footer;