import React from 'react';
import "./BlogCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
const BlogCard = ({blog}) => {
    const {name, town, pic, title} = blog;
    return (
        <div className='col-md-4'>
            <div className='rounded text-center p-3 shadow blog-card'>
                <div className='d-flex align-items-center rounded pt-2 justify-content-evenly'>
                    <div className='blogImg' style={{ height: "80px", width: "80px" }}>
                        <img style={{ width: "100%", height: "100%",borderRadius:"50%" }} src={pic} alt="ima" />
                    </div>
                    <div>
                        <h4 className='secondary-text'>{name}</h4>
                        <small className='text-muted'>{town}</small>
                    </div>
                </div><br /><br />
                <h4 className='secondary-text'>{title}</h4><br />
                <FontAwesomeIcon className='arrow-right' icon={faLongArrowAltRight} />
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, possimus? Corporis in recusandae, quo ratione.</p>
            </div>
        </div>
    );
};

export default BlogCard;