import React from 'react'

// Importing CSS file from Style Folder
import "../styles/view1.scss"

// Importing Images from Assets Folder
import img from "../assets/body1/img.svg"
import img1 from "../assets/body1/img1.svg"
import discord from '../assets/footer/discord.png'
import M from '../assets/footer/M.png'
import telegram from '../assets/footer/telegram.png'
import twitter from '../assets/footer/twitter.png'


const View1 = () => {
    return (
        <>
            <div className="view1"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="center">
                    <div className="text">

                        <span className="h1">Bscience</span>
                        <span className="p">The science of Decentralized Finance</span>
                        <span className="p1">now on BSC!</span>

                        <div className="btn">
                            <div className="b1">
                                <button>YFScience</button>
                            </div>
                            <div className="b2">
                                <button>Farming Labs</button>
                            </div>
                            <div className="b3">
                                <button>Buy</button>
                            </div>
                            <div className="b4">
                                <button>Litepaper</button>
                            </div>
                        </div>

                        <div className="img_div">
                            <div className="img1">
                                <img src={discord} alt="Discord Logo" />
                            </div>

                            <div className="img2">
                                <img src={telegram} alt="Telegram Logo" />
                            </div>

                            <div className="img3">
                                <img src={M} alt="M Logo" />
                            </div>

                            <div className="img4">
                                <img src={twitter} alt="Twitter Logo" />
                            </div>
                        </div>

                    </div>

                    <div className="body1_img">
                        <img src={img1} />
                    </div>

                </div>
                <div className="hr">
                    <hr />
                </div>
            </div>
        </>
    )
}

export default View1
