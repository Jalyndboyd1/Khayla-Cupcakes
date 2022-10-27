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
            <h3>{title}</h3>
            {/* Price */}
            <p>${price}</p>
        </div>

    </div>)
}

export default Item