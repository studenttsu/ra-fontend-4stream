import { useEffect, useState } from "react";
import mastersApi from "../../../api/masters-api";

function useInput(defaultValue = null) {
    const [value, setValue] = useState(defaultValue);

    function onChange(event) {
        setValue(event.target.value);
    }

    return { value, onChange, setValue };
}

export function MasterForm({ master }) {
    const surName = useInput('');
    const lastName = useInput('');
    const patronymic = useInput('');
    const position = useInput('');
    const photo = useInput(null);

    function handleForm(event) {
        event.preventDefault();
        mastersApi.createMaster({ surName, lastName, patronymic, position, photo });
    }

    useEffect(() => {
        // Object.keys(master).forEach(key => this[key]?.setValue(master[key]));
    }, [master]);

    return (<>    
        <form onSubmit={handleForm}>
            <label>
                <span>Фамилия</span>
                <input {...surName} />
            </label>

            <label>
                <span>Имя</span>
                <input {...lastName} />
            </label>

            <label>
                <span>Отчество</span>
                <input {...patronymic} />
            </label>

            <label>
                <span>Позиция</span>
                <input {...position} />
            </label>

            <label>
                <span>Фотография</span>
                <input type="file" {...photo} />
            </label>

            <button>Добавить</button>
        </form>
    </>);
}