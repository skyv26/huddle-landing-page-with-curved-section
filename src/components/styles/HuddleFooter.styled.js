import styles from 'styled-components';
import { device } from './Devices/devices';

export const Foooter = styles.footer`
   .mobile {
      margin-bottom: -5px;
      display: inline-block;
   }
   .desktop {
      display: none;
   }

   @media ${device.duo}{
      .mobile {
          display: none;
      }
      .desktop {
          margin-bottom: -5px;
          display: inline-block;
      }
   }
   
`;

export const FooterWrapper = styles.div`
   display: flex;
   flex-direction: ${props => props.Display};
   background-color: ${props => props.BGColor};
   padding: 4.25rem 2rem;
   padding-top: 5.25rem;
   
   @media ${device.mobileVS}{
      padding: 4.25rem 2.25rem;
      padding-top: 5.4rem;
   }

   @media ${device.mobileS}{
      padding: 4.25rem 2.6rem;
      padding-top: 5.75rem;
   }

   @media ${device.mobileM}{
         padding: 4.25rem 2.75rem;
         padding-top: 6rem;
   }

   @media ${device.landscape}{
      padding: 4.25rem 3.6rem;
      padding-top: 8rem;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
   }

   @media ${device.laptopS}{
      padding: 4.25rem 8rem;
      padding-top: 7rem;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
   }

   @media ${device.laptopM}{
      padding: 4.25rem 11rem;
      padding-top: 11rem;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
   }

`;

export const ContactWrapper = styles.div`
   display: flex;
   flex-direction: ${props => props.Display};
   background-color: ${props => props.BGColor};
   color: hsl(207, 100%, 98%);
   gap: 1.6rem;
   margin-top: 10rem;

   @media ${device.mobileM}{
      margin-top: 10rem;
      gap: 1.6rem;
   }

   @media ${device.landscape}{
      width: 40%;
      margin-top: 0;
      gap: 3rem;
   }

   @media ${device.laptopS}{
      width: 30%;
      margin-top: 0;
      gap: 3rem;
   }

   @media ${device.laptopM}{
      width: 25%;
      margin-top: 0;
      gap: 3rem;
   }
   `;

export const SocialWrapper = styles.div`
   display: flex;
   flex-direction: ${props => props.Display};
   background-color: ${props => props.BGColor};
   color: hsl(207, 100%, 98%);
   gap: 1.6rem;

   & a {
      color: hsl(210, 100%, 98%);
   }

   & a i {
      font-size: 2.4rem;
   }

   @media ${device.mobileVS}{
      & a i {
         font-size: 2.6rem;
      }
   }

   @media ${device.mobileS}{
      & a i {
         font-size: 2.7rem;
      }
   }

   @media ${device.mobileM}{
      gap: 1.6rem;

      & a {
         color: hsl(210, 100%, 98%);
      }
   
      & a i {
         font-size: 2.75rem;
      }
   }      
   @media ${device.landscape}{
      gap: 1.6rem;
      margin-top: 4rem;
      & a {
         color: hsl(210, 100%, 98%);
      }
   
      & a i {
         font-size: 3.2rem;
      }
   } 

   @media ${device.tablet}{
      gap: 1.6rem;
      margin-top: 4rem;
      & a {
         color: hsl(210, 100%, 98%);
      }
   
      & a i {
         font-size: 3.2rem;
      }
   }
   
   @media ${device.laptopM}{
      gap: 2.4rem;
      margin-top: 4rem;
      & a {
         color: hsl(210, 100%, 98%);
      }
   
      & a i {
         font-size: 4rem;
         cursor: pointer;
         &:hover {
            color: cyan;
         }
      }


   }
`;


export const FooterWrapperChild = styles.div`
 display: flex;
 flex-direction: ${props => props.Display};
`;

export const ContactWrapperChild = styles.div`
 display: flex;
 flex-direction: ${props => props.Display};
`;

export const CompanyContact = styles.div`
   display: flex;
   flex-direction: ${props => props.Display};
   margin: 2.4rem 0;
   gap: 1.6rem;
   
   & address {
      display: flex;
      gap: 1.6rem;
      align-items: center;
   }

   & address a {
      color: hsl(210, 100%, 98%);
      text-decoration: none;
      font-style: normal;
      font-size: 1rem;
   }
   
   @media ${device.mobileVS}{
      margin: 2.6rem 0;
      gap: 2.4rem;
      
      & address {
         gap: 1.6rem;
      }
   
      & address a {
      font-size: 1.15rem;
      }
   }

   @media ${device.mobileS}{
      margin: 2.75rem 0;
      gap: 2.2rem;
      
      & address {
         gap: 1.6rem;
      }
   
      & address a {
         font-size: 1.25rem;
      }
   }

   @media ${device.mobileM}{
      margin: 3.2rem 0;
      gap: 2rem;
      
      & address {
         display: flex;
         gap: 1.75rem;
         align-items: center;
      }
   
      & address a {
      color: hsl(210, 100%, 98%);
      text-decoration: none;
      font-style: normal;
      font-size: 1.4rem;
      }
    }  
    @media ${device.landscape}{
      margin: 0;
      gap: 2rem;
      
      & address {
         display: flex;
         gap: 1.75rem;
         align-items: center;
      }
   
      & address a {
      color: hsl(210, 100%, 98%);
      text-decoration: none;
      font-style: normal;
      font-size: 1.4rem;
      }
    }  

    @media ${device.tablet}{
      margin: 0;
      gap: 2rem;
      
      & address {
         display: flex;
         gap: 1.75rem;
         align-items: center;
      }
   
      & address a {
      color: hsl(210, 100%, 98%);
      text-decoration: none;
      font-style: normal;
      font-size: 1.2rem;
      }
    }  

    @media ${device.laptopM}{
      margin: 0;
      gap: 2rem;
      
      & address {
         display: flex;
         gap: 1.75rem;
         align-items: center;
      }
   
      & address a {
      color: hsl(210, 100%, 98%);
      text-decoration: none;
      font-style: normal;
      font-size: 1.4rem;
      }
    }  

    `;


export const NewsLetterWrapper = styles.div`
   display: flex;
   flex-direction: ${props => props.Display};
   color: hsl(207, 100%, 98%);
   gap: 1.6rem;
   
   @media ${device.mobileVS}{
      gap: 1.75rem;
   }   

   @media ${device.mobileS}{
      gap: 2rem;
   }   
   
   @media ${device.mobileM}{
      gap: 3rem;
   }
   
   @media ${device.landscape}{
      width: 50%;
      gap: 3rem;
   }
   @media ${device.laptopS}{
      width: 45%;
      gap: 3rem;
   }

   & p{
      width: 75%;
   }

   @media ${device.laptopM}{
      width: 38%;
      gap: 1.75rem;
      margin-right: 6.6rem;
      margin-top: 0.25rem;
   }

   `;


export const FooterParagraph = styles.p`
   font-size: 1.1rem;
   font-weight: 400;
   line-height: 1.6;
   
   @media ${device.mobileVS}{
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.6;
   }
   
   @media ${device.mobileS}{
      font-size: 1.4rem;
   }

   @media ${device.mobileM}{
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.6;
   }

   @media ${device.duo}{
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.6;
   }

   @media ${device.landscape}{
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6;
   }

   @media ${device.laptopM}{
      font-size: 1.38rem;
      font-weight: 400;
      line-height: 1.6;
   }
`;

export const FooterHeading = styles.p`
   font-size: 1.6rem;
   text-transform: uppercase;
   font-weight: 700;
   
   @media ${device.mobileVS}{
      font-size: 1.75rem;
      text-transform: uppercase;
      font-weight: 700;
   }

   @media ${device.mobileS}{
      font-size: 1.9rem;
   }
   
   @media ${device.mobileM}{
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
   }   

   @media ${device.duo}{
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 700;
   }   

   @media ${device.landscape}{
      font-size: 2.4rem;
      text-transform: uppercase;
      font-weight: 700;
   }   

`;

export const Image = styles.img.attrs(props => ({
   src: props.Src,
   alt: props.Alt
}))`
   display: inline-block;
   width: 100%;
   margin-bottom: -5px;

   @media ${device.mobileM}{
      margin-bottom: -5px;
   }      
`;


export const FooterImage = styles.img.attrs(props => ({
   src: props.Src,
   alt: props.Alt
}))`
   display: inline-block;
   width: 15rem;

   @media ${device.mobileVS}{
      width: 16.75rem;
   }

   @media ${device.mobileS}{
      width: 18rem;
   }

   @media ${device.mobileM}{
      width: 20rem;
   }

   @media ${device.landscape}{
      width: 22rem;
   }

`;


export const ImageIcon = styles.img.attrs(props => ({
   src: props.Src,
   alt: props.Alt
}))`
   display: inline-block;
   width: 1.6rem;
   height: 1.30rem;
   
   @media ${device.mobileVS}{
      width: 1.75rem;
      height: 1.5rem;
   }

   @media ${device.mobileS}{
      width: 1.8rem;
      height: 1.6rem;
   }

   @media ${device.mobileM}{
      width: 2rem;
      height: 1.8rem;
   }
   @media ${device.tablet}{
      width: 1.75rem;
      height: 1.6rem;
   }

   @media ${device.laptopM}{
      width: 2rem;
      height: 1.75rem;
   }

   `;

export const Input = styles.input.attrs(props => ({
   type: props.Type,
   value: props.Value
}))`
   height: 3.6rem;
   border-radius: 5px;
   border: none;

   &:nth-child(odd){
      font-size: 1.15rem;
      padding: 0 1.6rem;
      outline: none;
   }

   &:nth-child(even) {
      display: inline-block;
      width: 50%;
      align-self: flex-end;
      background-color: hsl(322, 100%, 66%);
      color: hsl(207, 100%, 98%);
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
         background-color: hsla(321, 100%, 78%, 1);
      }
   }

   @media ${device.mobileVS}{
      height: 4.25rem;   
      &:nth-child(odd){
         font-size: 1.25rem;
         padding: 0 1.75rem;
         outline: none;
      }
   
      &:nth-child(even) {
         font-size: 1.25rem;
      }

   }

   @media ${device.mobileS}{
      height: 4.4rem;   
      &:nth-child(odd){
         font-size: 1.4rem;
         padding: 0 1.6rem;
         outline: none;
      }
   
      &:nth-child(even) {
         font-size: 1.25rem;
      }

   }

   @media ${device.mobileM}{
      height: 5rem;
      border-radius: 6px;
      border: none;
   
      &:nth-child(odd){
         font-size: 1.5rem;
         padding: 0 1.6rem;
         outline: none;
      }
   
      &:nth-child(even) {
         display: inline-block;
         width: 50%;
         align-self: flex-end;
         background-color: hsl(322, 100%, 66%);
         color: hsl(207, 100%, 98%);
         font-weight: 700;
         font-size: 1.6rem;
      }
   }      
   @media ${device.landscape}{
      height: 4rem;
      border-radius: 6px;
      border: none;
   
      &:nth-child(odd){
         font-size: 1.25rem;
         padding: 0 1.6rem;
         outline: none;
      }
   
      &:nth-child(even) {
         display: inline-block;
         width: 100%;
         align-self: flex-end;
         background-color: hsl(322, 100%, 66%);
         color: hsl(207, 100%, 98%);
         font-weight: 700;
         font-size: 1rem;
      }
   }      

   @media ${device.laptopS}{
      height: 3.75rem;
      border-radius: 4px;
      border: none;
   
      &:nth-child(odd){
         width: 60%;
         font-size: 1.25rem;
         padding: 0 1.6rem;
         outline: none;
      }
   
      &:nth-child(even) {
         display: inline-block;
         width: 30%;
         align-self: flex-end;
         background-color: hsl(322, 100%, 66%);
         color: hsl(207, 100%, 98%);
         font-weight: 700;
         font-size: 1rem;
      }
   }      
   @media ${device.laptopM}{
      height: 4.75rem;
      border-radius: 6px;
      border: none;
      
      &:nth-child(odd){
         width: 100%;
         font-size: 1.25rem;
         padding: 0 1.6rem;
         outline: none;
      }
   
      &:nth-child(even) {
         display: inline-block;
         width: 35%;
         align-self: flex-end;
         background-color: hsl(322, 100%, 66%);
         color: hsl(207, 100%, 98%);
         font-weight: 700;
         font-size: 1.4rem;
         padding: 0 2rem;
      }
   }      
   `;


export const Form = styles.form.attrs(props => ({
   action: props.Action
}))`
   display: flex;
   flex-direction: column;
   margin-top: 1.15rem;
   gap: 1.25rem;

   @media ${device.mobileVS}{
      margin-top: 1.25rem;
      gap: 1.4rem;
   }

   @media ${device.mobileS}{
      margin-top: 1.25rem;
      gap: 1.5rem;
   }

   @media ${device.mobileM}{
      margin-top: 1.25rem;
      gap: 1.6rem;
   }

   @media ${device.landscape}{
      flex-direction: row;
      margin: 0;
      gap: 1.6rem;
   }

   @media ${device.laptopM}{
      flex-direction: row;
      margin: 2rem 0;
      gap: 3.2rem;
   }
`;


export const Address = styles.address`
   display: flex;
`;
