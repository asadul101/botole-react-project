import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottels.css'
import { addToLS, getStorageCart, remaningCartLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottels = () => {
    const [bottels, setBottels] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottels(data))
    }, [])

    // load cart frome local storage
    useEffect(() => {
        if (bottels.length) {
            const storageCart = getStorageCart()
            const savedCart = [];
            for (const id of storageCart) {
                const bottle = bottels.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            // console.log('saved cart ',savedCart);
            setCart(savedCart)
        }

    }, [bottels])

    // Button onClick setting 
    const handlButtonClick = bottle => {
        const newBottle = [...cart, bottle]
        setCart(newBottle)

        addToLS(bottle.id)
    }

    const handleRemoceClick=id=>{
        // remove ui 
        const remaingCart=cart.filter(bottle=>bottle.id !== id)
        setCart(remaingCart)
        //remove part
        remaningCartLS(id)
    }

    return (
        <div>
            <p>Bottle {bottels.length}</p>
            <Cart cart={cart}
            handleRemoceClick={handleRemoceClick}
            ></Cart>
            <div className="bottles-container">
                {
                    bottels.map(bottle => <Bottle key={bottle.id}
                        handlButtonClick={handlButtonClick}
                        bottle={bottle}>
                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottels;