import styled from "styled-components";

export const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .5rem 1rem;
    
    label {
        color: ${props => props.theme.colors.primary};
    }

    .underline {
        height: 2px;
        position: relative;
        margin-top: -2px;
    }

    .underline::before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: ${props => props.theme.colors.primary};
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    input:focus ~ .underline::before {
        transform: scaleX(1)
    }

    .error {
        color: #ff0033;
        padding: .4rem 0;
        font-size: .9rem;

    }

`;

export const InputStyled = styled.input`
    margin-top: .1rem;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid silver;
    color: ${props => props.theme.colors.text_second};

`;