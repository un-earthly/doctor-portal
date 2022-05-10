import React from 'react'
import Button from '../../SharedAndUtils/Button'
import Contact from './Contact'
import InfoCard from './InfoCard'
import ServiceCard from './ServiceCard'
import Testimonials from './Testimonials'

export default function Home() {
    const infoData = [
        {
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/8b398f941ab66be06f6ac9a03540a3ebafedd99f/assets/icons/clock.svg",
            title: "Opening Hours",
            desc: "we're open at 6pm to 10pm from monday to friday",
            classes: 'bg-gradient-to-l from-primary to-secondary'

        },
        {
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/8b398f941ab66be06f6ac9a03540a3ebafedd99f/assets/icons/marker.svg",
            title: "Visit our location",
            desc: "Brooklyn, NY 10036, United States",
            classes: 'bg-accent'

        },
        {
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/8b398f941ab66be06f6ac9a03540a3ebafedd99f/assets/icons/phone.svg",
            title: "Contact us now",
            desc: "+000 123 456789",
            classes: 'bg-gradient-to-l from-primary to-secondary'
        }
    ]
    const serviceData = [
        {
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/fluoride.png",
            title: "Fluoride Treatment",
            desc: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
            classes: 'bg-gradient-to-l from-primary to-secondary'

        },
        {
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/cavity.png",

            title: "Cavity Filling",
            desc: "Amalgam Fillings: Amalgam has been used by dental professionals for more than a century; it is the most researched material used for filling cavities.",
            classes: 'bg-accent'

        },
        {
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/whitening.png",
            title: "Teeth Whitening",
            desc: "We Utilise World's Most Advanced Teeth Whitening System.",
            classes: 'bg-gradient-to-l from-primary to-secondary'
        }
    ]
    const testimonialsData = [
        {
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/people1.png",
            name: "Winson Herry",
            location: "6247 Rolling Green Rd"

        },
        {
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/people2.png",
            name: "Charlotte Dean",
            location: "617 Saddle Dr"

        },
        {
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: "https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/people3.png",
            name: "Aubrey White",
            location: "3501 Fincher Rd"
        }
    ]
    return (
        <div>
            <div class=' px-5'>
                {/* banner  */}
                <div class="hero min-h-screen bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/bg.png')]">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div className="flex-1"> <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/chair.png" class="max-w-sm rounded-lg shadow-2xl" /></div>
                        <div class='flex-1'>
                            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p class="py-6 capitalize">Hello Docs!This is Docs Portal. Find latest news and updates here!!</p>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>
                {/* info  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        infoData.map(info => <InfoCard desc={info.desc} classes={info.classes} title={info.title} img={info.img} key={info.img} />)
                    }
                </div>
                {/* services */}
                <div className='mt-20'>
                    <p className="text-center text-primary">OUR SERVICES</p>
                    <p className="text-center text-4xl">Services We Provide</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
                        {
                            serviceData.map(service => <ServiceCard title={service.title} img={service.img} desc={service.desc} key={service.title} />)
                        }
                    </div>
                </div>
            </div>
            {/* dental care banner */}
            <div class="hero min-h-screen px-36">
                <div class="hero-content flex-col lg:flex-row space-x-10">
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/treatment.png" class="max-w-sm rounded-lg" />
                    <div>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">Providing All The Help & Advice That You Will Ever Need To Maintain Optimum Oral Health.Wide Range of Cosmetic Dental Services Medically sanitised & sterilised centrally located, West Perth general & cosmetic dentist.Customised and Individual dental treatment plans with high-quality diagnostics .</p>
                        <Button class="btn btn-primary">Get Started</Button>
                    </div>
                </div>
            </div>

            {/* APPOINTMENT BANNER */}
            <div className="text-white bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/appointment.png')]">
                <div class="flex items-center justify-center flex-col lg:flex-row">
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/doctor.png" class="w-1/2 h-1/2 -mt-32 rounded-lg " />
                    <div className='space-y-2 p-2 lg:p-10'>
                        <p className="text-secondary">Appointment</p>
                        <p className="text-4xl">Make an appointment Today</p>
                        <p class="py-6">Providing All The Help & Advice That You Will Ever Need To Maintain Optimum Oral Health.Wide Range of Cosmetic Dental Services Medically sanitised & sterilised centrally located, West Perth general & cosmetic dentist.Customised and Individual dental treatment plans with high-quality diagnostics .</p>
                        <Button class="btn btn-primary">Get Started</Button>
                    </div>
                </div>
            </div>
            {/* testimonial */}
            <div className="flex flex-col px-16 py-32">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-primary">Testimonial</p>
                        <p className="text-4xl">What Our Patients Says</p>
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/8b398f941ab66be06f6ac9a03540a3ebafedd99f/assets/icons/quote.svg" className='lg:w-44 w-24' alt="" />
                    </div>
                </div >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 py-20">
                    {
                        testimonialsData.map(testimonial => <Testimonials img={testimonial.img} review={testimonial.review} name={testimonial.name} location={testimonial.location} />)
                    }
                </div>
            </div >

            {/* Contact */}
            < Contact />
        </div >
    )
}
