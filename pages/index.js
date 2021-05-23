import SEO from '../components/seo'
import Layout from '../components/Layout/layout'
import styles from '../styles/pages/home.module.scss'

const Home = () => {
    return (
        <Layout>
            <SEO title="Macebook" />
            <div className={styles.heading}>MACE Alumni Portal</div>
        </Layout>
    )
}

export default Home
