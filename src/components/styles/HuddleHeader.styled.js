import styles from 'styled-components';
import { device } from './Devices/devices';

export const Headerr = styles.header`
   display: flex;
   flex-direction: row;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   padding: 1.6rem;

   @media ${device.mobileVS}{
      padding: 2rem;
   }

   @media ${device.mobileS}{
      padding: 2.25rem;
   }

   @media ${device.mobileM}{
      padding: 2.4rem;
   }

   @media ${device.duo}{
      padding: 2.4rem;
   }

   @media ${device.landscape}{
      padding: 2.4rem;
   }
   
   @media ${device.tablet}{
      padding: 4rem;
   }

   @media ${device.laptopS}{
      padding: 5.4rem;
   }

   @media ${device.laptopM}{
      padding: 7.25rem;
   }
`;


export const HeaderImage = styles.img.attrs(props => ({
   src: props.Src,
   alt: props.Alt
}))`
   display: inline-block;
   height: 1.25rem;
   
   @media ${device.mobileVS}{
      height: 1.35rem;
   }

   @media ${device.mobileS}{
      height: 1.5rem;
   }
   
   @media ${device.mobileM}{
      height: 1.65rem;
   }

   @media ${device.duo}{
      height: 1.8rem;
   }

   @media ${device.tablet}{
      height: 2.4rem;
   }
   
   @media ${device.laptopS}{
      height: 2.75rem;
   }
   @media ${device.laptopM}{
      height: 3.75rem;
   }
`;

export const HeaderButton = styles.button`
   padding: 0.4rem 1rem;
   border: 1px solid hsl(321, 100%, 78%);
   background-color: transparent;
   outline: none;
   border-radius: 2.75rem;
   color: hsl(321, 100%, 78%);
   font-weight: 700;
   font-size: 0.75rem;
   cursor: pointer;

   &:hover {
      box-shadow: 0 0 2px 2px hsla(321, 100%, 78%, 0.500);
   }

   @media ${device.mobileVS}{
      padding: 0.3rem 1.05rem;
      border-radius: 3.2rem;
      font-size: 1rem;
   }

   @media ${device.mobileS}{
      padding: 0.3rem 1.2rem;
      border-radius: 3.4rem;
      font-size: 1rem;
   }

   @media ${device.mobileM}{
      padding: 0.4rem 1.35rem;
      border-radius: 3.2rem;
      font-size: 1rem;
   }

   @media ${device.duo}{
      padding: 0.5rem 1.4rem;
      border-radius: 3.2rem;
      font-size: 1.05rem;
   }

   @media ${device.tablet}{
      padding: 0.6rem 2.6rem;
      border-radius: 3.2rem;
      font-size: 1.4rem;
   }

   @media ${device.laptopS}{
      padding: 0.4rem 1.6rem;
      margin-right: 0.7rem;
      border-radius: 3.2rem;
      font-size: 1.27rem;
   }

   @media ${device.laptopM}{
      padding: 0.75rem 2.75rem;
      margin-right: -1.25rem;
      border-radius: 3.2rem;
      font-size: 1.6rem;
      font-weight: 400;
   }

`;

