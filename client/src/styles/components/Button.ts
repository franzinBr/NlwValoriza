import styled from "styled-components";

export const ButtonStyled = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    width: 100%;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
    border-radius: 3px;
    padding: 1rem 0;
    transition: all 0.3s ease;

    &:hover {
        background: #e1b12c
    }
`;