import photo from '../imgs/photo.JPG'
import Detail from './Details'
import Footer from './Footer'

function Photo() {
    return (
        <div className="App">
            <div className="photo">
                <div className='userphoto'>
                    <img src={ photo} alt='user profile' className='img' />
                </div>
            </div>
            <Detail />
            <Footer />
        </div>
    )
}

export default Photo