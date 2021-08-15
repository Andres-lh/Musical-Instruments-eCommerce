import image from '../assets/images/guitar.jpeg'

const Hero = () => {    

    return(
        <div className="hero">
            {/*<video src={Video} autoPlay loop muted/>*/}
            <h1>Are you ready to rock?</h1>
            <form>
                <input type="text" placeholder="Find your next musical instrument"/>
            </form>
            
        </div>
    )
}

export default Hero;