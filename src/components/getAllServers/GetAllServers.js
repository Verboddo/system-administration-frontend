import axios from "axios";
import {useEffect, useState} from "react";
import Button from "../buttons/Button";
import styles from "./GetAllServer.module.css"
import "./GetAllServer.css"
import UpdateServer from "../updateServer/UpdateServer";

function GetAllServers() {

    const [server, setServer] = useState()
    const [active, setActive] = useState()

    console.log(server)

    useEffect(() => {
        try {
            const fetchServers = async () => {
                const result = await axios("http://localhost:8080/api/servers", {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                setServer(result.data)
            }
            fetchServers()
        } catch (e) {
            console.error(e)
        }
    }, [])

    const deleteServer = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/servers/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            {server && server.map((result) => {
                return (<section
                        className={styles["server-container"]}
                        key={result.id}>
                        <p>{result.id}</p>
                        <p>ip-address: {result.ipAddress}</p>
                        <p>server name: {result.serverName}</p>

                        <Button
                            className={styles["update-server-button"]}
                            type="button"
                            onClick={() => {
                                if (active === result.id) {
                                    setActive()
                                } else {
                                    setActive(result.id)
                                }
                            }}
                        >
                            Update Server
                        </Button>

                        <Button
                            className={styles["delete-server-button"]}
                            type="button"
                            onClick={() => {
                                deleteServer(result.id)
                            }}
                        >Delete Server</Button>

                        <div className={active === result.id ? "info active" : "info"}>
                            <UpdateServer
                            id={result.id}
                            />
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default GetAllServers