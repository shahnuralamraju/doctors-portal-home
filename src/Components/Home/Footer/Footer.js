import React from 'react';
import FooterColumn from './FooterColumn/FooterColumn';
import DocLogo from "../../../images/docLogo.png"
import "./Footer.css";
const numCol = [
    {name: "Emergency Dental Care", link:"/emergency"},
    {name: "Check Up", link:"/checkup"},
    {name: "Treatment of Personal Diseases", link:"/personal-treatment"},
    {name: "Tooth Extraction", link:"/tooth-extract"},
    {name: "Check Up", link:"/checkup"}
]
const oralHealth = [
    {name: "Emergency Dental Care", link:"/emergency"},
    {name: "Check Up", link:"/checkup"},
    {name: "Treatment of Personal Diseases", link:"/personal-treatment"},
    {name: "Tooth Extraction", link:"/tooth-extract"},
    {name: "Check Up", link:"/checkup"},
    {name: "Check Up", link:"/checkup"},
    {name: "Check Up", link:"/checkup"},
]

const ourAddress = [
    {name:"New-Yourk - 101010 Hudson", link:"//google.com/map"},
    {name:"Yards", link:"//google.com/map"}
]


const Footer = () => {
    return (
        <footer className='footer-area'>
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumn key={1} img={DocLogo} menuItems={numCol} />
                    <FooterColumn key={2} menuTitle={"Services"} menuItems={oralHealth} />
                    <FooterColumn key={3} menuTitle={"Oral Health"} menuItems={oralHealth} />
                    <FooterColumn key={4} menuTitle={"Our Address"} menuItems={ourAddress} media={"media"} />   
                </div>
                <div className="text-center py-3">
                    <p className='text-secondary'>Copyright ©{(new Date()).getFullYear()} ShahnursMania.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;