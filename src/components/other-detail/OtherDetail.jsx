import React from 'react'
import './otherDetail.scss'

const OtherDetail = ({data}) => {
    return (
        <div className="col-lg-12">
            <div className="otherdetail">
                <div className="od-text">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <br />
                <span>({data.raiting} Ratings)</span>
                </div>
              <div className="bottom-step-text pt-5">
                 <h2>What you'll learn</h2>
                  <div className="ul-text d-flex flex-wrap">
                    <ul>
                        <li>Nullam rutrum eget nunc varius</li>
                        <li>Integer congue magna at pretium purus pretium ligula undo rutrum</li>
                        <li>Risus at congue etiam aliquam sapien an egestas posuere blandit</li>
                    </ul>
                    <ul>
                        <li>Pretium ligula at rutrum dolor auctor</li>
                        <li>Ligula at rutrum risus integer congue magna at pretium purus pretium</li>
                        <li>Congue etiam aliquam egestas sapien undo posuere auctor magna</li>
                    </ul>
                  </div>
              </div>
             
            </div>
        </div>

    )
}

export default OtherDetail