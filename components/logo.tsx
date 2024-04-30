"use client"

import * as React from "react"
import {
  RocketIcon
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover"


type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>

interface LogoProps extends ButtonProps { }

export default function Logo({ className }: LogoProps) {

  return (
    <Button
      variant="outline"
      className={cn("justify-between", className)}
    >
      <RocketIcon className="h-5 w-5 mr-2" />
      {"get2FAst"}
    </Button>
  )
}