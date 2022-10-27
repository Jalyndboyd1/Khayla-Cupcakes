import { Facebook, Instagram, LocalPhone } from '@mui/icons-material'
import "./Nav.css"

function Nav() {
    return (
        <div style={{
            background: "#f9ebbe",
            padding: '8px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            {/* left */}
            <h1 style={{
                fontWeight: 300,
                color:'#b80026'
            }}>KK's Kupkakes</h1>
            {/* right */}
            <div style={{
                width: '8rem',
                display: 'flex',
                alignItems: "center",
                justifyContent: 'space-evenly',
            }}>
                {/* socials */}
                <Facebook className='social__icon' />
                <Instagram className='social__icon' />
                <LocalPhone className='social__icon' />
            </div>
        </div>
    )
}

export default Nav