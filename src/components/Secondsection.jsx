import lionshugging from "../assets/entarewebimages/lionshugging.png"
 
function Secondsection() {
  return (
    <div>
        <div className="aboutentare">
             <h1>What is Entare</h1>
             <img src={lionshugging}></img>
             <div className="par">
             <p>You will present a pitch (4 minutes recording OR 4 minutes elevator pitch) to the jury about your solution, explaining its potential to solve the hackathon challenges around lion identification or human/predator conflict mitigation.</p>
             </div>
        </div>
    </div>
  )
}

export default Secondsection