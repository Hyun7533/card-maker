import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const Card_edit_form = ({ card, updateCard, deleteCard, FileInput }) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL
    } = card;

    const onSubmit = (event) => {
        deleteCard(card);
    };

    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();

        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    return (
        <form className={styles.form}>
            <input onChange={onChange} className={styles.input} type="text" name="name" value={name} />
            <input onChange={onChange} className={styles.input} type="text" name="name" value={company} />
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input onChange={onChange} className={styles.input} type="text" name="name" value={title} />
            <input onChange={onChange} className={styles.input} type="text" name="name" value={email} />
            <textarea onChange={onChange} className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <FileInput />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    )
}


export default Card_edit_form;