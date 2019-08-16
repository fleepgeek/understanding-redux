import React from 'react';
import Screens from "./components/Screens";

function App() {
  const [channelName, setChannelName] = React.useState("Flying Hawk");
  const [user, setUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchUser() {
      setIsLoading(true)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const user = await res.json()
        setUser(user)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    fetchUser()
  }, [])

  const updateChannelNameHandler = (value) => {
    setChannelName(value)
  }

  return (
    <div className="app">
      <h3 className="section">App</h3>
      <h1>Channel: {channelName}</h1>
      <Screens 
        channelName={channelName} 
        updateChannelName={updateChannelNameHandler}
        user={user} />
    </div>
  );
}

export default App;
