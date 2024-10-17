'use client'

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UseForm } from "@/lib/type"


function Username({ form }: UseForm) {
  return (
    <FormField 
      name="username"
      control={form.control}
      render={({ field })=> (
        <FormItem>
          <div className="space-y-1">
            <Label>Username</Label>
            <Input type="text" onChange={e=>form.setValue('username',e.target.value)} defaultValue={field.value} placeholder="username"/>
          </div>
        </FormItem>
      )}
    />
  )
}

export default Username