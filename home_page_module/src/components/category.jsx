import React from "react";
const Category = props => {
    return (
        <div className="ml-3">
            <ul className="list-group">
                <h3 className="text-center ">Categories</h3>
                {props.genres.map(genre => (
                    <li
                        onClick={() => props.handleSelectedGenre(genre)}
                        key={genre.id}
                        className={
                            genre.id === props.selectedGenre
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;