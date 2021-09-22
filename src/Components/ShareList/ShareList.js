import React, {useState} from 'react'
import './ShareList.css'
function ShareList() {
    const [ShareList, setShareList] = useState(false);

    const modalStyle = {
        modal: {
          display: 'block',
        },
        off: {
          display: 'none',
        }
    }

    const ShareListOpen = () => {
        setShareList(true);
    }
    return (
        <div>
        <div className="share-list" style={ShareList===true ? modalStyle.modal : modalStyle.off}>
            <h2 className="share-list-head">Share</h2>
            <ul>
                <li className="share-list-item">Share map</li>
                <hr className="hr"/>
                <li className="share-list-item">Share current media</li>
                <hr className="hr"/>
                <li className="share-list-item">Copy link</li>
                <hr className="hr"/>
            </ul>
        </div>

        <i class="control-icon fas fa-share-alt" onClick={ShareListOpen}></i>
        </div>
    )
}

export default ShareList
