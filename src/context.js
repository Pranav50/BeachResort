import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

// RoomContext.Provider value={}
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type:'all',
            capacity: 1,
            price:0,
            minPrice:0,
            maxPrice:0,
            minSize:0,
            maxSize:0,
            breakfast: false,
            pets: false
    };
 
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,  
            featuredRooms, 
            sortedRooms: rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize  
        })
        console.log(rooms)
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url);
            let room = {...item.fields, images, id}
            return room;
    });
    return tempItems
}

getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
};

handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? 
    target.checked: target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    }, this.filterRooms)
};

filterRooms = () => {
    let {
        rooms, type, capacity, price, minSize, maxSize, breakfast, pets
    } = this.state

    // All the rooms
    let tempRooms = [...rooms];

    // Transform value
    capacity = parseInt(capacity);

    price = parseInt(price);

    // Filter by type
    if(type !== 'All') {
        tempRooms = tempRooms.filter(room => room.type === type)
    }

    // Filter by capacity
    if(capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    // Filter by Price
    tempRooms = tempRooms.filter(room => room.price <= price)

    // Filter by Size
    tempRooms = tempRooms.filter(room => 
        room.size >= minSize && room.size <= maxSize)

    // Filter by breakfast
    if(breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true)
    }

    // Filter by pets
    if(pets) {
        tempRooms = tempRooms.filter(room => room.pets === true)
    }

    this.setState({
        sortedRooms: tempRooms
    })
}



    // getData
    render() {
        return <RoomContext.Provider 
        value={{...this.state, 
        getRoom: this.getRoom,
        handleChange: this.handleChange}}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomsConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWraper(props){
        return <RoomsConsumer> 
            {value => <Component {...props} context={value}/>}
        </RoomsConsumer>
    }
}

export {RoomProvider, RoomsConsumer, RoomContext};
