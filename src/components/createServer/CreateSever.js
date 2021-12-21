import styles from "./CreateSever.module.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import InputField from "../input/InputField";
import Button from "../buttons/Button";
import {useState} from "react";

const CreateSever = () => {

    const { register, handleSubmit, formState: {errors, isDirty, isValid} } = useForm({mode: 'onBlur'})
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
                        required="Ip-address cannot  be empty"
                        register={register}
                        errors={errors}
                        id="ipAddress"
                        pattern={/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/}
                        patternMessage="this is not an valid ip-address"
                    >
                        ip-address:
                    </InputField>
                    <InputField
                        className={styles["create-server-input-field"]}
                        htmlFor="serverName"
                        type="text"
                        placeholder="server name"
                        registerName="serverName"
                        required="Server name cannot  be empty"
                        register={register}
                        errors={errors}
                        id="serverName"
                    >
                        Server name:
                    </InputField>
                    <Button
                        className={styles["create-server-button"]}
                        type="submit"
                        disabled={!isDirty || !isValid}
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