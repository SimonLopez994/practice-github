import './card-item.styles.scss';
const CardItem = ({ user }) => {
    const { id, name, paragraph } = user; 
    return (
        <div key={id} className="card">
            <h2>{name}</h2>
            <p>{paragraph}</p>
        </div>
    )
}
export default CardItem