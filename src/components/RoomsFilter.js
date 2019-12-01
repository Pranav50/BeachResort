import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

// Get all Unique Values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    console.log(context);
    const {
        handleChange,
        type,
        capacity,
        price, 
        minPrice, 
        maxPrice,
        size,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    // Unique Types
    let types = getUnique(rooms, 'type')

    // Add All
    types = ['All', ...types];

    // Map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });


    // Unique Types
    let people = getUnique(rooms, 'capacity')

    // Map to JSX
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Selection List*/}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" 
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* Selection List*/}

                {/* Guest Selection List*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" 
                    value={capacity} className="form-control" 
                    onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* Guest Selection List*/}

                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" id="price" value={price}
                    min={minPrice} max={maxPrice} className="form-control" 
                    onChange={handleChange}/>
                </div>
                {/* Room Price */}

                {/* Room Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize}
                         className="form-control" onChange={handleChange}/>
                         <input type="number" name="maxSize" id="size" value={maxSize}
                         className="form-control" onChange={handleChange}/>
                    </div>
                </div>
                {/* Room Size */}

                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" 
                         checked={breakfast} onChange={handleChange}/>
                         <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" 
                         checked={pets} onChange={handleChange}/>
                         <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* Extras */}
            </form>
        </section>
    )
}
