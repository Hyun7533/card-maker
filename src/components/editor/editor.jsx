import React from 'react';
import Card from '../card/card';
import Card_add_form from '../card_add_form copy/card_add_form';
import Card_edit_form from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({ cards, addCard, updateCard, deleteCard, FileInput }) =>
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {
            Object.keys(cards).map(key =>
                (<Card_edit_form card={cards[key]} key={key} FileInput={FileInput} updateCard={updateCard} deleteCard={deleteCard} />))
        }
        <Card_add_form onAdd={addCard} FileInput={FileInput} />
    </section>

export default Editor;