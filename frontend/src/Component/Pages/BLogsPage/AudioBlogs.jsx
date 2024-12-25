import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AudioBlogs() {
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const response = await axios.get(
          "https://strapi-production-df70.up.railway.app/api/audio-blogs?populate=*"
        );
        setAudios(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (err) {
        setError("Error fetching audio blogs");
        setLoading(false);
      }
    };
    fetchAudios();
  }, []);

  if (loading)
    return (
      <p className="text-center font-bold text-[2rem] my-10">Loading...</p>
    );
  if (error)
    return <p className="text-center font-bold text-[2rem] my-10">{error}</p>;

  return (
    <div>
      <h1 className="relative mt-[5rem] sm:mt-[10rem] text-[3rem] font-bold text-[var(--main-color)] text-center">
        مقالات صوتية
      </h1>
      <div className="min-h-[100vh] relative mb-[10rem] sm:mb-[20rem] sm:mt-[7rem]">
        <div
          dir="rtl"
          className="container mx-auto flex flex-wrap items-center justify-center gap-10 my-10 w-full px-4 sm:px-6 lg:px-8"
        >
          {audios.map((audio) => {
            const audioUrl = `https://strapi-production-df70.up.railway.app${audio.attributes.blogAudio.data.attributes.url}`;
            return (
              <div
                key={audio.id}
                className="relative flex flex-col w-full max-w-[450px] h-auto bg-[#eee] bg-clip-border shadow-md rounded-xl overflow-hidden"
              >
                <div dir="rtl" className="p-6">
                  <h5 className="mb-2 text-[2rem] font-semibold text-center text-[var(--second-color)]">
                    {audio.attributes.blogTitle}
                  </h5>
                  <audio controls className="container mx-auto">
                    <source src={audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AudioBlogs;

//
//   return (
//
//   );
// }

// export default WrittenBlogs;
