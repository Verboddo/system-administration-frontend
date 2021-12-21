import styles from "./UpdateServer.module.css"
import InputField from "../input/InputField";
import Button from "../buttons/Button";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";

const UpdateServer = ({id}) => {

    const { register, handleSubmit, formState: {errors, isDirty, isValid} } = useForm({mode: 'onBlur'})

    const [error, setError] = useState(false)

    const onFormSubmit = async (data) => {
        try {
            await axios.put(`http://localhost:8080/api/servers/${id}`, {
                ipAddress: data.ipAddress,
                serverName: data.serverName,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        } catch (e) {
            if (e) {
                setError(true)
            }
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className={styles["update-server-container"]}>
            <form
                className={styles["update-server-form"]}
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <label htmlFor="update-server">
                    <InputField
                        className={styles["update-server-input-field"]}
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
                        Ip-address:
                    </InputField>
                    <InputField
                        className={styles["update-server-input-field"]}
                        htmlFor="serverName"
                        type="text"
                        placeholder="server name"
                        registerName="serverName"
                        required="Server name cannot  be empty"
                        register={register}
                        errors={errors}
                        id="serverName"
                    >
                        Sever name:
                    </InputField>
                    <Button
                        className={styles["create-server-button"]}
                        type="submit"
                        onClick={() => refreshPage()}
                        disabled={!isDirty || !isValid}
                    >
                        Update Server
                    </Button>

                    {error && <p className="error">Ip-address or server name already exists</p>}
                </label>
            </form>
        </div>
    )
}

export default UpdateServer