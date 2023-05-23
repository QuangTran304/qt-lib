import { Button, TeamMember } from "./components";

function App() {
  return (
    <>
      <h1>Hello React Lib</h1>

      <Button variant="contained">My button</Button>

      <TeamMember
        name="John Doe"
        title="Manager"
        photo="https://picsum.photos/200"
      />
    </>
  );
}

export default App;
