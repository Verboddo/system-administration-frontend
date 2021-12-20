import styles from "./Navigation.module.css"
import Button from "../buttons/Button";
import {useNavigate} from "react-router-dom";

function Navigation() {

    const navigate = useNavigate()

    return(
        <div className={styles["nav-container"]}>
            <Button
            type="button"
            navigate={navigate}
            onClick={() => navigate("/")}
            >
                Home
            </Button>
            <Button
                type="button"
                navigate={navigate}
                onClick={() => navigate("/create-server-page")}
            >
                Create server
            </Button>
        </div>
    )
}

export default Navigation