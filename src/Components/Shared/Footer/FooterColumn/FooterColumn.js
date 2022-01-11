import React from 'react';
import { Link } from 'react-router-dom';
import {Facebook, Twitter, YouTube} from '@material-ui/icons';

const FooterColumn = ({ menuTitle, menuItems, img, media }) => {
    return (
        <div className="col-md-3">
            {img &&
                <Link to="/">
                    <div style={{ width: "180px" }}>
                        <img style={{ width: "100%" }} src={img} alt="docLogo" />
                    </div>
                </Link>}
            <h6 className="primary-text">{menuTitle}</h6>
            <ul className="list-unstyled mt-4">
                {
                    menuItems.map((item, index) => <li key={index} className='mt-3'> <Link className='list-icon' to={item.link}>{item.name}</Link> </li>)
                }
            </ul>
            { media &&
                <div><ul className="social-media list-inline">
                    <li className="list-inline-item"><a href="/"><Facebook className='brand-icon'/></a></li>
                    <li className="list-inline-item"><a href="/"><Twitter className='brand-icon' /></a></li>
                    <li className="list-inline-item"><a href="/"><YouTube className='brand-icon' /></a></li>
                </ul>
                    <div className='mt-5'>
                        <h6 className='text-secondary'>Call Now </h6>
                        <button className="primary-btn">+2025550295</button>
                    </div>
                </div>

            }
        </div>
    );
};

export default FooterColumn;