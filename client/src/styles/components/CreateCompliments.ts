import styled from "styled-components";

export const DivCreateCompliment = styled.div`
    width: 100%;
    padding: 1.5rem 3rem;
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    form .select {
        position: relative;
        align-self: center;
        margin-bottom: 1rem;
        display: flex;
        width: 50%;
        height: 2rem;
        line-height: 3;
        background: ${props => props.theme.colors.background};
        overflow: hidden;
        border-radius: .25rem;
    }
    

    form .select select {
        border-radius: .25rem;
        border: 1px solid ${props => props.theme.colors.primary};
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        background: ${props => props.theme.colors.background};
        background-image: none;
        flex: 1;
        padding: 0 .5rem;
        color: ${props => props.theme.colors.text_second};
        cursor:pointer;
        font-size: 1rem;
    }

    form .select select:ms-expand{
        display: none;
    }

    form .select:after {
        content: '▼';
        position: absolute;
        top: -.5rem;
        right: 0;
        color: ${props => props.theme.colors.background};
        padding: 0 1em;
        background: ${props => props.theme.colors.primary};
        cursor:pointer;
        pointer-events:none;
        transition:.25s all ease;
    }

    form .select:hover:after {
        color: ${props => props.theme.colors.text};
    }



    form .input {
        display: grid;
        grid-template-columns: 10fr 1fr;
    }

    form .input button {
        margin-top: 0;
        border-radius: 0px 10px 10px 0px;
    }


    form .input textarea {
        outline: none;
        border: 1px solid ${props => props.theme.colors.primary};
        resize: vertical;
        padding: .5rem;
        color: ${props => props.theme.colors.text_second};
        min-height: 4rem;
        max-height: 8rem;
    }



`;