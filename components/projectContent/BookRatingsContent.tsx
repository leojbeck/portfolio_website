import React from 'react';
import { Project } from '../../data/projects';
import ProjectLinks from './ProjectLinks';

const BookRatingsContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">{project?.longDescription}</p>
          <p className="mb-6">
            The data in this project is a collection of book ratings originally from my GoodReads account.
            I wanted to make some analytics of my own, as well as a visualization of the data.
            I then wanted to make a simple recommendation engine based on the data, which is what this project is about.
            It reads the data from a CSV file, and then uses metrics about each book to make a ML model to predict the rating of a book based on its features.
          </p>
          <p className="mb-6">
            One of the model inputs is the description of the book, which was grabbed using the Google Books API. 
            The model is a Ridge regression model, which is trained on the data and then used to predict the rating of a book based on its features.
          </p>
          <p className="mb-6">
            The performance is somewhat limited since I only have ~100 ratings. Additionally, the book descriptions are not always very informative, and the model is not able to capture the nuances of the books.
            I would like to scrape more data from GoodReads and Google in the future to improve the model.
          </p>
        </div>
      </div>

      {/* Additional images beyond the header image, if any */}
      {project?.images?.slice(1).map((src, idx) => (
        <div className="mb-12" key={idx}>
          <img
            src={src}
            alt={project?.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      ))}
    </>
  );
};

export default BookRatingsContent;
