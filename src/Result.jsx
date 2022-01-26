import React, { useEffect } from "react";
import Prism from "prismjs";

const Result = () => {
  let code = `
  {
    "full_name": "Kshitij Dhama",
    "pronouns": "he/him/his",
    "age": 21,
    "occupation": "Software Developer(Ruby on Rails)",
    "currently_at": "Jaipur, India",
    "interests":[
      "cars (JDM <3)",
      "video games",
      "anime",
      "alternative rock songs"
    ]
  }
  `.trim();

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });

  return (
    <div className="p-5 bg-gray-700 rounded-b-lg">
      <div className="w-full p-4 bg-slate-600 rounded-lg">
        <pre className="line-numbers">
          <code className="language-js">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Result;
