import styled from "styled-components";

export const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20rem;
    background: ${props => props.theme.colors.primary};
    svg {
        height: 50%;
    }
    p {
        color: ${props => props.theme.colors.text_second};
    }
    h3{
        color: ${props => props.theme.colors.text};
        padding-top: .1rem;
        font-size: 3rem;
    }

`;