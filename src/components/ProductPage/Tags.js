import React from "react";

const Tags = ({ tags }) => {
  //console.log(tags);
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag.name}>
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
