import React, { Fragment } from 'react';
import ScreenMockup from '../../assests/screen-mockups.svg';
import IconMessage from '../../assests/icon-messages.svg';
import IconCommunity from '../../assests/icon-communities.svg';
import { InsightImage, InsightDisplay, InsightFlex, InsightImageIcon } from '../styles/HuddleInsight.styled';

const HuddleInsight = (props) => {
    return (
        <Fragment>
            <InsightDisplay Display={"column"}>
                <InsightImage Src={ScreenMockup} Alt={"Insights Mockup"} />
                <InsightDisplay Display={"column"} className='InsightFlexDisplay'>
                    <InsightFlex Display={"column"}>
                        <InsightImageIcon className="firstChildImage" Src={IconCommunity} Alt={"Community Mockup"} />
                        <p className="firstChild">1.4k+<span>Communities Formed</span></p>
                    </InsightFlex>
                    <InsightFlex>
                        <InsightImageIcon Src={IconMessage} Alt={"Message Mockup"} />
                        <p>2.7m+<span>Messages Sent</span></p>
                    </InsightFlex>
                </InsightDisplay>
            </InsightDisplay>
        </Fragment>
    );
}

export default HuddleInsight;