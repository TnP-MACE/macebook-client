import { useEffect, useRef, useState } from 'react'
import styles from './tweetbox.module.scss'
import { useAuth } from '../../../contexts/authContext'
import ContentEditable from 'react-contenteditable'
import InputOption from '../InputOption/InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'

const TweetBox = () => {
    /* eslint-disable-next-line */
    const [user, setUser] = useAuth()
    const [text, setText] = useState('')
    const contentEditableRef = useRef('')

    const handleChange = (e) => {
        /* eslint-disable-next-line */
        const regex = /^(\<div\>\<br\>\<\/div\>)$|^(\<br\>)$|^(\<\/br\>)$/
        console.log(e.target.value)
        console.log(regex.test(e.target.value))
        setText(regex.test(e.target.value) ? '' : e.target.value)
    }

    useEffect(() => {
        if (text === '') {
            contentEditableRef.current.innerHTML = text
        }
    }, [text])

    return (
        <div className={styles.tweetbox}>
            <div className={styles.container}>
                <div className={styles.pictureContainer}>
                    <img src={user.picture} className={styles.picture} alt="User" />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textareaWrapper}>
                        <div
                            className={`${styles.placeholder} ${
                                !text ? styles.visible : styles.invisible
                            }`}>
                            Add a Post
                        </div>
                        <div className={styles.textareaInnerWrapper}>
                            <ContentEditable
                                innerRef={contentEditableRef}
                                html={contentEditableRef.current.innerHTML}
                                onChange={handleChange}
                                className={styles.textarea}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <InputOption Icon={ImageIcon} title="Photo" />
                        <InputOption Icon={SubscriptionsIcon} title="Video" />
                        <InputOption Icon={EventNoteIcon} title="Event" />

                        <div>
                            <button className={styles.submit}>Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetBox
