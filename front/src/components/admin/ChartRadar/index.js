// Imports
import React, { useState, useCallback, useEffect } from "react";

// Styles
import styles from "./styles.module.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export default function ChartRadar({ id, options, chatsData }) {
  return (
    <RadarChart
      cx={200}
      cy={220}
      outerRadius={150}
      width={500}
      height={460}
      data={[
        {
          subject: "1",
          A: chatsData.reduce((g, v) => {
            if (v.answersList.find(k => k.answer == "1" && k.question == id)) return ++g;
            else return g;
          }, 0),
          fullMark: 150,
        },
        {
          subject: "2",
          A: chatsData.reduce((g, v) => {
            if (v.answersList.find(k => k.answer == "2" && k.question == id)) return ++g;
            else return g;
          }, 0),
          fullMark: 150,
        },
        {
          subject: "3",
          A: chatsData.reduce((g, v) => {
            if (v.answersList.find(k => k.answer == "3" && k.question == id)) return ++g;
            else return g;
          }, 0),
          fullMark: 150,
        },
        {
          subject: "4",
          A: chatsData.reduce((g, v) => {
            if (v.answersList.find(k => k.answer == "4" && k.question == id)) return ++g;
            else return g;
          }, 0),
          fullMark: 150,
        },
        {
          subject: "5",
          A: chatsData.reduce((g, v) => {
            if (v.answersList.find(k => k.answer == "5" && k.question == id)) return ++g;
            else return g;
          }, 0),
          fullMark: 150,
        },
      ]}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="#eee" />
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}
