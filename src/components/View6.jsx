import React from 'react'

// Importing CSS file from Style Folder
import "../styles/view6.scss"

// Importing Images from Assets Folder
import img from "../assets/view6/img.svg"
import img1 from "../assets/view6/img1.png"

const View6 = () => {
    return (
        <>
            <div className="view6">

                <img src={img} alt="image" className="image" />

                <img src={img1} alt="image" className="image1" />


                <div>
                    <div className="head">
                        <h1>Road Map</h1>
                        <p> To Start farming on bsc and Eth?</p>
                    </div>

                    <div className="btn_div">
                        <button className="btn">Join Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default View6
