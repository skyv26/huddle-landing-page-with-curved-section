import React from 'react';
import {NewsLetterWrapper, FooterParagraph, FooterHeading, Input, Form } from '../../../components/styles/HuddleFooter.styled';


const Newsletter = (props) => {
    return (
        <NewsLetterWrapper Display={'column'}>
            <FooterHeading>Newsletter</FooterHeading>
            <FooterParagraph>
                To recieve tips on how to grow your community, sign up
                to our weekly newsletter. We’ll never
                send you spam or pass on your email address
            </FooterParagraph>
            <Form Action=".">
                <Input Type="email" aria-label="email" />
                <Input Type="submit" Value="Subscribe" aria-label="submit" />
            </Form>
        </NewsLetterWrapper>
    );
}

export default Newsletter;
