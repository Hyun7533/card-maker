import React, { useRef } from 'react';
import Button from '../button/button';
import Image_file_input from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const Card_add_form = ({ onAdd, FileInput }) => {
    const nameRef = useRef();
    const componeyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(), // uuid
            name: nameRef.current.value || '',
            componey: componeyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        };
        formRef.current.reset();

        onAdd(card)

    };

    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
            <input ref={componeyRef} className={styles.input} type="text" name="componey" placeholder="Componey" />
            <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message"></textarea>
            <div className={styles.fileInput}>
                <FileInput />
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
    )
}


export default Card_add_form;