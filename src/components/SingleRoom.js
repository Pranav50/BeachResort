import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
        // console.log(this.props)
    }

    static contextType = RoomContext;

    componentDidMount() {
        
    }
    

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>No such room found...</h3>
                <Link to="/" className="btn btn-primary">
                    Back To Rooms
                </Link>
            </div>
        }

        const {name, description, capacity, size, price, 
            extras, breakfast, pets, images} = room;

            const [mainImg,...defaultImg] = images;
            console.log(defaultImg)
        return <div>
            <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className="btn btn-primary">
                    Back To Rooms
                    </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: <b>${price}</b></h6>
                        <h6>Size: <strong>{size} SQFT</strong></h6>
                        <h6>
                            Max Capacity: {""}
                            <strong>{capacity > 1 ? `${capacity} people` : `${capacity} person`}</strong>
                        </h6>
                        <h6>Pets: <strong>{pets ? "Allowed" : "No Allowed"}</strong><br/></h6>
                        <strong>{breakfast && "Free Breakfast Included"}</strong>
                    </article>
                </div>
        </section>
        <section>
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item, index) => {
                    return <li key={index}>&#9733; {item}</li>
                })}
            </ul>
        </section>
        </div>
    }
}
