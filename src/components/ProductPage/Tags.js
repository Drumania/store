import React from "react";

const Tags = ({ tags }) => {
  return (
    <ul className="tags mt-4">
      {tags.map((tag) => (
        <li key={Object.key}>
          <a
            href={tag.link ? tag.link : "#!"}
            style={{
              backgroundColor: tag.color,
            }}
          >
            {tag.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
