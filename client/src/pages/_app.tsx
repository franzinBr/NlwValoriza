import {AppProps} from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Layout from '../components/Layout'
import { AuthProvider } from '../contexts/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            <Layout>
                <section className="MainContainer">
                    <Component {...pageProps} />
                    <GlobalStyle />
                </section>
            </Layout>
        </ThemeProvider>
    </AuthProvider>
    )
}

export default MyApp
