import React, {useState} from 'react'
import './SaveList.css'
function SaveList() {
    const [Savelist, setSavelist] = useState(false);

    const modalStyle = {
        modal: {
          display: 'block',
        },
        off: {
          display: 'none',
        }
    }

    const SavelistOpen = () => {
        setSavelist(true);
    }
    return (
        <div>
        <div className="save-list" style={Savelist===true ? modalStyle.modal : modalStyle.off}>
            <h2 className="save-list-head">Save</h2>
            <ul>
                <li className="save-list-item">Create new map</li>
                <hr className="hr"/>
                <li className="save-list-item">My bucket list</li>
                <hr className="hr"/>
                <li className="save-list-item">My trip 1</li>
                <hr className="hr"/>
                <li className="save-list-item">Drafts for summer</li>
                <hr className="hr"/>
                <li className="save-list-item">20 best bearches</li>
                <hr className="hr"/>
            </ul>
        </div>

        <i class="counter-icon far fa-bookmark" onClick={SavelistOpen}></i>
        </div>
    )
}

export default SaveList
