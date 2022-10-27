import "./App.css";
import Profile from "./components/Profile";

function App() {
  const fullname = "Chouaieb Abidi";
  const bio = "New Student";
  const profession = "Web Developper";
  const HandleName = (x) => alert(x);
  return (
    <div>
      <Profile
        name={fullname}
        bio={bio}
        pro={profession}
        HandleName={HandleName}
      >
      <h1>Im a children props</h1>
      </Profile>
    </div>
  );
}

export default App;
