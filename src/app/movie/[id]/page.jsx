import React from 'react'
import Image from "next/image";

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=633176bfe6ba148117bba059045ce768`)
    return await res.json()
}
const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
    console.log(movieDetail,"movieDetail")
    return (
        <div className="relative p-7 min-h-screen ">
            <Image style={{objectFit:'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />
            <div className="absolute">
                <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
                <div className="w-1/2">{movieDetail?.overview}</div>
                <div className="my-3">{movieDetail?.vote_average} - {movieDetail?.release_date}</div>
                <div className="border w-24 p-3 hover:bg-white hover:text-black  rounded-md text-center text-lg cursor-pointer">Trail</div>


            </div>

        </div>
    )
}
export default Page
