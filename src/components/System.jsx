import livestream from '../assets/entarewebimages/livestream.svg';
import plus2 from '../assets/entarewebimages/plus2.svg';
import arrow2 from '../assets/entarewebimages/arrow2.svg';
import matched from '../assets/entarewebimages/matched.svg';
import identification from '../assets/entarewebimages/identification.svg';

function Thirdsection() {
  return (
    <div>

      <div className='system'>
        <h1>How the system works</h1>

        <div className='system-images'>
          <div className='images'>
            <img src={livestream}></img>
            <p>Live stream</p>

            <div class='icon'>
              <img src={plus2}></img>
            </div>

            <img src={identification}></img>
            <p>Identification using whiskers </p>

            <div class='icon'>
              <img src={arrow2}></img>
            </div>

            <img src={matched}></img>
            <p>Matched Lion</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Thirdsection