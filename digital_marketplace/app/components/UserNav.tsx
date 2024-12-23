import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function UserNav() {
    return (
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} size={"icon"} className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                        <AvatarFallback>JAN</AvatarFallback>
                        </Avatar>
                  </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Ahmet Sen</p>
                      <p className="text-xs leading-none text-muted-foreground ">ahmetsen@gmail.com</p>
                    </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuGroup>
                  <DropdownMenuItem>Test Item</DropdownMenuItem>
                  <DropdownMenuItem>Test Item</DropdownMenuItem>
                  <DropdownMenuItem>Test Item</DropdownMenuItem>
                  <DropdownMenuItem>Test Item</DropdownMenuItem>
                  <DropdownMenuItem>Test Item</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuItem asChild>
                <LogoutLink>Logout</LogoutLink>
              </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
        
    )

    }