"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { networkingSkillsData } from "@/lib/data";
import { authChecked } from "@/lib/check-auth-func";
import HavePermission from "./have-permission";

export default function Navbar() {
  const [authed, setAuthed] = React.useState(false);
  React.useEffect(() => {
    async function authCheck() {
      const result = await authChecked();
      setAuthed(result);
    }
    authCheck();
  });
  return (
    <NavigationMenu className="p-5">
      <NavigationMenuList>
        {!authed ? (
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Homepage
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : (
          <HavePermission />
        )}
        <NavigationMenuItem>
          <Link href="/programing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Programing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Networking</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[90%] sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={"/networking"}
                    className={
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    }
                  >
                    <div className="text-sm font-medium leading-none">
                      Networking
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Veritatis deserunt praesentium distinctio delectus vitae.
                      Rerum esse numquam repudiandae sunt unde, iusto eius neque
                      odio quidem! Doloribus voluptatum optio sapiente facilis!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {networkingSkillsData.map((nt) => (
                <li key={nt.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/networking/${nt.course_id}`}
                      className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      }
                    >
                      <div className="text-sm font-medium leading-none">
                        {nt.name}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {nt.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
