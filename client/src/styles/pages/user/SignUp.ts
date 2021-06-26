import styled from "styled-components";


export const Div = styled.div`
    align-self: center;
    width: 50%;
    height: 30rem;
    box-shadow: 0px 0px .8rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        width: 100%;
        padding: 0 2rem;
    }

    .change {
        
        width: 100%;
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        color: ${props => props.theme.colors.text_second};
        align-items: center;
        a {
            text-align: center;
            margin-left: .6rem;
            margin-top: 0;
            border-radius: 5px;
            padding: .5rem 0;
            font-weight: 400;
            font-size: 1rem;
            flex: .5 1 0;
            background: white;
            border: 1px solid ${props => props.theme.colors.primary}
        }
        a:hover,
        a:focus {
            color: ${props => props.theme.colors.primary};
        }

    }

    @media (max-width: 768px){
        width: 75%;
        height: 35rem;
    }


`;