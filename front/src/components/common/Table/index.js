// Imports
import React from "react";

// Styles
import styles from "./styles.module.scss";

export default function Table({ columns = [], data = [] }) {
  // - Render
  return (
    <div className={styles["table-wrapper"]}>
      <table>
        <thead>
          <tr
            children={columns.map((elem, key) => (
              <th key={key}>{elem.title}</th>
            ))}
          />
        </thead>
        <tbody
          children={data.map((elem, key) => (
            <tr
              key={key}
              children={columns.map((el, i) => (
                <td className={styles[el.key]} key={i} children={el.key === "type" ? getType(elem[el.key]) : elem[el.key]} />
              ))}
            />
          ))}
        />
      </table>
    </div>
  );
}

function getType(type) {
  switch (type) {
    case "RADIO":
      return "A";
    case "TEXT":
      return "B";
    case "NUMBER":
      return "C";
    default:
      return type;
  }
}
