import './cards.styles.scss';
import CardItem from '../card-item/card-item.component';
import Story from '../story/story.component';

const Cards = ({ users }) => {
    return (
        <div className='container'>

            <div className="cards-container">
                {users.map((user) =>

                (
                    <CardItem user={user} />
                )
                )}
            </div>
            <Story/>
        </div>



    );
}

export default Cards;
