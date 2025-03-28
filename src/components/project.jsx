import './project.css';

export const Project = () => {
    return (<div>
         <h1 className="heading">Projects</h1>


         <div className='project-card'>
                <div className='project-image'>
                    <img src="" alt="" />
                </div>

                <div className='project-info'>
                    <h2 className='project-title'>Portfolio</h2>
                    <p className='project-description'>
                    Curated a professional, visually appealing portfolio using React.js with single-page functionality, showcasing 3+ innovative projects with interactive elements, effectively demonstrating technical skills, boosting user engagement, and attracting potential employers.
• Improved website loading time by 25%, enhancing performance and compatibility across multiple devices, ensuring a consistent and user-friendly experience.
                    </p>

                    <div className='project-btn'>
                        <a href="https://github.com/Shivamsingh7478/My_portfolio" className='btn btn-primary'>
                        GitHub Repository - Frontend
                        </a>
                        {/* <a href="" className='btn btn-primary'>
                        GitHub Repository - Backend
                        </a> */}
                    </div>
                </div>
         </div>

         <div className='project-card'>
                <div className='project-image'>
                    <img src="" alt="" />
                </div>

                <div className='project-info'>
                    <h2 className='project-title'>WEB3 Wallet</h2>
                    <p className='project-description'>
                    Engineered a secure web-based wallet supporting 5+ unique public keys, enabling efficient multi-wallet management
 and greater flexibility for users.
 • Developed robust wallet creation and management features using JavaScript and encryption libraries, achieving
 95% transaction security and safeguarding user assets.
 • Enhanced user interface responsiveness by 20%, leading to an overall improved, seamless experience on both
 desktop and mobile platforms.
                    </p>

                    <div className='project-btn'>
                        <a href="https://github.com/Shivamsingh7478/Web3_wallet" className='btn btn-primary'>
                        GitHub Repository - Frontend
                        </a>
                        {/* <a href="" className='btn btn-primary'>
                        GitHub Repository - Backend
                        </a> */}
                    </div>
                </div>
         </div>



         <div className='project-card'>
                <div className='project-image'>
                    <img src="" alt="" />
                </div>

                <div className='project-info'>
                    <h2 className='project-title'>Web Portal</h2>
                    <p className='project-description'>
                    Built an efficient portal that streamlined regulatory registrations for over 20 AYUSH startups, reducing processing
 time by 30% through automation and better data management practices.
 • Developed user-friendly, interactive forms that assisted startups in navigating sector-specific regulations; reduced
 submission errors by 30% while maintaining compliance with all applicable regulatory frameworks and guidelines.
 • Optimized performance, cutting registration time by 40% and boosting user satisfaction.
                    </p>

                    <div className='project-btn'>
                        <a href="https://github.com/Shivamsingh7478/Web_Portal" className='btn btn-primary'>
                        GitHub Repository - Frontend
                        </a>
                        <a href="" className='btn btn-primary'>
                        GitHub Repository - Backend
                        </a>
                    </div>
                </div>
         </div>
    </div>
    );
}