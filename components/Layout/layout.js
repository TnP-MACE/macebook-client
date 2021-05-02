import PropTypes from 'prop-types'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <Header />
                <div className="container">{children}</div>
            </div>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout
