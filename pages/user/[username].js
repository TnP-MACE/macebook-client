import {Router, useRouter} from 'next/router'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/seo'
import { clientRedirect, serverRedirect } from '../../lib/redirect'
import styles from '../../styles/pages/profile.module.scss'

const UserProfile = (props) => {
    // const router = useRouter()
    const user = props.user
    return(
        <Layout>
            <SEO title={`${user.name} | Macebook`}/>
            <img src={user.picture}></img>
            <h1>{user.name}</h1>
            <address>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.location}</p>
            </address>
        </Layout>
    )
}

export async function getServerSideProps(ctx){
    const cookie = ctx.req.headers.cookie

    const res = await fetch(`${process.env.API}/users/${ctx.params.username}`, {
        headers: {
            cookie
        }
    })

    if(res.status === 401 && !ctx.req){
        clientRedirect('/login')
        return {props:{}}
    }

    if(res.status === 401 && ctx.req){
        serverRedirect('/login')
        return {props:{}}
    }

    if(res.status === 404 && !ctx.req){
        clientRedirect('/404')
        return {props:{}}
    }

    if(res.status === 404 && ctx.req){
        serverRedirect('/404')
        return {props:{}}
    }
    
    const user = await res.json()
    return{
        props: {user}
    }
}
export default UserProfile