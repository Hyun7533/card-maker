import firebaseApp from './firebase';

class CardRepository {
    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    }
}

export default CardRepository;