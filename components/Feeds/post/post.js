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
                    ð·ððððð ððð ðððððððððð ðð ðððððð ððððððð ððððâðð ðððððððð ðððð ððð ððððð ðððð.â-
                    Colin Angle <br />
                    ðððð ð¥ðð¦ ðð²ð¿ð®ð¹ð® ððµð®ð½ðð²ð¿ and ð§ðð¦ collaborative venture ð¥ð®ð¥: ð¥ð¼ð®ð±ðð®ð ðð¼ ð¥ð¼ð¯ð¼ðð¶ð°ð,
                    is all set to kickstart. Professional industrial experts will guide you all the
                    way throughout the session as the robots come to life before you. Buckle up
                    droid lovers and get your machine blood pumping as the curtains are raising for
                    the extravaganza youâve all been waiting #R2R.
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
