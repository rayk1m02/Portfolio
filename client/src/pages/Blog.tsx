import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="max-w-3xl mx-auto">
        {/* Add blog content here */}
        <p>My blog posts will be displayed here. Blogs can be about personal learnings or anything else I find interesting in life.</p>
      </div>
    </div>
  );
};

export default Blog;
