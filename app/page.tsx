import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import Logo from "@/components/logo"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/sidebar"
import { playlists } from "@/data/playlists"
import { Accounts } from "@/components/accounts"
import { Account } from "@/models/account"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export const metadata: Metadata = {
  title: "get2FAst",
  description: "Get your 2FA codes on every device",
}

const accountData: Account[] = [
  {
    name: "Mark",
    email: "Facebook",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://facebook.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Elon Musk",
    email: "Twitter",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://x.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Bill Gate",
    email: "Microsoft",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://microsoft.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Sam Altman",
    email: "ChatGPT",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://chat.openai.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Yann LeCun",
    email: "Facebook",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://facebook.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Andree",
    email: "Reddit",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://reddit.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Sofia Davis",
    email: "Google",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=64",
    initials: "SD",
    role: "Owner",
    code: "123456"
  },
  {
    name: "Bruce Lee",
    email: "Youtube",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=64",
    initials: "JL",
    role: "Member",
    code: "123456"
  },
  {
    name: "Michale Jackson",
    email: "Spotify",
    avatarSrc: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://spotify.com&size=64",
    initials: "JL",
    role: "Member",
    code: "123456"
  }
];

export default function Main() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Nav */}
        <div className="hidden md:flex flex-col border-b">
          <div className="flex h-16 items-center px-4">
            <div className="flex-grow">
              <Logo />
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
        {/* main ui */}
        <div className="flex flex-grow">
          {/* Sidebar */}
          {/* <div className="hidden lg:flex flex-col flex-grow col-span-1 border-l p-4"> */}
            <Sidebar recents={playlists} className="hidden lg:block" />
          {/* </div> */}

          {/* Main Content */}
          <div className="flex flex-col flex-grow col-span-3 lg:col-span-3 lg:border-l p-2">
            <Accounts accounts={accountData} />
          </div>
          {/* Advert Column */}
          <div className="hidden lg:flex flex-col flex-grow col-span-1 border-l p-4">
            <Card className="p-4 rounded-lg shadow-md">
              <CardHeader>
                <CardTitle>Advertisement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Check out our latest products!</CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-blue-500 hover:underline">Learn More</a>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}
