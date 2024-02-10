import { NewButton } from "./newButton"

export const SideBar = () => {
    return (
        <aside className="fixed z-10 left-0 bg-teal-100 bg-blue-200 h-full w-[60px] flex p-3 flex-col gap-y-4">
            <NewButton />
        </aside>
    )
}