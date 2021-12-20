import styles from "./CreateSever.module.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import InputField from "../input/InputField";
import Button from "../buttons/Button";
import {useState} from "react";

const CreateSever = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const [error, setError] = useState(false)

    const onFormSubmit = async (data) => {
        try {
            await axios.post("http://localhost:8080/api/servers", {
                ipAddress: data.ipAddress,
                serverName: data.serverName,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            navigate("/")
        } catch (e) {
            if (e) {
                setError(true)
            }
        }
    }

    return(
        <div className={styles["create-server-container"]}>
            <form
                className={styles["create-server-form"]}
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <label htmlFor="create-server">
                    <InputField
                        className={styles["create-server-input-field"]}
                        htmlFor="ipAddress"
                        type="text"
                        placeholder="ip address"
                        registerName="ipAddress"
                        required={true}
                     register={register}
                    >
                        ip-address:
                    </InputField>
                    <InputField
                        className={styles["create-server-input-field"]}
                        htmlFor="serverName"
                        type="text"
                        placeholder="server name"
                        registerName="serverName"
                        required={true}
                        register={register}
                    >
                        Ip-address:
                    </InputField>
                    <Button
                        className={styles["create-server-button"]}
                        type="submit"
                    >
                        Create server
                    </Button>
                    {error && <p className="error">Ip-address or server name already exists</p>}
                </label>
            </form>
        </div>
    )
}

export default CreateSever