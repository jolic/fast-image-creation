import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [isShrinkView, setIsShrinkView] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const pathname = useLocation().pathname

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView)
  }

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark")
  }

  const tasks = [
    {
      id: 1,
      name: 'Tasks',
      link: '/tasks',
    },
    // {
    //   id: 2,
    //   name: 'Task 2',
    //   link: '/task2',
    // },
    // {
    //   id: 3,
    //   name: 'Task 3',
    //   link: '/task3',
    // },
  ]

  return (
    <div className={`sidebar-container${isShrinkView ? " shrink" : ""}`}>
      {/* <button
        className="sidebar-viewButton"
        type="button"
        aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
        title={isShrinkView ? "Expand" : "Shrink"}
        onClick={handleSidebarView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button> */}
      <div className="sidebar-wrapper">
        <div className="sidebar-themeContainer">
          <label
            labelFor="theme-toggle"
            className={`sidebar-themeLabel${isDarkMode ? " switched" : ""}`}
          >
            <input
              className="sidebar-themeInput"
              type="checkbox"
              id="theme-toggle"
              onChange={handleThemeChange}
            />
            <div className="sidebar-themeType light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="sidebar-listIcon"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <span className="sidebar-themeInputText">Light</span>
            </div>
            <div className="sidebar-themeType dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="sidebar-listIcon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span className="sidebar-themeInputText">Dark</span>
            </div>
          </label>
        </div>
        <ul className="sidebar-list">
          {tasks.map((task) => (
            <li className={`sidebar-listItem${task.link === pathname ? " active" : ""}`} key={task.id}>
              <Link to={task.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sidebar-listIcon"
                >
                  <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
                <span className="sidebar-listItemText">{task.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
