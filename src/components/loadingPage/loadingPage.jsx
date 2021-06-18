import React from 'react';
import styles from './loadingPage.module.css';

const LoadingPage = () => <>
    <div className={styles.container}>
        <div className={styles.loading}></div>
        <div className={styles.message}>Loading</div>
    </div>

</>

export default LoadingPage;