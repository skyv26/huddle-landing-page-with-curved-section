import React from 'react';
import BGSectionTopMobile1 from '../../assests/bg-section-top-mobile-1.svg';
import BGSectionTopDesktop1 from '../../assests/bg-section-top-desktop-1.svg';
import HuddleIllustrationExamples from '../../components/HuddleIllustrationExamples/HuddleIllustrationExamples';
import { IllustrationWrapper, IllustrationSection } from '../../components/styles/HuddleIllustration.styled';
import { Img } from '../../components/styles/HuddleIllustration.styled';
const Illustration = (props) => {
    return (
        <IllustrationSection>
            <Img Src={BGSectionTopMobile1} className='mobile' Alt="mobile curved section" />
            <Img Src={BGSectionTopDesktop1} className='desktop' Alt="desktop curved section"  />
            <IllustrationWrapper>
                <HuddleIllustrationExamples />
            </IllustrationWrapper>
        </IllustrationSection>
    );
}

export default Illustration;