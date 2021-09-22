import React, {useState} from 'react'
import './Filter.css'
function Filter() {
    const [filter, setFilter] = useState(false)

    const modalStyle = {
        modal: {
          display: 'block',
        },
        off: {
          display: 'none',
        }
    }     

    const FilterOpen = () =>
    {
        setFilter(true);
    }
    return (
        <>
        <div className="filter" style={filter===true ? modalStyle.modal : modalStyle.off}>
            <div className="filter-head">
            <i class="fas fa-hamburger"></i>
            <i class="fas fa-bed"></i>
            <i class="fas fa-running"></i>
            </div>
            <div className="filter-item-1">

            </div>
            <div className="filter-item-2">
                
            </div>
        </div>
        <i class="filter-icon fas fa-sliders-h" onClick={FilterOpen}></i>
        </>
    )
}

export default Filter
