import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

// const [ trendList, setTrendList ] = useState([]);

// useEffect(() => {
//     async function trend () {
//     const response = await getTrendList();
//     if (trendList.length === 0) {
//         setTrendList(response);
//     };
//     };
//     trend();
    
// },
//     [trendList]);
return (
    <>
        {/* <h1>Tranding today</h1>
        <ul>
            {trendList.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        {movie.poster_path === null ? <img 
                        src={film}
                        alt="default"
                        width='150px'
                        /> 
                        : 
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={`${movie.id}`} 
                        width='150px'/>}
                        <p>{movie.title}</p>
                    </Link>
                </li>
            ))}
        </ul> */}
    </>
);
};

export default Home;