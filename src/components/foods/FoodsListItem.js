function FoodsListItem({food}) {
    return (
        <>
            <div className="d-flex mt-2 p-1">
                <img className="img-fluid" src={food.image} style={{ maxWidth: '12rem', maxHeight: '12rem' }} />
                <div>
                    <h5>{food.type}</h5>
                    <a href={food.image}>Open image</a>
                </div>
            </div>
        </>
    )
}

export default FoodsListItem;