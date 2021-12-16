import React, { Fragment } from 'react';
import { IllustrationArticle, IllustrationImg, IllustrationHeading, IllustrationPara, TextWrapper, Img } from '../styles/HuddleIllustration.styled';
import GrowTogether from '../../assests/illustration-grow-together.svg';
import Conversation from '../../assests/illustration-flowing-conversation.svg';
import BGSectionBottomMobile1 from '../../assests/bg-section-bottom-mobile-1.svg'
import BGSectionBottomDesktop1 from '../../assests/bg-section-bottom-desktop-1.svg'
import BGSectionBottomMobile2 from '../../assests/bg-section-bottom-mobile-2.svg'
import BGSectionBottomDesktop2 from '../../assests/bg-section-bottom-desktop-2.svg'
import BGSectionTopDesktop2 from '../../assests/bg-section-top-desktop-2.svg'
import BGSectionTopMobile2 from '../../assests/bg-section-top-mobile-2.svg'
import { IntroTitle, IntroButton } from '../styles/HuddleIntro.styled';
import Users from '../../assests/illustration-your-users.svg';

const HuddleIllustrationExamples = (props) => {
    return (
        <Fragment>
            <IllustrationArticle>
                <IllustrationImg as="img" src={GrowTogether} alt="Grow Together" className='ArticleImg' />
                <TextWrapper>
                    <IllustrationHeading>Grow Together</IllustrationHeading>
                    <IllustrationPara>
                        Generate meaningful discussions with your audience and
                        build a strong, loyal community. Think of the insightful
                        conversations you miss out on with a feedback form.
                    </IllustrationPara>
                </TextWrapper>
            </IllustrationArticle>
            <Img Src={BGSectionBottomMobile1} className='mobile' Alt="Curve section" />
            <Img Src={BGSectionBottomDesktop1} className='desktop' Alt="Curve section" />
            <IllustrationArticle>
                <IllustrationImg as="img" src={Conversation} className='ArticleImg' alt="Vector graphics, Group of people doing meeting" />
                <TextWrapper>
                    <IllustrationHeading>Flowing Conversations</IllustrationHeading>
                    <IllustrationPara>
                        You wouldn't paginate a conversation in real life,
                        so why do it online? Our threads have just-in-time
                        loading for a more natural flow.
                    </IllustrationPara>
                </TextWrapper>
            </IllustrationArticle>
            <Img Src={BGSectionTopMobile2} className='mobile' Alt="Curved Section" />
            <Img Src={BGSectionTopDesktop2} className='desktop' Alt="Curved Section" />
            <IllustrationArticle>
                <IllustrationImg as="img" src={Users} alt="Vectors illustrations of user" className='ArticleImg' />
                <TextWrapper>
                    <IllustrationHeading>Your Users</IllustrationHeading>
                    <IllustrationPara>
                        It takes no time at all to integrate Huddle with
                        your app's authentication solution. This means,
                        once signed in to your app, your users can start
                        chatting immediately.
                    </IllustrationPara>
                </TextWrapper>
            </IllustrationArticle>
            <Img Src={BGSectionBottomMobile2} className='mobile' Alt="Curve section" />
            <Img Src={BGSectionBottomDesktop2} className='desktop' Alt="Curve section" />
            <IllustrationArticle>
                <TextWrapper className='LastSection'>
                    <IntroTitle>Ready To Build Your Community?</IntroTitle>
                    <IntroButton>Get Started For Free</IntroButton>
                </TextWrapper>
            </IllustrationArticle>

        </Fragment>
    );
}

export default HuddleIllustrationExamples;