import React, { useEffect } from "react";
import Prism from "prismjs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dataValue: state.dataValue,
  };
};

const Result = (props) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });

  const renderJSON = () => {
    if (props.dataValue && props.dataValue.length > 0) {
      try {
        return props.dataValue;
      } catch (err) {
        console.log(err);
        return props.dataValue;
      }
    } else {
      return props.dataValue;
    }
  };

  return (
    <div className="p-5 pt-0 bg-gray-700 rounded-b-lg">
      <div className="w-full p-4 bg-slate-600 rounded-lg">
        <pre className="line-numbers">
          <code className="codeground language-js block overflow-y-scroll h-80 break-words">
            {renderJSON()}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Result);
