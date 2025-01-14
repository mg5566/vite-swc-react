import React from "react";
import _ from "lodash";
import moment from "moment";

const LargeComponent = () => {
  const generateLargeArray = (size) => {
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push({
        id: i,
        name: `Item ${i}`,
        createdAt: moment().subtract(i, "days").format("YYYY-MM-DD HH:mm:ss"),
      });
    }
    return result;
  };

  const largeArray = generateLargeArray(100000);
  const groupedArray = _.groupBy(largeArray, (item) => item.id % 10);

  return (
    <div>
      <h1>Large Component with Lodash and Moment</h1>
      {Object.entries(groupedData).map(([key, items]) => (
        <div key={key}>
          <h2>Group {key}</h2>
          {items.map((item) => (
            <div key={item.id}>
              {item.value} - {item.timestamp}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LargeComponent;
