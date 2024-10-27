"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Video from "./field_edit/video";
import Title from "./field_edit/title";
import Description from "./field_edit/description";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormVideoShema } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import Course from "./field_edit/course";
import { Row } from "@tanstack/react-table";
import { videosData } from "@/lib/data";

type Props = {
  children: React.ReactNode;
  row: Row<(typeof videosData)[number]>;
};

function CourseEditSheet({ children, row }: Props) {
  const form = useForm<z.infer<typeof FormVideoShema>>({
    resolver: zodResolver(FormVideoShema),
    defaultValues: {
      course_id: row.getValue('course_id'),
      thumbnail: row.getValue('thumbnail'),
      title: row.getValue('title'),
      description: row.getValue('description'),
      url: row.getValue('url'),
      date: row.getValue('date'),
    },
  });
  const onSubmit = async (data: z.infer<typeof FormVideoShema>) => {
    console.log(data);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <SheetHeader>
              <SheetTitle>Edit video info.</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                alias?
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 my-4">
              <Video form={form} />
              <Title form={form} />
              <Description form={form} />
              <Course form={form} />
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

export default CourseEditSheet;
