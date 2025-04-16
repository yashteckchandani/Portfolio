import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

    

    useGSAP(() => {
        const projects =[project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:1, delay : 0.3 * (index+1), scrollTrigger:{trigger:project,start:'top bottom-=100'}}
            )})

        gsap.fromTo(sectionRef.current,
            {opacity:0},
            {opacity:1, duration:1.5})
    },[])

    return(
        <section id="work" ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="./images/proj1.png" alt="chatapp" />
                        </div>
                        <div className='text-content'>
                            <h2>No more worry for complex sql queries. Get Queries on your fingertips with a simple prompt</h2>
                            <p>An AI chat bot made with React, Spring Boot and OpenAI's api to provide any db related query solution for a particular Schema Context. </p>
                        </div>
                    </div>
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="./images/proj2.png" alt="project2" />
                            </div>
                            <h2>Facial detetction based attendance marking</h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="./images/proj3.png" alt="project3" />
                            </div>
                            <h2>Cycle Rental System and tracking System</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;