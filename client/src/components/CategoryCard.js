const CategoryCard = (props) => {
    return (
        <div className="categoryCard">
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default CategoryCard;