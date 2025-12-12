import { useLayoutEffect, useState, useRef } from "react";

const maxHeight = 24;

const ExpandDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef(null);

  useLayoutEffect(() => {
    setDescriptionHeight(descriptionRef.current.scrollHeight);
  }, []);

  const handleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  console.log(descriptionHeight);

  return (
    <div>
      <div
        ref={descriptionRef}
        style={{
          maxHeight: isExpanded ? descriptionHeight : maxHeight,
          ...styles.descriptionContainer,
        }}
      >
        <p style={styles.descriptionText}>{description}</p>
      </div>
      {descriptionHeight > maxHeight && (
        <button onClick={handleExpansion}>
          {isExpanded ? "Ler menos" : "Ler mais"}
        </button>
      )}
    </div>
  );
};

const styles = {
  descriptionContainer: {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
    marginBottom: "8px",
  },
  descriptionText: {
    margin: 0,
  },
};

export default ExpandDescription;
