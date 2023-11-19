import React from 'react'
import "./secure.css"
import "../../assets/css/media_query.css"
import secureimg from "../../assets/img/secure.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Secure = () => {
    return (
        <section className='secure'>
            <div className="secure_wrapper">
                <div className="secure_left">
                    <LazyLoadImage
                        alt={"our security"}
                        src={secureimg}
                    />
                </div>
                <div className="secure_right">
                    <h3>our secure transection system for you</h3>
                    <p>
                        long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                    </p>
                    <p>
                        long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Secure