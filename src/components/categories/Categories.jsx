import React, { useEffect } from "react";
import "./categories.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/CategoryAction";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoryInfo = useSelector((state) => state.categories);
  const { categories } = categoryInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <section className="top-categories">
      <div className="container">
        <div className="cat-header">
          <h1>Top Categories</h1>
        </div>
        <div className="row align-items-center justify-content-between">
          {categories?.map((cat) => (
            <li key={cat.name}>
              <Link to={`/courseList/category/${cat.id}`}>{cat.name}</Link>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
