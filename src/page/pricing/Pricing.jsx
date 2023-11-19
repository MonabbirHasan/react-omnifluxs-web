import React from 'react'
import "./pricing.css";
import PageTitle from "../../components/Page_title/PageTitle";
import PricingCard from '../../components/pricing_card/PricingCard';
import { pricingData } from '../../utils/static/pricing';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import pricing_banner from "../../assets/img/pricing_banner.jpg";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
const Pricing = () => {
    return (
        <>
            <Header />
            <div className='pricing_page'>
                <div className="pricing_banner">
                    <LazyLoadImage src={pricing_banner} />
                </div>
                <div className="pricing_wrapper">
                    <div className="container">
                        <div className="row mt-3">
                            <PageTitle title="WordPress Development" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="custom website" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="shopify website" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="Business Support" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="Visual & Creative" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="Digital Marketing" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="Call Center" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="mobile apps development" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-5">
                            <PageTitle title="desktop apps development" />
                            {pricingData.map((items) => (
                                <div className="col-md-4">
                                    <PricingCard
                                        price={items.price}
                                        package_name={items.package_name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pricing