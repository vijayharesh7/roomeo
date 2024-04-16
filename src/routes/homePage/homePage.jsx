import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
    <div className='textContainer'>
        <div className='wrapper'>
                <h1 className='title'>
                    Find the best Realestate Renting for Students from anywhere!
                </h1>
                <p>
                    kiruku bunda. enga annanuku naa tha da seiven!! ATHU. laka laka lka lka lka lka lka
                </p>
            <SearchBar/>
            <div className='boxes'>
                <div className='box'>
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className='box'>
                    <h1>200</h1>
                    <h2>Awards Recieved</h2>
                </div>
                <div className='box'>
                    <h1>2000+</h1>
                    <h2>Property Ready da sunni</h2>
                </div>
                </div>
        </div>
    </div>
    <div className='imgContainer'>
        <img className='imgg' src='bg.png' alt='#'/>

    </div>
    </div>
  )
}

export default HomePage

