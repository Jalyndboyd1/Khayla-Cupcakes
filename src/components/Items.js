import Item from './Item.js'
import wave from '../media/wave.png'

function Items() {
    return (<div style={{
    }}>
        {/* div top */}
        <div style={{
            backgroundImage: `url(${wave})`,
            backgroundPosition: 'center',
            height: '72vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1 style={{
                color: '#f9ebbe',
                padding: '20px',
                backgroundColor: '#000',
                marginTop: '7rem',
                borderRadius: '40px'
            }}>So ... What will it be?</h1>
        </div>
        {/* div bottom */}
        <div style={{
            backgroundColor: '#b80026',
            padding: '2rem 7rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
        }}>
            {/* Item Components */}
            <Item title='Super Big Cake' price='25' img='https://media.istockphoto.com/vectors/cooking-baking-hobby-food-preparation-concept-vector-id1257398054?k=20&m=1257398054&s=612x612&w=0&h=UU3zsRNLQAdlhbm6k8tisGnI4W5YO-TOcygqnTicoLc=' />
            <Item title='Super Big Cake' price='25' img='https://media.istockphoto.com/vectors/cooking-baking-hobby-food-preparation-concept-vector-id1257398054?k=20&m=1257398054&s=612x612&w=0&h=UU3zsRNLQAdlhbm6k8tisGnI4W5YO-TOcygqnTicoLc=' />
            <Item title='Super Big Cake' price='25' img='https://media.istockphoto.com/vectors/cooking-baking-hobby-food-preparation-concept-vector-id1257398054?k=20&m=1257398054&s=612x612&w=0&h=UU3zsRNLQAdlhbm6k8tisGnI4W5YO-TOcygqnTicoLc=' />
            <Item title='Super Big Cake' price='25' img='https://media.istockphoto.com/vectors/cooking-baking-hobby-food-preparation-concept-vector-id1257398054?k=20&m=1257398054&s=612x612&w=0&h=UU3zsRNLQAdlhbm6k8tisGnI4W5YO-TOcygqnTicoLc=' />
            <Item title='Super Big Cake' price='25' img='https://media.istockphoto.com/vectors/cooking-baking-hobby-food-preparation-concept-vector-id1257398054?k=20&m=1257398054&s=612x612&w=0&h=UU3zsRNLQAdlhbm6k8tisGnI4W5YO-TOcygqnTicoLc=' />
            <Item title='Super Big Cake' price='25' img='https://media.istockphoto.com/vectors/cooking-baking-hobby-food-preparation-concept-vector-id1257398054?k=20&m=1257398054&s=612x612&w=0&h=UU3zsRNLQAdlhbm6k8tisGnI4W5YO-TOcygqnTicoLc=' />
        </div>
    </div>)
}

export default Items