import React, { useEffect } from "react"
import useDarkMode from "use-dark-mode"
import Toggle from "react-toggle"
import "./DarkModeToggle.css"
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  useEffect(() => {
    darkMode.enable()
  }, [])

  return (
    <div>
      <Toggle
        unchecked="true"
        icons={{
          checked: (
            <span role="img" aria-label="change-theme">
              {" "}
              🌙{" "}
            </span>
          ),
          unchecked: (
            <span role="img" aria-label="change-theme">
              {" "}
              ☀️{" "}
            </span>
          ),
        }}
        onChange={darkMode.toggle}
      />
    </div>
  )
}

export default DarkModeToggle
