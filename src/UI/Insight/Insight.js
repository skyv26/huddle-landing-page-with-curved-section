import React from 'react';
import { Section } from '../../components/styles/HuddleIntro.styled';
import HuddleInsight from '../../components/HuddleInsight/HuddleInsight';

const Insight = (props) => {
    return (
        <Section>
            <HuddleInsight />
        </Section>
    );
}

export default Insight;