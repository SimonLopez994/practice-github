import './cards.styles.scss';
import CardItem from '../card-item/card-item.component';

const Cards = ({ users }) => {
    return (
        <div className="cards-container">
            {users.map((user) =>

            (
                <CardItem user={user} />
            )
            )}
        </div>
    );
}

export default Cards;
