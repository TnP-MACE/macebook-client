import PropTypes from 'prop-types'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { AuthProvider } from '../contexts/authContext'

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any
}

export default MyApp
