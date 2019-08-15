import React from "react";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Window() {
    const [title, setTitle] = React.useState("Home");
    const [user, setUser] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState();

    React.useEffect(() => {
        async function fetchUser() {
            setIsLoading(true)
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                const user = await res.json()
                setUser(user)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                // setError(error)
                console.log(error)
            }
        }
        fetchUser()
    }, [])

    const updateTitleHandler = (value) => {
        setTitle(value)
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                height: "500px",
                margin: "5px"
            }}
        >
            {isLoading
                ? <h3>Loading...</h3>
                : <>
                    <Navbar title={title} user={user} />
                    <div style={{ flex: "1" }}>
                        <Content title={title} updateTitle={updateTitleHandler} />
                    </div>
                    <Footer title={title} user={user} />
                </>
            }
            {error && <h3>Error: {error}</h3>}
        </div>
    );
}

export default Window;
