import './special.css'

function SpecialCowImage() {
    return (
        <img src="src\SpecialCowPage\assets\special_cow.png" alt="cow with pink and purple spots" className='cow_image'/>
    )
}

function GreenGrass() {
    return (
        <img src="src\SpecialCowPage\assets\green_grass.png" className="green_grass"/>
    )
}

function ClearSky() {
    return (
        <img src="src\SpecialCowPage\assets\blue_sky.png" className="clear_sky"/>
    )
}

function Sun() {
    return (
        <img src="src\SpecialCowPage\assets\sun.png" className='sun'/>
    )
}

function SpecialCowPage() {
    return (
        <div>
            <p>this is special cow page</p>
            <ClearSky />
            <SpecialCowImage />
            <GreenGrass />
            <Sun />
        </div>  
    )
}

export default SpecialCowPage;
// ^ export it to use it in other files