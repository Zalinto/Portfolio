"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import TempImage from "../images/projectImages/startup.png";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
        <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
        <ul className="list-disc pl-2">
            <li>University of California, Irvine</li>
            <ul className="list-disc pl-2">
                <p>B.S. Informatics</p>
            </ul>
            <li>Diablo Valley College</li>
            <ul className="list-disc pl-2">
                <p>A.S. Computer Science</p>
            </ul>
        </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
        <ul className="list-disc pl-2">
            <li>AWS Cloud Practitioner</li>
        </ul>
        ),
    },
    ];

    const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            {/* find new image later */}
            <Image src={TempImage} width={500} height={500} alt="about me image"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
                Hey there! I'm a full-stack web developer passionate about crafting interactive applications. Beyond coding, I love exploring webtoons, diving into anime, and staying active with workouts. Gaming is a big hobby, and I'm always up for trying new foods. Of course, coding is a big part of my life, whether it's on passion projects or at work. I thrive on collaboration and can't wait to team up to create something amazing. Let's build together!
            </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
                >
                {" "}
                Skills{" "}
                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
                >
                {" "}
                Education{" "}
                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
                >
                {" "}
                Certifications{" "}
                </TabButton>
            </div>
            <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
            </div>
        </div>
        </section>
    );
};

export default AboutSection;