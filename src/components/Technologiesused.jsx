import computervision from "../assets/entarewebimages/computervision.svg";
import python from "../assets/entarewebimages/python.svg";
import deeplearning from "../assets/entarewebimages/deep learning.svg";


function Technologiesused() {
  return (

    <div>
        <div className="technologiesused">
            <h1>Technologies Used</h1>
            <div className='technologies'>
                <div className='tech'>
                    <img src={computervision}></img>
                    <div className="text">
                        <h2>Computer Vision</h2>
                        <p>We can provide funding for new and existing projects.</p>
                    </div>
                </div>

                <div className='tech'>
                    <img src={python}></img>
                    <div className="text">
                        <h2>Python</h2>
                        <p>We are well versed in the technology, law and governance.</p>
                    </div>
                </div>

                <div className='tech'>
                    <img src={deeplearning}></img>
                    <div className="text">
                        <h2>Deep Learning</h2>
                        <p>We are well versed in the technology, law and governance.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologiesused