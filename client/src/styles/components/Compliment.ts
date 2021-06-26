import styled from "styled-components";

export const DivCompliment = styled.div`

    display: flex;
    align-items: center;
    width: 100%;
    height: 8rem;
    //margin-top: 5rem;
    padding: 0 2rem;
    

    .img {
        display: flex;
        align-items: center;
        border-radius: 0px 10px 10px 0px;
        justify-content: center;
        width: 10%;
        height: 50%;
        svg {
            height: 100%;
            height: 100%;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: .5rem .5rem;
        border-radius: 0px 10px 10px 0px;
        box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.1);
        //border: 1px solid rgba(0, 0, 0, 0.1);
        a {
            font-weight: 700;
            
        }

        p {
            padding: .6rem 0;
        }

        span {
            font-weight: 700;
            font-size: .8rem;
        }

    }
`;