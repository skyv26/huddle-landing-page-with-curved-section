import styles from 'styled-components';
import { device } from './Devices/devices';


export const InsightImage = styles.img.attrs(props => ({
    src: props.Src,
    alt: props.Alt
}))`
    display: inline-block;
    width: 100%;
    margin: auto;
    margin-top: 1rem;
    
    @media ${device.mobileVS}{
        margin-top: 1.2rem;
    }

    @media ${device.mobileS}{
        margin-top: 1.25rem;
    }

    @media ${device.mobileM}{
        margin-top: 1rem;
    }

    @media ${device.duo}{
        margin-top: -2rem;
    }

    @media ${device.laptopM}{
        width: 90%;
    }
    
`;

export const InsightImageIcon = styles.img.attrs(props => ({
    src: props.Src,
    alt: props.Alt
}))`
    display: inline-block;
    height: 1.6rem;
    width: 2rem;

    @media ${device.mobileVS}{
        height: 1.6rem;
        width: 2.1rem;
    }

    @media ${device.mobileS}{
        height: 1.75rem;
        width: 2.2rem;
    }

    @media ${device.mobileM}{
        height: 1.8rem;
        width: 2.25rem;
    }

    @media ${device.duo}{
        height: 1.8rem;
        width: 2.25rem;
    }
    @media ${device.landscape}{
        height: 2rem;
        width: 2.6rem;
    }

    @media ${device.laptopS}{
        height: 2.25rem;
        width: 3rem;
    }
    @media ${device.laptopM}{
        height: 3.25rem;
        width: 3.75rem;
        margin-left: 1rem;
    }
`;


export const InsightDisplay = styles.div`
    display: flex;
    width: 90%;
    margin: auto;
    flex-direction: ${props => props.Display};
    gap: 9rem;

    @media ${device.mobileVS}{
        width: 90%;
    }

    @media ${device.mobileM}{
        width: 90%;
        margin: auto;
        gap: 11rem;
    }

    @media ${device.duo}{
        width: 90%;
        gap: 11rem;
        .InsightFlexDisplay {
            flex-direction: row;
            justify-content: center;
            margin-top: -4rem;
        }
    }
    @media ${device.landscape}{
        width: 90%;
        gap: 18rem;
        margin: auto;
        .InsightFlexDisplay {
            flex-direction: row;
            justify-content: center;
            margin-top: -4rem;
        }
    }

    @media ${device.laptopS}{
        width: 100%;
        padding: 0 14rem;
        gap: 7rem;
        margin: -1.2rem auto;
        .InsightFlexDisplay {
            flex-direction: row;
            justify-content: center;
            gap: 24rem;
            margin: 0;
        }
    }

    @media ${device.laptopM}{
        width: 100%;
        padding: 0 14rem;
        gap: 12rem;
        margin: -2rem auto;
        .InsightFlexDisplay {
            flex-direction: row;
            justify-content: center;
            gap: 32.5rem;
            margin: 0;
        }
    }

`;

export const InsightFlex = styles.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: max-content;
    & p {
        font-size: 4.25rem;
        font-weight: 700;
        line-height: 1.5;
        text-align: center;
        color: hsl(192, 100%, 9%);
    }

    & p span {
        display: block;
        font-size: 1.15rem;
        margin-left: -1rem;
        opacity: 0.4;
    }

    .firstChildImage {
        height: 2rem;
        width: 2.6rem;
    }

    .firstChild {
        font-size: 4.75rem;
    }

    .firstChild span {
        font-size: 1.15rem;
        margin-left: 0;
    }

    @media ${device.mobileVS}{
        .firstChild {
            font-size: 4.8rem;
        }
        .firstChild span {
            font-size: 1.1rem;
        }
    }

    @media ${device.mobileS}{
        .firstChildImage {
            height: 2.2rem;
            width: 2.75rem;
        }

        .firstChild {
            font-size: 5rem;
        }
        .firstChild span {
            font-size: 1.1rem;
        }
    }

    @media ${device.mobileM}{
        & p {
            font-size: 5.25rem;
            font-weight: 700;
            line-height: 1.5;
            text-align: center;
            color: hsl(192, 100%, 9%);
        }
    
        & p span {
            display: block;
            font-size: 1.25rem;
            margin-left: -1rem;
            opacity: 0.4;
        }
        
        .firstChildImage {
            height: 2.6rem;
            width: 3rem;
        }
        .firstChild {
            font-size: 6rem;
        }
    
        .firstChild span {
            font-size: 1.5rem;
            margin-left: 0;
        }

    }

    @media ${device.duo}{
        & p {
            font-size: 5.25rem;
            font-weight: 700;
            line-height: 1.5;
            text-align: center;
            color: hsl(192, 100%, 9%);
        }
    
        & p span {
            display: block;
            font-weight: 400;
            font-size: 1.25rem;
            margin-left: -1rem;
            opacity: 0.4;
        }
        
        .firstChildImage {
            height: 1.8rem;
            width: 2.25rem;
        }
        .firstChild {
            font-size: 5.25rem;
        }
    
        .firstChild span {
            font-size: 1.2rem;
            margin-left: 0;
        }

    }
    @media ${device.landscape}{
        .firstChildImage {
            height: 2rem;
            width: 2.6rem;
        }
    }

    @media ${device.laptopS}{
        & p {
            font-size: 6.75rem;
            font-weight: 700;
            line-height: 1.49;
            text-align: center;
            color: hsl(192, 100%, 9%);
        }
    
        & p span {
            display: block;
            font-weight: 400;
            font-size: 1.6rem;
            margin-left: -1rem;
            opacity: 0.4;
        }
        
        .firstChildImage {
            height: 2.75rem;
            width: 3.75rem;
        }
        .firstChild {
            font-size: 6.75rem;
        }
    
        .firstChild span {
            font-size: 1.6rem;
            margin-left: 0;
        }

    }

    @media ${device.laptopM}{
        & p {
            font-size: 9rem;
            font-weight: 700;
            line-height: 1.49;
            text-align: center;
            color: hsl(192, 100%, 9%);
        }
    
        & p span {
            display: block;
            font-weight: 400;
            font-size: 2.25rem;
            margin: auto;
            opacity: 0.4;
        }
        
        .firstChildImage {
            height: 3.75rem;
            width: 4rem;
            margin-left: 0.25rem;
        }
        .firstChild {
            font-size: 9rem;
        }
    
        .firstChild span {
            font-size: 2.25rem;
            margin: auto;
        }

    }
`;

