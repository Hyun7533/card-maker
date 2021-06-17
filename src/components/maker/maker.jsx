import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService, FileInput, cardRepository }) => {
    const [cards, setCards] = useState();
    const [userId, setUserId] = useState();

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id]
            return updated;
        })
    }

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid)
            } else {
                history.push('/');
            }
        })
    })


    return (
        <section className={styles.maker}>
            <Header className={styles.header} onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} FileInput={FileInput}></Editor>
                <Preview cards={cards}></Preview>
            </div>
            <Footer className={styles.footer} />
        </section>
    )
}

export default Maker;