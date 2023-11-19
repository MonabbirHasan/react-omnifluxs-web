import React from 'react'
import "./counter.css"
import "../../assets/css/media_query.css"
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div>
            <div className="counter">
                <div className="count_item">
                    <h3>
                        <CountUp
                            start={-1000}
                            end={100}
                            duration={2.75}
                            separator=""
                            decimal=","
                            delay={1}
                            suffix='K'
                        />
                    </h3>
                    <p>total visitor</p>
                </div>
                <div className="count_item">
                    <h3>
                        <CountUp
                            start={-1000}
                            end={98}
                            duration={2.75}
                            separator=""
                            decimal=","
                            delay={1}
                            suffix='+'
                        />
                    </h3>
                    <p>country surved</p>
                </div>
                <div className="count_item">
                    <h3>
                        <CountUp
                            start={-1000}
                            end={100}
                            duration={2.75}
                            separator=""
                            decimal=","
                            delay={1}
                            suffix='K+'
                        />
                    </h3>
                    <p>clients</p>
                </div>
                <div className="count_item">
                    <h3>
                        <CountUp
                            start={-1000}
                            end={1000}
                            duration={2.75}
                            separator=""
                            decimal=","
                            delay={1}
                            suffix='+'
                        />
                    </h3>
                    <p>product</p>
                </div>
            </div>
        </div>
    )
}

export default Counter