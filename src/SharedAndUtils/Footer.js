import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-center bg-cover p-10 bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/footer.png')]">

            <div class="footer">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </footer>
    )
}
