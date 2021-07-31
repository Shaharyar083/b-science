import React from 'react'

// Importing Images from Assets Folder
import discord from '../assets/footer/discord.png'
import M from '../assets/footer/M.png'
import telegram from '../assets/footer/telegram.png'
import twitter from '../assets/footer/twitter.png'


// Importing CSS file from Style Folder
import '../styles/fotter.scss'

const Fotter = () => {
    return (
        <>
            <div className="Footer">
                <div className="background">

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

                    <div className="divider" />

                    <p>Copyright Bscience 2021</p>

                </div>
            </div>
        </>
    )
}

export default Fotter;
