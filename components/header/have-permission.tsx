import Link from "next/link"
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "../ui/navigation-menu"


function HavePermission() {
  return (
    <NavigationMenuItem>
          <NavigationMenuTrigger>Setting</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[90%] sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/`}
                      className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      }
                    >
                      <div className="text-sm font-medium leading-none">
                        Homepage
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam?
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/dashboard`}
                      className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      }
                    >
                      <div className="text-sm font-medium leading-none">
                        Dashboard
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi corrupti, esse assumenda natus eos et culpa sapiente quos nostrum quasi quam quo, inventore suscipit error quidem praesentium veniam necessitatibus!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
  )
}

export default HavePermission