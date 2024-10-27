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
import { FormVideoShema } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Course, Description, Title, Video } from "./field_edit";

type Props = {
  children: React.ReactNode;
  course_id: string;
};

export default function SheetAddVideo({ children, course_id }: Props) {
  const form = useForm<z.infer<typeof FormVideoShema>>({
    resolver: zodResolver(FormVideoShema),
    defaultValues: {
      course_id,
      thumbnail: "",
      title: "",
      description: "",
      url: "",
      date: new Date(),
    },
  });
  const handleSubmit = (data: z.infer<typeof FormVideoShema>) => {
    console.log(data);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <SheetHeader>
              <SheetTitle>Add new video here.</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                quasi.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 my-4">
              <Video form={form} />
              <Title form={form} />
              <Description form={form} />
              <Course form={form} />
            </div>
            <SheetFooter>
              <Button variant={"outline"} type="submit">
                Add
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
