import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { useAuth } from '../contexts/authContext'
import {clientRedirect, serverRedirect} from '../lib/redirect'
import styles from '../styles/pages/feeds.module.scss'

const Feeds = ({feeds}) => {
    const [user, setUser] = useAuth()

    return(
        <Layout>
            <SEO title="Feeds | Macebook"/>
            <div className={`row ${styles.container}`}>

                <div className="col-2">
                    <div className={styles.profile}>
                        <img src={user.picture}/>
                        <h3>{user.username}</h3>
                        <p>My Description</p>
                    </div>
                </div>

                <div className="col-8">
                    <div className={styles.feeds}>
                        {feeds.map((f, idx) => <div className={styles.feed} key={idx}>{f}</div>)}
                    </div>
                </div>

                <div className="col-2">
                    <div className={styles.ads}>
                        Ads
                    </div>
                </div>

            </div>
        </Layout>
    )
}

Feeds.getInitialProps = async (ctx) => {
    return handleFetch(ctx, `${process.env.API}/feeds`)
}

const handleFetch = async (ctx, route) => {
    const res = await fetch(route, {
        method: 'GET',
        credentials: 'include',
        headers: ctx.req ? {cookie: ctx.req.headers.cookie} : undefined
    })
    
    if(res.status === 401 && !ctx.req){
        clientRedirect('/login')
        return {}
    }

    if(res.status === 401 && ctx.req){
        serverRedirect(ctx, '/login')
        return {}
    }
    
    return {
        feeds: [
            "feed 1",
            "feed 2",
            "feed 3",
            "feed 4",
            "feed 5",
            "feed 6",
        ]
    }
}

export default Feeds