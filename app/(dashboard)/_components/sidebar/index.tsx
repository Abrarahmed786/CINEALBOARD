import List from "./list"
import { NewButton } from "./newButton"

export const SideBar = () => {
    return (
        <aside className="hidden fixed z-10 left-0 bg-teal-100 h-full w-[60px] flex p-3 flex-col gap-y-4">
            <List />
            <NewButton />
        </aside>
    )
}