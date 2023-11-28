"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsDarkMode(theme === "dark" ? true : false);
  }, [theme]);

  return (
    <div className="w-full flex justify-center mt-16">
      <GitHubCalendar
        username="azismaulik"
        hideTotalCount={true}
        theme={{
          light: ["#d7dbd7", "rgb(0, 218, 61)"],
          dark: ["#333", "rgb(149, 18, 199)"],
        }}
        colorScheme={isDarkMode ? "dark" : "light"}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default GithubCalendar;
