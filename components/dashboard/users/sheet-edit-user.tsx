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
import { FormUserShema } from "@/lib/type";
import Username from "./user_field/username";
import Email from "./user_field/email";
import Role from "./user_field/role";
import Amount from "./user_field/amount";

function SheetEditUser({ children }: { children: React.ReactNode }) {

  const form = useForm<z.infer<typeof FormUserShema>>({
    resolver: zodResolver(FormUserShema),
    defaultValues: {
      profile: "",
      username: "",
      email: "",
      role: "admin",
      status: "active",
      amount: 39,
    },
  });
  const onSumit = async (data: z.infer<typeof FormUserShema>) => {
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
            <div className="my-5 flex flex-col gap-3">
                <Profile form={form}/>
                <Username form={form}/>
                <Email form={form}/>
                <Role form={form} />
                <Amount form={form} />
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
