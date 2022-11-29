import camera from '../assets/entarewebimages/camera.svg';
import bulb2 from '../assets/entarewebimages/bulb2.svg';
import save from '../assets/entarewebimages/upload.svg';
import arrow from '../assets/entarewebimages/arrow.svg'

function Quotes() {
  return (
    <div>
      <div className="quotes_section">
        <p>“Lions roam over such vast areas that no one
          research group can effectively study them across
          their entire range. Platforms like Entare enable
          us to work together and identify lions from photos
          more easily, thereby increasing the chances of
          picking up potential movement between populations.”</p>
        <p>– Stephanie Dolrenry </p>
      </div>
      <div className='steps'>
        <div className='id_steps camera_div'>
          <img src={camera}></img>
          <p>Live Stream</p>
        </div>
        <img className='arrows' src={arrow}></img>
        <div className='id_steps bulb_div'>
          <img src={bulb2}></img>
          <p>Identify</p>
        </div>
        <img className='arrow2' src={arrow}></img>
        <div className='id_steps save_div'>
          <img src={save}></img>
          <p>Save</p>
        </div>
      </div>
    </div>
  )
}

export default Quotes