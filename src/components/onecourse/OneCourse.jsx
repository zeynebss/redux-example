import React from "react";
import "./one-course.scss";
import { Link } from "react-router-dom";


const OneCourse = ({data}) => {
  console.log(data)
  return (
    <section className="one-course">
     <Link to={`/course/${data.id}`}>
      {data &&(
      <div className="container">

        <div className=" one-course-area row align-items-center justify-content-between">

  <div className="card-box ">
      <img src={data.photoUrl} alt="" />
      <span>{data.categoryName}</span>
    <Link to={`/course-details/${data.id}`}>  <h1>{data.name}</h1></Link>
      <p className="teacher">Teach Learning network,Tom Felton</p>
      <div className="review">
<span>({data.raiting} Ratings)</span>
      </div>
   
      
        {data.discount !== 0 && data.discount != null && (
          <span><del>${data.price}</del>
          
          ${data.discount}</span>
        )}
           {(data.discount === 0 || data.discount===null) &&(
           <span> ${data.price}</span>
                            )}
        </div>
    


      </div>
    <p><button>Add to cart</button></p>
    </div>

  

      )}
      </Link>
    </section>
  );
};

export default OneCourse;
