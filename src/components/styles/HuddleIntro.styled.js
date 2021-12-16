import styles from 'styled-components';
import { device } from './Devices/devices';


export const Section = styles.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 1.6rem;
    margin-top: 8rem;
    gap: 1.75rem;
   
    @media ${device.mobileVS}{
        padding: 0 2rem;
        margin-top: 7rem;
        gap: 2rem;
    }

    @media ${device.mobileS}{
        padding: 0 2.6rem;
        margin-top: 8rem;
        gap: 2rem;
    }

    @media ${device.mobileM}{
        padding: 0 2.6rem;
        margin-top: 9rem;
        gap: 2.5rem;
    }

    @media ${device.duo}{
        padding: 0 3rem;
        margin-top: 9rem;
        gap: 2.5rem;
    }

    @media ${device.tablet}{
        padding: 0;
        width: 73%;
        margin: auto;
        margin-top: 9rem;
        gap: 2.5rem;
    }

    @media ${device.laptopS}{
        padding: 0;
        width: 100%;
        margin: auto;
        margin-top: 10.7rem;
        gap: 1.5rem;
    }

    @media ${device.laptopM}{
        padding: 0;
        width: 100%;
        margin: auto;
        margin-top: 14.75rem;
        gap: 2rem;
    }

`;

export const IntroTitle = styles.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.85rem;
    color: hsl(192, 100%, 9%);
    font-weight: 700;
    line-height: 1.5;
 
    @media ${device.mobileVS}{
        font-size: 2.1rem;
    }

    @media ${device.mobileS}{
        font-size: 2.25rem;
    }

    @media ${device.mobileM}{
        font-size: 2.4rem;
    }
    
    @media ${device.duo}{
        font-size: 2rem;
    }

    @media ${device.landscape}{
        font-size: 2.25rem;
    }

    @media ${device.tablet}{
        font-size: 2.6rem;
    }

    @media ${device.laptopS}{
        font-size: 3.4rem;
    }

    @media ${device.laptopM}{
        font-size: 4.55rem;
    }

`;

export const IntroPara = styles.p`
   font-size: 1.10rem;
   color: hsl(192, 100%, 9%);
   line-height: 1.5;

   @media ${device.mobileVS}{
        font-size: 1.25rem;
    }

    @media ${device.mobileS}{
        font-size: 1.3rem;
    }

    @media ${device.mobileM}{
        font-size: 1.45rem;
    }

    @media ${device.duo}{
        width: 85%;
        font-size: 1.4rem;
        margin: auto;
    }

    @media ${device.landscape}{
        width: 75%;
        font-size: 1.4rem;
        margin: auto;
    }

    @media ${device.tablet}{
        width: 75%;
        font-size: 1.4rem;
    }

    @media ${device.laptopS}{
        width: 42%;
        font-size: 1.4rem;
    }

    @media ${device.laptopM}{
        width: 42%;
        font-size: 1.9rem;
    }
    `;

export const IntroButton = styles.button`
    width: 60%;
    align-self: center;
    height: 3.6rem;
    border-radius: 25px;
    border: none;
    background-color:hsl(322, 100%, 66%);
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 2.25rem;
    box-shadow: 0 0.25rem 0.5rem 0 hsl(192deg 100% 9% / 25%);

    cursor: pointer;

    &:hover {
        background-color: hsla(321, 100%, 78%, 1);
    }

    @media ${device.mobileVS}{
        width: 60%;
        height: 3.75rem;
        font-size: 1rem;
    }

    @media ${device.mobileS}{
        width: 65%;
        height: 3.8rem;
        font-size: 1.1rem;
        box-shadow: 0 0.5rem 0.75rem 0 hsl(192deg 100% 9% / 30%);
        margin-top: 2.4rem;
    }

    @media ${device.mobileM}{
        width: 65%;
        height: 4rem;
        border-radius: 25px;
        font-size: 1.25rem;
        margin-top: 2.6rem;
    }

    @media ${device.duo}{
        width: 65%;
        font-size: 1.45rem;
        margin-top: .6rem;
    }

    @media ${device.landscape}{
        width: 50%;
        height: 5rem;
        font-size: 1.6rem;
        margin-top: .6rem;
    }

    @media ${device.tablet}{
        height: 6rem;
        border-radius: 30px;
        font-size: 1.6rem;
        margin-top: .6rem;
    }

    @media ${device.laptopS}{
        width: max-content;
        height: 5.75rem;
        padding: 0 6.25rem;
        border-radius: 30px;
        font-size: 1.4rem;
        margin: auto;
        margin-top: 1.75rem;
        letter-spacing: 1px;
    }

    @media ${device.laptopM}{
        height: 7.25rem;
        padding: 0 9rem;
        border-radius: 35px;
        font-size: 1.7rem;
        font-weight: 700;
        margin-top: 2.6rem;
        letter-spacing: 1px;
    }

`;