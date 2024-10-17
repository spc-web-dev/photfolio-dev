'use client'
import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseForm } from "@/lib/type";
import Image from "next/image";
import { ChangeEvent } from "react";


function Profile({ form }: UseForm) {
  const handleChangeProfile = (e: ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files && e.target.files[0]
    if(file){
      const urlImage = URL.createObjectURL(file)
      form.setValue('profile',urlImage)
    }
  }
  return (
    <FormField
        name="profile"
        control={form.control}
        render={({ field })=>(
            <FormItem>
                <div className="flex justify-center flex-col gap-2 items-center">
                  <Image className=" rounded-full w-40 h-40" src={field.value || 'https://i.pravatar.cc/150?img=1'} alt="profile" width={200} height={200} quality={95}/>
                  <Label htmlFor="profile" className="bg-slate-100 hover:bg-slate-200 p-2 rounded-md cursor-pointer">Change Profile</Label>
                  <Input type="file" onChange={handleChangeProfile} name="profile" id="profile" className="hidden"/>
                </div>
            </FormItem>
        )}
    />
  )
}

export default Profile