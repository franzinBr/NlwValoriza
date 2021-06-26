import styled from "styled-components";



export const HeaderContainer = styled.header`
    background: ${props => props.theme.colors.background};
    width: 100vw;
   // position: fixed;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    z-index: 100;
    height: 4rem;

    nav{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;

        .logo {
            justify-self: center;
            cursor: pointer;
            font-size: 1.5rem;

            span {
                color: ${props => props.theme.colors.primary};
            }
        }


        .links {
            justify-self: flex-end;

            a {
                padding-right: 0.8rem;
                cursor: pointer;
                transition: all .3s ease;
            }
            a:hover{
                color: ${props => props.theme.colors.primary};
            }
        }
    }


`


/*export const HeaderContainer = styled.header`
    background: ${props => props.theme.colors.background};
    width: 100%;
   // position: fixed;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    z-index: 100;
    height: 4rem;
`;

export const NavContainer = styled.nav`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogoContainer = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.primary};
`;
*/