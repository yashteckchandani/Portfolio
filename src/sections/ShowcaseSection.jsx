import React from 'react';

const ShowcaseSection = () => {
    return(
        <div id="work" className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="chatapp" />
                        </div>
                        <div className='text-content'>
                            <h2>No more worry for complex sql queries. Get Queries on your fingertips with a simple prompt</h2>
                            <p>An AI chat bot made with React, Spring Boot and OpenAI's api to provide any db related query solution for a particular Schema Context. </p>
                        </div>
                    </div>
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="project2" />
                            </div>
                            <h2>Facial detetction based attendance marking</h2>
                        </div>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="project3" />
                            </div>
                            <h2>Facial detetction based attendance marking</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection;