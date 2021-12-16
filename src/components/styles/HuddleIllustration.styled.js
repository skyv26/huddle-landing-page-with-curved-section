import styles from 'styled-components';
import { device } from './Devices/devices';



export const IllustrationImg = styles.img`
    display: inline-block;
    width: 100%;
    margin: auto;
    justify-content: center;
    margin-top: 7rem;

    @media ${device.mobileVS}{
        margin-top: 7.25rem;
    }

    @media ${device.mobileS}{
        margin-top: 7.6rem;
    }
    
    @media ${device.mobileM}{
        margin-top: 9rem;
    }

    @media ${device.lanscape}{
        margin-top: 0;
    }
`;

export const Img = styles.img.attrs(props => ({
    src: props.Src,
    alt: props.Alt
}))`
    display: none;
    width: 100%;
    margin: auto;
`;

export const IllustrationSection = styles.section`
    display: block;
    text-align: center;
    align-items: center;
    margin-top: 0.75rem;
    color: hsl(192, 100%, 9%);
    & > img {
        margin-bottom: -10px;
    }

    .mobile {
        margin-bottom: -10px;
        display: inline-block;
    }


    @media ${device.mobileVS}{
        margin-top: 0.8rem;
    }

    @media ${device.mobileS}{
        margin-top: 0.9rem;
    }

    @media ${device.mobileM}{
        margin-top: 1rem;
    }

    @media ${device.duo}{
        .mobile {
            display: none;
        }
        .desktop {
            margin-bottom: -10px;
            display: inline-block;
        }
    }

    @media ${device.landscape}{
        margin-top: 8rem;
        .mobile {
            display: none;
        }
        .desktop {
            margin-bottom: -10px;
            display: inline-block;
        }
    }

    @media ${device.laptopM}{
        margin-top: 14rem;
        .mobile {
            display: none;
        }
        .desktop {
            margin-bottom: -10px;
            display: inline-block;
        }
    }
`;

export const IllustrationArticle = styles.article`
    display: flex;
    flex-direction: column;
    .ArticleImg {
        margin: auto;
        width: 70%;
    }

    @media ${device.mobileM}{
        .ArticleImg {
            width: 70%;
        }
    }

    @media ${device.landscape}{
        align-items: center;
        gap: 2rem;
        padding: 0 5%;
        height: 35rem;
        .ArticleImg {
            display: block;
            width: 50%;
        }
    }

    @media ${device.laptopS}{
        align-items: center;
        gap: 2rem;
        padding: 0 9%;
        height: 45rem;
        .ArticleImg {
            display: block;
            width: 45%;
        }
    }

    @media ${device.laptopS}{
        align-items: center;
        gap: 6rem;
        padding: 0 12.75rem;
        justify-content: center;
        height: 52rem;
        .ArticleImg {
            display: inline-block;
            width: 45%;
            margin-top: 7rem;
        }
    }
`;

export const TextWrapper = styles.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 6.25rem;
    margin-bottom: 4rem;
    gap: 1.25rem;
    
    @media ${device.mobileVS}{
        width: 85%; 
    }
    
    @media ${device.mobileS}{
        width: 85%; 
        margin-top: 6.4rem;
        margin-bottom: 5rem;
        gap: 1.3rem;
    }
    
    @media ${device.mobileM}{
        width: 85%;
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 7rem;
        margin-bottom: 9rem;
        gap: 1.6rem;
    }

    @media ${device.landscape}{
        width: 50%;
        flex-direction: column;
        text-align: left;
        margin: 0;
        gap: 1.6rem;
    }

    @media ${device.laptopS}{
        width: 50%;
        flex-direction: column;
        text-align: left;
        margin: auto;
        gap: 1.6rem;
    }
    @media ${device.laptopM}{
        width: 45%;
        flex-direction: column;
        text-align: left;
        margin: 0 -0.75rem;
        gap: 3rem;
    }

`;


export const IllustrationWrapper = styles.div`
    & ${IllustrationArticle}:first-child {
        background-color: hsl(210, 100%, 98%);
    }

    & ${IllustrationArticle}:nth-last-child(4){
        background-color: hsl(210, 100%, 98%);
        
        & ${TextWrapper} {
            margin-bottom: 7rem;
        }
    }   
    
    & > ${IllustrationImg}:nth-last-child(4){
        margin-bottom: -10px;
    }

    .LastSection {
        margin-top: 5rem;
        margin-bottom: 17rem;
    }
   
    @media ${device.mobileVS}{
    
        & > ${IllustrationImg}:nth-last-child(4){
            margin-bottom: -10px;
        }
    
        .LastSection {
            margin-top: 5rem;
            margin-bottom: 17rem;
        }
   
    }

    @media ${device.mobileS}{
        & ${IllustrationArticle}:nth-last-child(3){            
            & ${TextWrapper} {
                margin-bottom: 7.4rem;
            }
        }
        
    
        & > ${IllustrationImg}:nth-last-child(4){
            margin-bottom: -10px;
        }
    
        .LastSection {
            margin-top: 5rem;
            margin-bottom: 23rem;
        }
   
    }

    @media ${device.mobileM}{
        & ${IllustrationArticle}:first-child {
            background-color: hsl(210, 100%, 98%);
        }
    

        & > ${IllustrationImg}:nth-last-child(4){
            margin-bottom: -10px;
        }
    
        .LastSection {
            margin-top: 7rem;
            margin-bottom: 25rem;
        }
    }

    @media ${device.landscape}{

        & ${IllustrationArticle} {
            flex-direction: row-reverse;
        }

        & ${IllustrationArticle}:nth-child(even) {
            flex-direction: row;
        }
        
        & ${IllustrationArticle}:nth-last-child(4){
            
            & ${TextWrapper} {
                margin-bottom: 0;
            }
        }   
        
        & ${IllustrationArticle}:nth-last-child(7){
            height: 35rem;
        }   
        

        & ${IllustrationArticle}:first-child {
            background-color: hsl(210, 100%, 98%);
        }
    
        & > ${IllustrationImg}:nth-last-child(4){
            margin-bottom: -10px;
        }
        
        & ${IllustrationArticle}:nth-last-child(1){
            height: 35rem;
        }   
        
        .LastSection {
            margin: 0;
            width: 100%;
            justify-content: center;
            & h1 {
                align-self: center;
            }

            & button {
                width: 40%;
                font-size: 1.4rem;
            }
        }
    }
    @media ${device.laptopS}{

        & ${IllustrationArticle} {
            flex-direction: row-reverse;
        }

        & ${IllustrationArticle}:nth-child(even) {
            flex-direction: row;
        }
        
        & ${IllustrationArticle}:nth-last-child(4){
            
            & ${TextWrapper} {
                margin-bottom: 0;
            }
        }   
        
        & ${IllustrationArticle}:nth-last-child(7){
            height: 40rem;
        }   
        

        & ${IllustrationArticle}:first-child {
            background-color: hsl(210, 100%, 98%);
        }
    
        & > ${IllustrationImg}:nth-last-child(4){
            margin-bottom: -10px;
        }
        
        & ${IllustrationArticle}:nth-last-child(1){
            height: 25rem;
        }   
        
        .LastSection {
            margin: 0;
            width: 100%;
            justify-content: center;
            & h1 {
                font-size: 2.8rem;
                align-self: center;
            }

            & button {
                width: 34%;
                font-size: 1.35rem;
            }
        }
    }

    @media ${device.laptopM}{

        & ${IllustrationArticle} {
            flex-direction: row-reverse;
        }

        & ${IllustrationArticle}:nth-child(even) {
            flex-direction: row;
        }
        
        & ${IllustrationArticle}:nth-last-child(4){
            height: 48rem;
            & ${TextWrapper} {
                margin-bottom: 0;
            }
        }   
        
        & ${IllustrationArticle}:nth-last-child(7){
            height: 65rem;
            .ArticleImg {
                display: inline-block;
                margin-top: 19rem;
                margin-left: -1rem;
            }

            & ${TextWrapper} {
                margin-top: 9rem;
                margin-right: -1.75rem;
                gap: 3rem;
                & p {
                    font-size: 1.5rem;
                    margin-top: -2rem;
                }
            }


        }   
        

        & ${IllustrationArticle}:first-child {
            background-color: hsl(210, 100%, 98%);
        }
    
        & > ${IllustrationImg}:nth-last-child(4){
            margin-bottom: -10px;
        }
        
        & ${IllustrationArticle}:nth-last-child(1){
            height: 50rem;
        }   
        
        .LastSection {
            margin: 0;
            width: 100%;
            gap: 0;
            justify-content: center;
            & h1 {
                font-size: 3.75rem;
                align-self: center;
            }

            & button {
                width: 34%;
                font-size: 1.7rem;
            }
        }
    }
`;



export const IllustrationHeading = styles.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    
    @media ${device.mobileVS}{
        font-size: 1.75rem;
    }
    
    @media ${device.mobileS}{
        font-size: 1.9rem;
    }

    @media ${device.mobileM}{
        font-size: 2rem;
    }

    @media ${device.duo}{
        font-size: 2.6rem;
    }

    @media ${device.landscape}{
        font-size: 2rem;
    }

    @media ${device.laptopS}{
        font-size: 2.75rem;
    }
    @media ${device.laptopM}{
        font-size: 3.8rem;
        margin-top: 2rem;
    }
`;

export const IllustrationPara = styles.p`
    font-size: 1rem;
    font-weight: 400;
    
    @media ${device.mobileVS}{
        font-size: 1.2rem;
    }
    
    @media ${device.mobileS}{
        font-size: 1.35rem;
    }

    @media ${device.mobileM}{
        font-size: 1.4rem;
    }

    @media ${device.duo}{
        font-size: 2rem;
    }

    @media ${device.landscape}{
        font-size: 1rem;
    }

    @media ${device.laptopS}{
        font-size: 1.2rem;
    }

    @media ${device.laptopM}{
        font-size: 1.6rem;
    }

`;