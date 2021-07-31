import React from 'react'

// Importing CSS file from Style Folder
import "../styles/view3.scss"

// Importing Images from Assets Folder
import img from "../assets/view3/img.svg"
import img1 from "../assets/view3/img2.svg"


const View3 = () => {
    return (
        <>
            <div className="view3">

                <div className="img_div">
                    <img src={img} />
                </div>

                <div className="img1_div">
                    <img src={img1} />
                </div>



                <div className="content">
                    <h1>Trading Bot</h1>
                    <hr />
                    <p> <span style={{ color: "#f6d869" }}>Lorem </span>ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam sie nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyami erat, sed diam voluptua.
                    </p>
                    <p> <span style={{ color: "#f6d869" }}>Lorem </span>ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam sie nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyami erat, sed diam voluptua.
                    </p>
                </div>

            </div>
        </>
    )
}

export default View3
