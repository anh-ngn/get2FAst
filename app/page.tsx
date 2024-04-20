import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/sidebar"
import { playlists } from "@/data/playlists"
import { Accounts } from "@/components/accounts"

export const metadata: Metadata = {
  title: "get2FAst",
  description: "Get your 2FA codes on every device",
}

export default function Main() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Nav */}
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <div className="flex-grow">
                <TeamSwitcher />
                <MainNav className="mx-4" />
              </div>
              <div className="flex justify-center flex-grow items-center space-x-4">
                <Search />
              </div>
              <div className="flex-grow flex justify-end items-center space-x-4">
                <ModeToggle />
                <UserNav />
              </div>
            </div>
          </div>
        </div>
        {/* main ui */}
        <div className="flex flex-grow overflow-hidden">
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <Sidebar recents={playlists} className="hidden lg:block h-screen" />
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  <div className="h-full px-4 py-4 lg:px-4">
                    <Accounts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}