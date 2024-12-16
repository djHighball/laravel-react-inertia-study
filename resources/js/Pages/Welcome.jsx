import { useEffect } from "react";

const Welcome = () => {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);

    return <h1>Welcome Inertia.jsx</h1>;
}

export default Welcome;
