import styled from "styled-components";

export const DivUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .4rem .1rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    .img {
        width: 100%;
        svg {
            width: 100%;
            height: 5rem;
        }
    }
    a {
        color: ${props => props.theme.colors.text_second};
    }
`;