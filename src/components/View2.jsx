import React from 'react'

// Importing CSS file from Style Folder
import "../styles/view2.scss"

// Importing Images from Assets Folder
import img from "../assets/view2/img.svg"
import div1 from "../assets/view2/div1.svg"
import div2 from "../assets/view2/div2.svg"
import div3 from "../assets/view2/div3.svg"


const View2 = () => {
    return (
        <>
            <div className="view2">
                <img src={img} alt="image" className="back_img1" />
                <div className="head">
                    <h1>Key Features</h1>
                    <div className="head_para">
                        <p>YFScience is a new generation decentralised
                            platform that enables different features
                            for staking, lending, trading and
                            coinvesting. YFSI is the governance
                            token of YFScience that enables access
                            to an on-chain decision making model.
                        </p>
                    </div>
                </div>

                <div className="body">

                    <div className="div_section">
                        <div className="d1">
                            <div className="div1"></div>
                            <div className="div1_inner">
                                <img src={div1} alt="image" className="div_img" />
                                <p>Lorem ipsum dolor sit ads amet, consetetur
                                    sadeasd sadipscing elitr, sed diam nonumy asie eirmod
                                    lorem tempor invidunt ut labore et de
                                </p>
                            </div>
                        </div>

                        <div className="d1">
                            <div className="div2"></div>
                            <div className="div2_inner">
                                <img src={div2} alt="image" className="div_img" />
                                <p className="para">Lorem ipsum dolor sit ads amet, consetetur
                                    sadeasd sadipscing elitr, sed diam nonumy asie eirmod
                                    lorem tempor invidunt ut labore et de
                                </p>

                            </div>
                        </div>

                        <div className="d3">
                            <div className="div3"></div>
                            <div className="div3_inner">
                                <img src={div3} alt="image" className="div_img" />
                                <p className="para">Lorem ipsum dolor sit ads amet, consetetur
                                    sadeasd sadipscing elitr, sed diam nonumy asie eirmod
                                    lorem tempor invidunt ut labore et de
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default View2
