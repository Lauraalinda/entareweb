import Navbar from "./Navbar"

function Header() {
  return (
    <header>
        <Navbar/>
        <div className="landingpage-content">
            <h1>LION</h1>
            <p>Identification in Masai Mara</p>
            <button id="btn">About Entare</button>
        </div>

        <div class ="paragraph">
          <p>“The Maasai Mara is one of Africa’s most robust ecosystems, yet 
              also fragile. The cats that live here, especially the lions, seem invincible
              , but they’re not. We know these lions better than some of our friends, 
              but we cannot afford to take their survival for granted. It’s time to learn
              more about the challenges they face.”
              The Maasai Mara is one of Africa’s most robust ecosystems, yet it’s also
              fragile. The cats that live here, especially the lions, seem invincible, but 
              they’re not. We know these lions better than some of our friends, but 
              we cannot afford to take their survival for granted. It’s time to learn
              more about the challenges they face.”</p>
        </div>
    </header>
  )
}

export default Header