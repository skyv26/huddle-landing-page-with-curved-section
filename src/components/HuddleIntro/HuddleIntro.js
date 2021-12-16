import React, { Fragment } from 'react';
import { IntroTitle, IntroPara, IntroButton } from '../styles/HuddleIntro.styled';

const HuddleIntro = (props) => {
    return (
        <Fragment>
            <IntroTitle>Build The Community Your Fans Will Love</IntroTitle>
            <IntroPara>
                Huddle re-imagines the way we build communities.
                You have a voice, but so does your audience.
                Create connections with your users as you engage
                in genuine discussion.
            </IntroPara>
            <IntroButton>Get Started For Free</IntroButton>
        </Fragment>
    );
}

export default HuddleIntro;