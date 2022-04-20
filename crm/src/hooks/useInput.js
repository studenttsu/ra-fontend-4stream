import { useState } from "react";

export function useInput(defaultValue = null) {
    const [value, setValue] = useState(defaultValue);

    function onChange(event) {
        setValue(event.target.value);
    }

    return { value, onChange, setValue };
}