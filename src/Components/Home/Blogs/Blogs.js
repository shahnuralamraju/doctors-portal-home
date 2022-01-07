import React from 'react';
import patient1 from "../../../images/p4.jpg";
import patient2 from "../../../images/p5.jpg";
import patient3 from "../../../images/p6.jpg";
import BlogCard from '../BlogCard/BlogCard';

const blogsData = [
    {
        name:"Rashed Kabir",
        town:"23 April 2021",
        title:"Check At least a Doctor In a Year For Your Teetch",
        pic:patient1
    },
    {
        name:"Dr. Caudi",
        town:"6 June 2021",
        title:"2 Times of Brush In a Day Keep Healthy",
        pic:patient2
    },
    {
        name:"Dr. Jhon Mitchel",
        town:"26 Aug 2021",
        title:"The Tooth Cancer is Taking a Challenge",
        pic:patient3
    },
];

const Blogs = () => {
    return (
        <section style={{margin:"10em 0"}}>
            <div style={{marginBottom:"6em"}} className="text-center">
                <h5 className='primary-text'>OUR BLOGS</h5>
                <h2 className='secondary-text'>From Our Blog News</h2>
            </div>
            <div className='container mt-5 mb-5'>
                <div className="row g-4">
                    {
                        blogsData.map((blog) => <BlogCard blog={blog}></BlogCard>)
                    }
                </div>  
            </div>
        </section>
    );
};

export default Blogs;