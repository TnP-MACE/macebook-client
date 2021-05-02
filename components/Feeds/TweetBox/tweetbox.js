import { useEffect, useRef, useState } from 'react'
import styles from './tweetbox.module.scss'
import { useAuth } from '../../../contexts/authContext'
import ContentEditable from 'react-contenteditable'

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
                            Start a Post
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
                        <div>
                            <button>Img</button>
                            <button>Emoji</button>
                            <button>Giphy</button>
                        </div>
                        <div>
                            <button className={styles.submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetBox
