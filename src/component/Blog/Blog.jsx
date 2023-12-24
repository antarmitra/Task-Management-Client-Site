import blog1 from "../../../src/assets/image/blog1.jpg"
import blog2 from "../../../src/assets/image/blog2.jpg"
import blog3 from "../../../src/assets/image/blog3.jpg"
import blog4 from "../../../src/assets/image/blog4.jpg"
import blog5 from "../../../src/assets/image/blog5.png"
import blog6 from "../../../src/assets/image/blog6.png"

const Blog = () => {
    return (
        <div>
            <section className="max-w-screen-lg mx-auto my-8">
                <h2 className="text-3xl text-gray-800 mb-6 text-center">Latest Blog Posts</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 group">
                        <img src={blog1} alt="Blog Image 1" className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">The Art of Task Prioritization</h3>
                            <p className="text-gray-600 mb-2">Learn how to prioritize your tasks effectively to boost productivity.</p>
                            <p className="text-gray-500 text-sm">Published on <span className="font-semibold">December 15, 2023</span></p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Learn More</button>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 group">
                        <img src={blog2} alt="Blog Image 2" className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration Tips for Remote Teams</h3>
                            <p className="text-gray-600 mb-2">Explore effective collaboration strategies for remote teams.</p>
                            <p className="text-gray-500 text-sm">Published on <span className="font-semibold">December 10, 2023</span></p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Learn More</button>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 group">
                        <img src={blog3} alt="Blog Image 3" className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Mastering Task Automation with TaskTrak</h3>
                            <p className="text-gray-600 mb-2">Discover how our platform can streamline your workflow with automation.</p>
                            <p className="text-gray-500 text-sm">Published on <span className="font-semibold">December 5, 2023</span></p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Learn More</button>
                        </div>
                    </div>

                    {/* Blog Card 4 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 group">
                        <img src={blog4} alt="Blog Image 4" className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Boosting Team Productivity with TaskTrak</h3>
                            <p className="text-gray-600 mb-2">Explore strategies to enhance team productivity using our platform.</p>
                            <p className="text-gray-500 text-sm">Published on <span className="font-semibold">December 1, 2023</span></p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Learn More</button>
                        </div>
                    </div>

                    {/* Blog Card 5 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 group">
                        <img src={blog5} alt="Blog Image 5" className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Effective Time Management Techniques</h3>
                            <p className="text-gray-600 mb-2">Learn how to manage your time efficiently for increased productivity.</p>
                            <p className="text-gray-500 text-sm">Published on <span className="font-semibold">November 25, 2023</span></p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Learn More</button>
                        </div>
                    </div>

                    {/* Blog Card 6 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 group">
                        <img src={blog6} alt="Blog Image 6" className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Unlocking the Potential of TaskTrak</h3>
                            <p className="text-gray-600 mb-2">Discover the hidden features that can supercharge your productivity.</p>
                            <p className="text-gray-500 text-sm">Published on <span className="font-semibold">November 20, 2023</span></p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
