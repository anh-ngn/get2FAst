import React from 'react';
import { CopyIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Account } from '@/models/account';

interface AccountsProps {
  accounts: Account[];
}

export const Accounts: React.FC<AccountsProps> = ({ accounts }) => {
  return (
    <div className="grid gap-2">
      {accounts.map((account, index) => (
        <div key={index} className="p-3 border-2 border-gray-100 rounded-lg shadow-sm flex items-center justify-between"> {/* This div has the outline effect */}
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
            <Button variant="outline" className="">
              <CopyIcon className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

