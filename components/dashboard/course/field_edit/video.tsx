"use client";
import { Button } from "@/components/ui/button";
import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormVideo } from "@/lib/type";
import { ChangeEvent } from "react";



function Video({ form }: UseFormVideo) {

  const handleChange = async (e: ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0]
      const vdUrl = URL.createObjectURL(file)
      form.setValue('url',vdUrl)
      console.log(vdUrl)
      return () => URL.revokeObjectURL(vdUrl);
    }
  }
  
  return (
    <FormField
      control={form.control}
      name="url"
      render={({ field }) => (
        <FormItem>
          <div className="space-y-2">
            <video controls className="w-full h-full max-h-40 rounded-sm" >
              <source src={field.value} type="video/mp4" />
            </video>
            <Input type="file" className="hidden" id="video" onChange={handleChange} accept="video/mp4,video/x-m4v,video/*"/>
            <Button variant={'secondary'} asChild>
              <Label htmlFor="video">Change video</Label>
            </Button>
          </div>
        </FormItem>
      )}
    />
  );
}

export default Video;
