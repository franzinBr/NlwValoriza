import Header from "./Header"

type Props = {
    children?: React.ReactNode;
}

const Layout: React.FC = ({children}: Props) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}

export default Layout
