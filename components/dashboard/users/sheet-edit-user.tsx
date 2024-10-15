"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Profile from "./user_field/profile";

function SheetEditUser({ children }: { children: React.ReactNode }) {
  const FormShema = z.object({
    profile: z.string(),
    username: z.string(),
    email: z.string(),
    role: z.enum(["admin", "student", "moderator"]),
    status: z.enum(["active", "inactive"]),
    amount: z.number(),
  });
  const form = useForm<z.infer<typeof FormShema>>({
    resolver: zodResolver(FormShema),
    defaultValues: {
      profile: "",
      username: "",
      email: "",
      role: "admin",
      status: "active",
      amount: 39,
    },
  });
  const onSumit = async (data: z.infer<typeof FormShema>) => {
    console.log(data);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSumit)}>
            <SheetHeader>
              <SheetTitle>Update User Information</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, sapiente.
              </SheetDescription>
            </SheetHeader>
            <div>
                <Profile form={form.control}/>
            </div>
            <SheetFooter>
              <Button variant={"outline"}>Save change</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default SheetEditUser;
