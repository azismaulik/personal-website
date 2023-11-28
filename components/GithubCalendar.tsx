"use client";

import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  // get theme from localStorage

  useEffect(() => {
    const theme = localStorage?.getItem("theme");
    setIsDarkMode(theme === "dark" ? true : false);
  }, [isDarkMode]);

  return (
    <div className="w-full flex justify-center mt-16">
      <GitHubCalendar
        blockSize={17}
        hideTotalCount={true}
        theme={{
          light: ["#d7dbd7", "rgb(0, 218, 61)"],
          dark: ["#333", "rgb(149, 18, 199)"],
        }}
        colorScheme={isDarkMode ? "dark" : "light"}
        username="azismaulik"
      />
    </div>
  );
};

export default GithubCalendar;
