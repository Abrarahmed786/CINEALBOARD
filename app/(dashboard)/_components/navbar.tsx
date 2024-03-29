import { UserButton } from "@clerk/nextjs"

export const NavBar = () => {
    return (
        <div className="flex item-center gap-x-4 p-5 bg-green-500">
            <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
                Search
            </div>
            <UserButton />
        </div>
    )
}