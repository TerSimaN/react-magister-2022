function FoodsListItem({food}) {
    return (
        <>
            <div className="d-flex mb-3 p-0" style={{ border: '1px solid rgba(0,0,0,.125)', borderRadius: '0.25rem' }}>
                <img className="img-fluid me-2" src={food.image} style={{ maxWidth: '12rem', maxHeight: '12rem' }} />
                <div>
                    <h5>{food.type}</h5>
                    <a href={food.image}>Open image</a>
                </div>
            </div>
        </>
    )
}

export default FoodsListItem;