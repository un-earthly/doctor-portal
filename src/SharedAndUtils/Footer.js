import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-center bg-cover p-10 bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/footer.png')]">

            <div className="footer">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </footer>
    )
}
