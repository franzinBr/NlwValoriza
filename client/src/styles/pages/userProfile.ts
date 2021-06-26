import styled from "styled-components";

export const DivP = styled.div`
    width: 100%;
    .comment {
        margin-top: .5rem;
    }
    .comment.new {
        border-left: 4px solid ${props => props.theme.colors.primary};
        
    }

    .comment:last-child {
        padding-bottom: 4rem;
    }

    
    .dont{
        padding-top: 1rem;
        text-align: center;
        color: ${props => props.theme.colors.text_second};
        font-size: 1.8rem;
    }

`;