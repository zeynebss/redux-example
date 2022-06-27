import React from 'react';
import './course-detail.scss';

const CourseDetails = () => {
  return (
    <section className="course-detail">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-7">
                    <div className="detail-text-area">
                        <h1>WordPress for Beginners: Create a Website Step by Step</h1>
                        <h5>Some mullah flattering time wise pregnant until him, at the gate of justice. Velna's life is the author's 
                            homework, nothing prevents the big smile from ending around the world</h5>
                            <p>Created by: Kally Brooks • Last updated: 2/2020 • Languages: English, German + 7 more
                      4.84 (468 Ratings) • 14,425 Students Enrolled</p>
                      <div className="what-you-learn">
                          <h2>What you'll learn</h2>
                          <div className="d-flex">
                             <div className="list-one">
                                 <ul>
                                     <li>No makeup needs now</li>
                                     <li>Integer congue magna at pretium purus pretium ligula undo makeup</li>
                                     <li>Laughter at the homework even some wise or want to put down flats</li>
                                   
                                 </ul>
                             </div>
                             <div className="list-two">
                                 <ul>
                                     <li>Price is unconventional at the official website of the author</li>
                                     <li>Reserved at Makeup Laughter Integer Planning at the price of chili price</li>
                                     <li>Passport too</li>
                                 </ul>
                             </div>
                          </div>
                      </div>
                      <div className="requirements">
                   <h3>Requirements</h3>
                   <label>The pain itself is a lot of pain, it hinders the careers of a plethora of readers. Aeneas a large ligula need consumer
                        suscipit enforcement pauper consumer targeted mourning great wake</label>
                        <ul>
                            <li>No cost to the author of the mass of any flattering life</li>
                            <li>Makeup a whole lot of laughter at the price of pure bed bills</li>
                            <li>The author put down some tips for poverty, not for the great economic reasons</li>
                        </ul>
                      </div>
                      <div className="c-desc">
                          <h1>Course Description</h1>
                          <p>The arrows across the country, the poverty of the arrows, the fear of the law, and the great poverty of the life itself becomes the first place in the bed, the bed of the curse until the pain Curabitur ac dapibus libero. 
                              
                            Everyone is sad and not nice. Phasellus blandit tristique justo</p>
                            <p>Each nice tank or boat</p>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                            </ul>

                      </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="detail-card-box">
                        <img className="img-fluid" src="/images/detail-card.jpg" alt="hhh" />
                        <span className=" price d-flex">
                            <label className="new-price">$74.99</label>
                            <label className="old-price" >$124.99</label>
                            
                        </span>
                        <p>16 days left at this price!</p>
                        <div className="btn-area-1">
                            <button type="button" className='btn btn-dark' >Start Course Now</button>
                        </div>
                        <div className="btn-area-2">
                        <button type="button" className='btn btn-danger'> Add to cart</button>

                        </div>
                     <div className="desc">
                         <p>This course includes:</p>
                     <ul className="list-unstyled">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseDetails