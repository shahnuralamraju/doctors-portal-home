import React from 'react';
import featured from "../../../images/treatment.png"
const FeaturedService = () => {
    return (
        <section style={{margin:"10em 0em"}}>
            <div className="container">
                <div  className="row mb-5 d-flex align-items-center justify-content-between">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{borderRadius:"5% 40% 5% 40%",width:"100%"}} src={featured} alt="treatment" />
                    </div>
                    <div className="col-md-7">
                        <h1  style={{ color:"#3A4256"}}  className='lh-base'>Exceptional Dental Care, <br />on Your Terms</h1><br />
                        <p  className="text-secondary lh-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim perferendis, ipsa ducimus laboriosam, nam natus explicabo quo sunt praesentium delectus id ad tempora quisquam exercitationem consectetur voluptate qui illo excepturi incidunt dolorem itaque expedita ipsum quaerat soluta! Labore ratione obcaecati quos aliquid eum reprehenderit dignissimos quisquam similique reiciendis vel! Odit at earum, numquam praesentium omnis consectetur pariatur aliquam ullam beatae, aperiam provident fuga perspiciatis distinctio quaerat ex. Vel, placeat consectetur.
                        </p><br />
                        <button className="primary-btn">Learn More</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;