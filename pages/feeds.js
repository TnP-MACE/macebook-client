import PropTypes from 'prop-types'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { useAuth } from '../contexts/authContext'
import { clientRedirect, serverRedirect } from '../lib/redirect'
import styles from '../styles/pages/feeds.module.scss'
import TweetBox from '../components/Feeds/TweetBox/tweetbox'
import Post from '../components/Feeds/post/post'
//import img from '../images/pawel-czerwinski-vI5XwPbGvmY-unsplash.jpg'



const Feeds = ({ feeds }) => {
    /* eslint-disable-next-line */
    const [user, setUser] = useAuth()

    return (
        <Layout>
            <SEO title="Feeds | Macebook" />
            <div className={`row ${styles.container}`}>
                <div className="col-3">
                    <div className={styles.profile}>
                        <div className={styles.profile_top}>
                            <img className={styles.coverimg} src="https://unsplash.com/photos/tSe4FaiYc8s"  alt="cover img" />
                            <img className={styles.pic} src={user.picture} alt="User" />
                            <h3>{user.username}</h3>
                        </div>
                        <p>My Description</p>
                    </div>
                </div>

                <div className="col-6">
                    <TweetBox />
                    <div className={styles.feeds}>
                        {feeds.map((f, idx) => (
                            <div className={styles.feed} key={idx}>
                                
                                <Post />
                               
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-3">
                    <div className={styles.ads}>Ads</div>
                </div>
            </div>
        </Layout>
    )
}

Feeds.propTypes = {
    feeds: PropTypes.array
}

Feeds.getInitialProps = async (ctx) => {
    return handleFetch(ctx, `${process.env.API}/feeds`)
}

const handleFetch = async (ctx, route) => {
    const res = await fetch(route, {
        method: 'GET',
        credentials: 'include',
        headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    })

    if (res.status === 401 && !ctx.req) {
        clientRedirect('/login')
        return {}
    }

    if (res.status === 401 && ctx.req) {
        serverRedirect(ctx, '/login')
        return {}
    }

    return {
        feeds: ['feed 1', 'feed 2', 'feed 3', 'feed 4', 'feed 5', 'feed 6']
    }
}

export default Feeds
