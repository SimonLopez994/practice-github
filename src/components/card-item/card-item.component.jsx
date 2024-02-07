import './card-item.styles.scss';
const CardItem = ({ user }) => {
    const { id, name, paragraph, imageUrl } = user;
    return (
        <div key={id} className="card">
            <div className='img' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='card-content'>
                    <h2>{name}</h2>
                    <p>{paragraph}</p>
                </div>
            </div>

        </div>
    )
}
export default CardItem