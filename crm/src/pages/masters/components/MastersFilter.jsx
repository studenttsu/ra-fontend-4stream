import { useMasters } from "../MastersContext"

export function MastersFilter() {
    const { search, setSearch } = useMasters();

    <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите имя"
    />
}