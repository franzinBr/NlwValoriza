import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 100%;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 1rem Roboto, sans-serif;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }

    button {
        border: none;
    }

    Input{
        outline: none;
    }

    .MainContainer {
        display: flex;
        //align-items: center;
        justify-content: center;

        max-width: 50rem;
        margin: 0 auto;
        margin-top: .1rem;
        background: #FFFFFF;
        height: calc(100vh - 4.1rem);
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll; 
    }
    .MainContainer::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    .animeLeft {
        opacity: 0;
        transform: translateX(-20px);
        animation: anime 0.3s forwards;
    }

    .animeTop {
        opacity: 0;
        transform: translateY(-10rem);
        animation: anime 0.3s forwards;
    }

    .animeRight {
        opacity: 0;
        transform: translateX(10rem);
        animation: anime 0.3s forwards;
    }
    @keyframes anime {
        to {
        opacity: 1;
        transform: initial;
        }
    }



    @media (max-width: 768px){
        html {
            font-size: 80%;
        }
        .MainContainer {
            width: 100vw;
        }
    }

    @media (max-width: 430px){
        html {
            font-size: 75%;
        }
    }
`;
