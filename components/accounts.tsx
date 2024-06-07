import React from 'react';
import { CopyIcon, GearIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Account } from '@/models/account';

interface AccountsProps {
  accounts: Account[];
}

export const Accounts: React.FC<AccountsProps> = ({ accounts }) => {
  return (
    <div className="flex flex-col gap-2 flex-grow overflow-y-auto px-2 py-2">
      {accounts.map((account, index) => (
        <div key={index} className="p-3 border-2 border-gray-100 rounded-lg shadow-sm flex items-center justify-between dark:border-zinc-800 dark:text-white dark:shadow-md shadow-sm">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={account.avatarSrc} />
              <AvatarFallback>{account.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{account.name}</p>
              <p className="text-sm text-muted-foreground">{account.email}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-md font-medium leading-none">{account.code}</span>
            <Button variant="outline" className="mr-2">
              <CopyIcon className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="outline" className="">
              <GearIcon className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
