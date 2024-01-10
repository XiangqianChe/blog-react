import React from "react";

function HashTag({ tags }) {
    return (
        <>
            {tags &&
                tags.map((tag) => {
                    return <span key={tag}>#{tag}</span>;
                })
            }
        </>
    );
}

export default HashTag;