import record from '../assets/entarewebimages/record.svg';
import micro2 from '../assets/entarewebimages/micro2.svg';
import lion from '../assets/entarewebimages/lion.svg';
import camera2 from '../assets/entarewebimages/camera2.svg';
import upload2 from '../assets/entarewebimages/upload2.svg';
import computer from '../assets/entarewebimages/computer.svg';

function Identification() {
  return (
    <div>
      <div className='identification'>
        <h1>Identification process</h1>
        <div className='process'>
          <div className='icon'>
            <p>1</p>
            <img src={record}></img>
          </div>

          <div className='text'>
            <h3>Live Streaming</h3>
            <p>A digital MRV system that uses environmental
              video recorded</p>
          </div>
        </div>

        <div className='process'>
        <div className='icon'>
          <p>2</p>
          <img src={lion}></img>
        </div>

          <div className='text'>
            <h3>Matched Lion</h3>
            <p>ESRI will provide teams access to their ArcGIS Online tools.</p>
          </div>
        </div>

        <div className='process'>
          <div className='icon'>
          <p>3</p>
          <img src={micro2}></img>
          </div>

          <div className='text'>
            <h3>Database Comparison</h3>
            <p>Odyssey builds open-source web3 metaverse stacks.</p>
          </div>
        </div>

        <div className='process'>
        <div className='icon'>
          <p>4</p>
          <img src={camera2}></img>
          </div>

          <div className='text'>
            <h3>Un matched Lion</h3>
            <p>We therefore require you to sign an NDA with KWT.</p>
          </div>
        </div>

        <div className='process'>
        <div className='icon'>
          <p>5</p>
          <img src={upload2}></img>
        </div>

          <div className='text'>
            <h3>Store in Database</h3>
            <p>ESRI will provide teams access to their ArcGIS Online tools.</p>
          </div>
        </div>

        <div className='process'>
        <div className='icon'>
          <p>6</p>
          <img src={computer}></img>
        </div>

          <div className='text'>
            <h3>Review Collected Data</h3>
            <p>Odyssey builds open-source web3 metaverse stacks.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Identification