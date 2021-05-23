import React from 'react'
import styles from './InputOption.module.scss'

// eslint-disable-next-line react/prop-types
const InputOption = ({ Icon, title }) => {
    return (
        <div className={styles.InputOption}>
            <Icon />
            <h5>{title}</h5>
        </div>
    )
}
export default InputOption
