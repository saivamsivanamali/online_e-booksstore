import React from "react";
const Book = props => {
    return (
         <div className=" mb-3 row shadow mt-4 ">
            <div className="col-lg-3 pl-0">
                <img src={props.book.url} alt="Image" width="200px" height="200px" />
            </div>
            <div className="col-lg-9">
            <h3 className="text-warning"> {props.book.title}</h3>
            <p className="text-danger"><b>Authors: {props.book.authors}</b></p>
            <p className="text-danger"><b>Published Date: {props.book.publishedDate}</b></p>
                <p className="text-danger">,<b>Page Count: {props.book.pageCount}</b></p>
               <p className="text-danger"><b>Categories: {props.book.genre}</b></p>
             </div>
        </div>
    );
};
export default Book;

