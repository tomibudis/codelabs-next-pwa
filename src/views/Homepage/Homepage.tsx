import React, { memo } from "react";

import { dateFormat, today } from "#utils/index";
import { useQueryTodo } from "#modules/index";

import { Text } from "#components/index";

const Homepage: React.FC = () => {
  const { data } = useQueryTodo();
  return (
    <>
      <div>Homepage</div>
      <p>{dateFormat(today(), "DD-MM-YYYY")}</p>
      {data?.map((d) => (
        <>
          <h4>{d.id}</h4>
          <Text>{d.title}</Text>
          <Text>{d.completed ? "completed" : "uncompleted"}</Text>
        </>
      ))}
    </>
  );
};

export default memo(Homepage);
