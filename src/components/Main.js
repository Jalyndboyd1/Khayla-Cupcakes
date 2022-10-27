import mainImg from '../media/main.jpg'

function Main() {
    return (
        <div style={{
            margin: '4rem 10rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            {/* left */}
            <img src={mainImg} alt='' style={{
                height: '20rem',
                width: '20rem',
                objectFit: 'contain'

            }} />
            {/* right */}
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#000',
                marginLeft:'2rem',
            }}>Welcome to Khayla's Kupcake Store!</h1>
        </div>)
}

export default Main