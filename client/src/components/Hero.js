import { Link } from 'react-router-dom'
const Hero = () => {    

    return(
        <div className="hero">
            <h1>Are you ready to rock?</h1>
            <form>
                <div className="hero_input">
                    <div className="hero_input-search">
                        <input type="text" placeholder="Find your next musical instrument"/>
                        <Link to="/">
                        <   i class="fas fa-search"></i>
                        </Link>
                    </div>

                </div>
                
                
                
            </form>
            
        </div>
    )
}

export default Hero;