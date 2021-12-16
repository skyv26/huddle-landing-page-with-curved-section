import React from 'react';
import { ContactWrapper,SocialWrapper, CompanyContact, FooterParagraph,FooterImage ,ImageIcon, Address } from '../../styles/HuddleFooter.styled';
import PhoneIcon from '../../../assests/icon-phone.svg';
import EmailIcon from '../../../assests/icon-email.svg';
import LogoFooter from '../../../assests/logo-footer.svg';

const Contact = (props) => {
    return (
        <ContactWrapper Display={'column'}>
            <FooterImage Src={LogoFooter} Alt={"Huddle Company"}/>
            <FooterParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris nulla quam, hendrerit lacinia
                vestibulum a, ultrices quis sem.
            </FooterParagraph>
            <CompanyContact Display={'column'}>
                <Address>
                    <ImageIcon Src={PhoneIcon} Alt="make a phone call" />
                    <a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
                </Address>
                <Address>
                    <ImageIcon Src={EmailIcon} Alt="email us" />
                    <a href="mailto:example@huddle.com">example@huddle.com</a>
                </Address>
            </CompanyContact>
            <SocialWrapper>
                <a href="https://www.facebook.com/skybrel/"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/skybrel/"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/vrma_aakash"><i class="fab fa-twitter-square"></i></a>
            </SocialWrapper>
        </ContactWrapper>
    );
}

export default Contact;