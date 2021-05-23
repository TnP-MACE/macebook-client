import React from 'react'
import styles from './post.module.scss'
import { useAuth } from '../../../contexts/authContext'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import InputOption from '../InputOption/InputOption'

const Post = () => {
    const [user] = useAuth()
    return (
        <div className={styles.post}>
            <div className={styles.post_header}>
                <img src={user.picture} alt="User" />
                <div className={styles.post_info}>
                    <h4>{user.username}</h4>
                    <p>Designation</p>
                </div>
            </div>
            <div className={styles.post_body}>
                <p>
                    𝑷𝒆𝒐𝒑𝒍𝒆 𝒂𝒓𝒆 𝒇𝒂𝒔𝒄𝒊𝒏𝒂𝒕𝒆𝒅 𝒃𝒚 𝒓𝒐𝒃𝒐𝒕𝒔 𝒃𝒆𝒄𝒂𝒖𝒔𝒆 𝒕𝒉𝒆𝒚’𝒓𝒆 𝒎𝒂𝒄𝒉𝒊𝒏𝒆𝒔 𝒕𝒉𝒂𝒕 𝒄𝒂𝒏 𝒎𝒊𝒎𝒊𝒄 𝒍𝒊𝒇𝒆.”-
                    Colin Angle <br />
                    𝗜𝗘𝗘𝗘 𝗥𝗔𝗦 𝗞𝗲𝗿𝗮𝗹𝗮 𝗖𝗵𝗮𝗽𝘁𝗲𝗿 and 𝗧𝗖𝗦 collaborative venture 𝗥𝟮𝗥: 𝗥𝗼𝗮𝗱𝘄𝗮𝘆 𝘁𝗼 𝗥𝗼𝗯𝗼𝘁𝗶𝗰𝘀,
                    is all set to kickstart. Professional industrial experts will guide you all the
                    way throughout the session as the robots come to life before you. Buckle up
                    droid lovers and get your machine blood pumping as the curtains are raising for
                    the extravaganza you’ve all been waiting #R2R.
                </p>
            </div>
            <div className={styles.post_pic}>
                <img src="https://unsplash.com/photos/tSe4FaiYc8s" alt="post"></img>
            </div>
            <div className={styles.post_buttons}>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" />
                <InputOption Icon={SendOutlinedIcon} title="Send" />
            </div>
        </div>
    )
}
export default Post
