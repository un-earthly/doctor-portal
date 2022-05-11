import { useLocation, useParams } from "react-router-dom"

export default function SetFooter({ children }) {
    const currentLocation = useLocation()
    if (currentLocation.pathname === '/login' || currentLocation.pathname === '/register') {
        return null;
    }
    else {
        return children;
    }
}
