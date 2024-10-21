import PropTypes  from 'prop-types'
import './Bottle.css'
const Bottle = ({bottle,handlButtonClick}) => {
    const {price,img,name}=bottle;
    return (
        <div className="bottle-container">
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <h4>price: ${price}</h4>
            <button onClick={()=> handlButtonClick(bottle)}>detlis</button>
        </div>
    );
};
Bottle.propTypes={
    bottle:PropTypes.object.isRequired
}
export default Bottle;