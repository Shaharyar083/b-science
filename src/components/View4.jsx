import React from 'react'

// Importing CSS file from Style Folder
import "../styles/view4.scss"

// Importing Images from Assets Folder
import img from "../assets/view4/img.svg"

const View4 = () => {
    return (
        <div className="view4">
            <h1>Application</h1>
            <div className="hr">
                <hr />
            </div>

            <div className="img_div">
                <img src={img} alt="image" />
            </div>

            <div className="btn_div">
                <button className="btn">Farm</button>
            </div>

            <div className="para">
                <p>loLorem ipsum dolor sit amet, consectetur adipisicing elit. Sit recusandae
                    harum cum! Dignissimos, vitae libero nam praesentium dolorum
                    incidunt eaque qui perspiciatis hic cupiditate unde, nulla aspernatur quae, aut at?
                </p>

                <p className="p2">loLorem ipsum dolor sit amet, consectetur adipisicing elit. Sit recusandae
                    harum cum! Dignissimos, vitae libero nam praesentium dolorum
                    incidunt eaque qui perspiciatis hic cupiditate unde, nulla aspernatur quae, aut at?
                </p>
            </div>


        </div>
    )
}

export default View4
