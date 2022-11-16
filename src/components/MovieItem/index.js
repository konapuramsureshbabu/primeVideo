import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {moviesDetails} = props
  const {thumbnailUrl, videoUrl} = moviesDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <button
                type="button"
                className="trigger-button"
                // eslint-disable-next-line react/no-unknown-property
                testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
              <div className="movies-player-container">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
