import { useMasters } from "../MastersContext";
import { Master } from "./Master"

export function MastersList() {
    const { masters } = useMasters();

    if (masters?.length === 0) {
        return <p>Нет данных</p>;
    }

    return (
        <div className="row">
            {masters?.map((item) => (
                <div key={item.id} className="col">
                    <Master data={item} />
                </div>
            ))}
        </div>
    )
}