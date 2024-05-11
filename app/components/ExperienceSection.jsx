import React from 'react'
import ExperienceCard from './ExperienceCard';

function ExperienceSection() {
    return (
        <section className='experience'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Experience
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">

            </ul>
        </section>    
    )
}

export default ExperienceSection