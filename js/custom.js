// Child Passed Will be Icon div bcz we want to use svg inline so that styling would be easy
const IconAndText = ({ children, heading, subheading }) => {
  return (
    <div className="flex items-center">
      <div className="flex-center">{children}</div>
      <div className="flex-col justify-center g-0">
        {heading && <div className="fs-l">{heading}</div>}
        {subheading && <div className="fs-s">{subheading}</div>}
      </div>
    </div>
  );
};

const NavBar = () => {
  const { theme, changeTheme } = React.useContext(GLOBAL_CONTEXT);

  const iconDiv = <img className="navIcon" src="../images/school.svg" />;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
    <div className={`custom-nav flex items-center justify-between ${theme}`}>
      <IconAndText heading={"B.Tech 2022"} subheading={"June-Dec 2022"}>
        {iconDiv}
      </IconAndText>

      <div>
        <img
          className="clr-pallete cp"
          src="../images/pallete.svg"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

const Header = () => {
  const { theme } = React.useContext(GLOBAL_CONTEXT);
  return (
    <div className={`header rel flex-col items-center`}>
      <NavBar />

      <div className={`abs custom-slider flex-center bs ${theme}`}>
        Welcome To Kuwait University
      </div>
    </div>
  );
};

const MainContent = () => {
  const { theme, changeTheme } = React.useContext(GLOBAL_CONTEXT);

  const colorRef = React.useRef("");

  const changeBg = (e) => {
    const bgColor = "--bg-clr";

    // Set selected color on background
    document.documentElement.style.setProperty(bgColor, e.target.value); // documentElement ==> root

    // Set new Theme
    changeTheme(e.target.value);
  };

  const iconDiv = <img className="sectionIcon" src="../images/schedule.png" />;

  return (
    <div className="flex-wrap main-content">
      <div className={`flex-col bs ${theme}`}>
        <div className="flex section-header">
          <IconAndText heading={"Timetable"}>{iconDiv}</IconAndText>
        </div>
      </div>

      <div className={`flex-col bs ${theme}`}>
        <div className="flex section-header">
          <IconAndText heading={"Attendance"}>{iconDiv}</IconAndText>
        </div>
      </div>

      <div className={`flex-col bs ${theme}`}>
        <div className="flex section-header">
          <IconAndText heading={"Section Heading 3"}>{iconDiv}</IconAndText>
        </div>
      </div>

      <div className={`flex-col bs ${theme}`}>
        <div className="flex section-header">
          <IconAndText heading={"Section Heading 4"}>{iconDiv}</IconAndText>
        </div>
      </div>

      <div>
        Choose Color From Color Picker
        <input type="color" ref={colorRef} onChange={changeBg} />
      </div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = React.useState("light");

  const changeTheme = (newTheme) => {
    if (theme.toLowerCase() !== newTheme.toLowerCase()) {
      setTheme(newTheme);
    }
  };

  const contextVal = {
    theme,
    changeTheme,
  };

  return (
    <GLOBAL_CONTEXT.Provider value={contextVal}>
      <div className={`app-wrapper ${theme}`}>
        <Header />
        <MainContent />
      </div>
    </GLOBAL_CONTEXT.Provider>
  );
};

const GLOBAL_CONTEXT = React.createContext();

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
