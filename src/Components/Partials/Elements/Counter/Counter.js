import minus from '../../../../Assets/remove.svg'
import plus from '../../../../Assets/add.svg'

import './Counter.css'

function Counter({count, handleIncreaseCounter, handleDecreaseCounter}) {


    return (
        <div className="featuresInpGroup propFeature1">
            <button
                className="decBtn"
                type="button"
                onClick={handleDecreaseCounter}>
                <img src={minus} alt="" />
            </button>
            <div className="counter">{count}</div>
            <button
                className="IncBtn"
                type="button" onClick={handleIncreaseCounter}>
                <img src={plus} alt="" />
            </button>
        </div>
    )
}

export default Counter