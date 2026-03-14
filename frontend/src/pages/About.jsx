import React from 'react';
import aboutImg from "../assets/About-blog.avif";

const About = () => {
  return (
    <div className="min-h-screen pt-28 px-4 md:px-0 mb-7">
      <div className="max-w-6xl mx-auto">
      
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl font-extrabold mb-4">
            About Our Blog
          </h1>
          <p className="text-lg">
            Created by passionate minds, built for curious souls.
          </p>
        </div>

    
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImg}
            alt="Blog Illustration"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
          <div>
            <p className="text-lg mb-4">
              We are a team of five dedicated individuals brought together by a shared vision:
              to create a blog platform that inspires creativity, encourages self-expression,
              and builds a vibrant community of thinkers and writers.
            </p>
            <p className="text-lg mb-4">
              Meet our team:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Hussain Abbas</li>
                <li>Muhammad Ahsan Javed</li>
                <li>Myra Sultaniya</li>
                <li>Muhammad Rafay Naeem</li>
                <li>Shawwal Shabbir</li>
              </ul>
            </p>
            <p className="text-lg">
              Through this blog, we aim to bring you meaningful content, thought-provoking ideas,
              and a platform where your voice matters. Thank you for joining us on this journey.
            </p>
          </div>
        </div>


        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-gray-500">
            "Great minds don't think alike — they share ideas and grow together."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
