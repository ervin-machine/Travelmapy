import React from 'react'
import './PostCard.css'
import SaveList from '../SaveList/SaveList'
import ShareList from '../ShareList/ShareList'
import  picture1 from '../../Assets/slika1.png'
import  picture2 from '../../Assets/slika2.png'
import  picture3 from '../../Assets/slika3.png'
import autor from '../../Assets/autor.png'
function PostCard() {
    return (
        <div className="post-card">
            <div className="post-images">
                <img src={picture1} alt="picture1" />
                <img src={picture2} alt="picture2" />
                <img src={picture3} alt="picture3" />
            </div>
            <div className="post-image-info">
                <svg className="post-marker" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 23.8889C12.7778 23.8889 20 15.3102 20 9.86301C20 4.41582 15.5228 0 10 0C4.47715 0 0 4.41582 0 9.86301C0 15.3102 7.22222 23.8889 10 23.8889ZM10 14.8148C12.8637 14.8148 15.1852 12.4933 15.1852 9.62963C15.1852 6.76593 12.8637 4.44444 10 4.44444C7.1363 4.44444 4.81482 6.76593 4.81482 9.62963C4.81482 12.4933 7.1363 14.8148 10 14.8148Z" fill="#00B58B"/>
                </svg>
                <p className="post-video-num">7 videos</p>
                <svg className="post-video" width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.666672" width="71.3333" height="48" fill="url(#paint0_linear)"/>
                <path d="M43.8587 25.394L31.1327 32.778C30.0527 33.404 28.6667 32.646 28.6667 31.384V16.616C28.6667 15.356 30.0507 14.596 31.1327 15.224L43.8587 22.608C44.1043 22.7482 44.3086 22.9509 44.4506 23.1956C44.5926 23.4402 44.6675 23.7181 44.6675 24.001C44.6675 24.2839 44.5926 24.5617 44.4506 24.8063C44.3086 25.051 44.1043 25.2537 43.8587 25.394Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear" x1="22.3867" y1="-29" x2="90.9145" y2="10.9372" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3AC6C6"/>
                <stop offset="1" stop-color="#00B58B"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="post-autor">
                <img className="autor-picture" src={autor} alt="autor" />
                <p className="autor-name">Author with long name</p>
            </div>
            <div className="post-info">
                <p className="post-name">Title of that mapz</p>
                <p className="post-text">Description or “story” with #hashtags and textual links in body, cuted after 2-3 rows ...more</p>
            </div>
            <div className="post-counters-controls">
                <div className="post-counters">
                    <i class="counter-icon far fa-eye"></i>
                    <SaveList />
                </div>
                <div className="post-controls">
                    <i class="control-icon fas fa-download"></i>
                    <ShareList />
                    <i class="control-icon fas fa-ellipsis-v"></i>
                </div>
            </div>
        </div>
    )
}

export default PostCard
