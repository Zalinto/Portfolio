"use client";
import { motion } from 'framer-motion';

function Image({ id }) {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
            >
                <img src={`/${id}.jpeg`} alt="A London skyscraper" className='w-[800px]' />
            </motion.div>
        </section>
    );
}

const listProjects = [1, 2, 3, 1, 1].map((image, index) => (
    <Image key={index} id={image} />
))

export default function ExperienceSection() {
    return (
        <div>
            {/* {listProjects} */}
        </div>
    );
};