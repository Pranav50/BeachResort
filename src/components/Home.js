import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'

const Home = () => {
    return <div>
        <Hero>
            <Banner title="luxurious rooms" subtitle="Deluxe Rooms statrting at 299$">
                    <Link  to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms />
        <Button>Hello</Button>
    </div>
}

export default Home
