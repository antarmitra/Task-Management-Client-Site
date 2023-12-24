


const Section = () => {



    const benefits = [
        {
            title: 'Increased Productivity',
            description: 'Efficiently organize your tasks and stay on top of your to-do list. Prioritize tasks, set deadlines, and categorize your work to boost your overall productivity.',
        },
        {
            title: 'Improved Time Management',
            description: 'Prioritize your tasks and focus on what matters most to achieve your goals. Easily identify high-priority items and deadlines for better time management.',
        },
        {
            title: 'Enhanced Collaboration',
            description: 'Collaborate seamlessly with your team by sharing tasks and updates. Improve teamwork, communication, and project coordination for a more collaborative work environment.',
        },
        {
            title: 'Task Tracking',
            description: 'Keep track of your tasks and monitor progress. Easily check off completed items and stay organized throughout your projects.',
        },
        {
            title: 'Deadline Management',
            description: 'Set deadlines for your tasks and projects. Stay on schedule and ensure timely completion of important milestones.',
        },
        {
            title: 'Team Coordination',
            description: 'Coordinate with team members effectively. Assign tasks, share updates, and streamline communication for better teamwork.',
        },
        {
            title: 'Flexibility',
            description: 'Adapt to changing priorities with ease. A task management system provides flexibility in organizing and adjusting your workflow.',
        },
        {
            title: 'Detailed Insights',
            description: 'Gain insights into your work patterns and productivity. Analyze task data to make informed decisions and improvements.',
        },
        {
            title: 'User-Friendly Interface',
            description: 'Enjoy a user-friendly interface that makes task management intuitive and accessible. Save time and focus on your work.',
        },
    ];

    return (
        <div>
            <div className="bg-gray-100 py-16 mt-10 mb-10">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Benefits of <span className="text-[#7BD3EA]">Task Management</span></h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"  >
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom" >
                                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                                <p className="text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
