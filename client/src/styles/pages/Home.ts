import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    main {
        padding: 2rem 3rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: .8rem;
    }

    @media (max-width: 768px)
    {
        main {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 400px)
    {
        main {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 320px)
    {
        main {
            grid-template-columns: 1fr;
        }
    }
`;