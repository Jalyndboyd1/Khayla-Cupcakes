function Item({ img, title, price }) {
    return (<div style={{
        maxWidth: '330px',
        backgroundColor: '#fff',
        marginTop: '1rem'
    }}>
        {/* Item Picture */}
        <img src={img} alt={title} style={{
            height: '330px',
            width: '330px',
            objectFit: 'cover'
        }} />
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px'
        }}>
            {/* Title */}
            <div>
                <h3>{title}</h3>
                <button style={{
                    border: 'none',
                    color: '#000',
                    background: '#f9ebbe',
                    padding: '7px',
                    borderRadius: '40px',
                    marginTop: '10px',
                    cursor: 'pointer',
                    boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)'
                }}>Add to Cart</button>
            </div>
            {/* Price */}
            <p>${price}</p>
        </div>

    </div>)
}

export default Item