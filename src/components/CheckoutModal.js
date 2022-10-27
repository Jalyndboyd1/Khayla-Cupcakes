import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { useSelector } from 'react-redux'
import { useState } from "react"
import { configureAbly } from "@ably-labs/react-hooks";


function CheckoutModal() {
    const cartItems = useSelector((state) => state.counter.cart)
    const [formName, setFormName] = useState('')
    const [formNumber, setFormNumber] = useState('')


    let totalPrice = 0
    // Style Config Object
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    // Define State for Modal
    const [open, setOpen] = React.useState(false);

    // Handle State Change in Modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Handle Customer Information / Send Data
    const handleCustomerInfo = (e) => {
        e.preventDefault()
        // create customer info object
        const customerInfo = {
            formName,
            formNumber
        }
        // send customer info in template to Khayla
        configureAbly({ key: "6MTRGg.N1dAYg:hSNSFZJxF8DJcL_5bOfQSkeJatMaBHLfRA0YBawqOGg"});
        // 6MTRGg.N1dAYg:hSNSFZJxF8DJcL_5bOfQSkeJatMaBHLfRA0YBawqOGg
    }
    return (
        <div>
            <ShoppingCartCheckoutOutlinedIcon onClick={handleOpen} sx={{
                position: 'fixed',
                top: '8rem',
                right: '3.5rem',
                fontSize: '2.5rem',
                cursor: 'pointer'
            }} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <form style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: '20px'
                        }}>
                            <h4 style={{ marginBottom: '10px' }}>Customer Information</h4>
                            <input placeholder='name' style={{ border: 'none' }} value={formName} onChange={(e) => setFormName(e.target.value)} />
                            <input placeholder='number' style={{ border: 'none' }} value={formNumber} onChange={(e) => setFormNumber(e.target.value)} />
                        </form>
                        <h4>Order Review</h4>
                        {cartItems.length !== 0 ? cartItems.map((item) => {
                            totalPrice += parseInt(item.price)
                            return <li style={{
                                marginBottom: '5px'
                            }}>{item.title} . . . {item.price}</li>
                        }) : 'No Items Available'}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '20px'
                    }}>
                        {`Total . . . $${totalPrice}`}
                        <button style={{
                            border: 'none',
                            background: '#fff'
                        }}>Request Order</button>
                    </div>
                    <p>Upon Selecting 'Request Order' button a request will be sent to the store owner</p>
                </Box>
            </Modal>
        </div>
    )
}

export default CheckoutModal