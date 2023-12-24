/* eslint-disable react/prop-types */
import CreateIcon from '../../../src/assets/image/create.png';
import OrganizeIcon from '../../../src/assets/image/manage.png';
import PrioritizeIcon from '../../../src/assets/image/priority.png';
import DragDropIcon from '../../../src/assets/image/drag.png';
import DeleteIcon from '../../../src/assets/image/delete.png';
import SecureIcon from '../../../src/assets/image/lock.jpg';

const services = [
    {
        icon: CreateIcon,
        title: 'Create Tasks',
        description: 'Easily create new tasks with titles, descriptions, deadlines, and priority.',
    },
    {
        icon: OrganizeIcon,
        title: 'Organize',
        description: 'Organize tasks into three separate lists: to-do, ongoing, and completed.',
    },
    {
        icon: PrioritizeIcon,
        title: 'Prioritize',
        description: 'Set priority levels for tasks, such as low, moderate, and high.',
    },
    {
        icon: DragDropIcon,
        title: 'Drag and Drop',
        description: 'Implement drag-and-drop functionality to move tasks between lists with ease.',
    },
    {
        icon: DeleteIcon,
        title: 'Delete Tasks',
        description: 'Users can delete tasks from the dashboard after logging in.',
    },
    {
        icon: SecureIcon,
        title: 'Secure Login',
        description: 'User authentication ensures secure access to the task management dashboard.',
    },
];

const Service = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our <span className='text-[#7BD3EA]'>Services</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" data-aos="flip-right">
            <div className="flex items-center justify-center mb-4">
                <img src={icon} alt={title} className="h-32 w-32" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default Service;
