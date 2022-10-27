import wave from '../media/wave.png'

function Items() {
    return (<div style={{
    }}>
        {/* div top */}
        <div style={{
            backgroundImage: `url(${wave})`,
            backgroundPosition: 'center',
            height: '40vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1 style={{
                color: '#f9ebbe',
                padding: '20px',
                backgroundColor: '#000',
                marginTop: '3rem',
                borderRadius: '40px'
            }}>So ... What will it be?</h1>
        </div>
        {/* div bottom */}
        <div>
            {/* Item Components */}
        </div>
    </div>)
}

export default Items