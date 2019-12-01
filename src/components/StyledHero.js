import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

const StyledHero = styled.header`
min-height: calc(100vh - 66px);
background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
// const red = '#f15025'

// const SimpleButton = styled.button`
//     color: ${red};
//     background: green;
//     font-size: 3rem;
// `

export default StyledHero;