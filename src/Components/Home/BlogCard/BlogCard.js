import React from 'react';

const BlogCard = ({blog}) => {
    const {name, town, pic, title} = blog;
    return (
        <div className='col-md-4'>
            <div className='rounded text-center p-3 shadow'>
                <div className='d-flex align-items-center rounded pt-2 justify-content-evenly'>
                    <div style={{ height: "80px", width: "80px" }}>
                        <img style={{ width: "100%", height: "100%",borderRadius:"50%" }} src={pic} alt="ima" />
                    </div>
                    <div>
                        <h4 style={{ color: "#3A4256" }}>{name}</h4>
                        <small className='text-muted'>{town}</small>
                    </div>
                </div><br /><br />
                <h4 style={{fontWeight:"bold", color:"#3A4256"}}>{title}</h4><br />
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, possimus? Corporis in recusandae, quo ratione.</p>
            </div>
        </div>
    );
};

export default BlogCard;