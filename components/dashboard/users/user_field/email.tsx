'use client'

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UseForm } from "@/lib/type"


function Email({ form }: UseForm) {
  return (
    <FormField 
      name="email"
      control={form.control}
      render={({ field })=> (
        <FormItem>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input type="text" onChange={e=>form.setValue('email',e.target.value)} defaultValue={field.value} placeholder="email"/>
          </div>
        </FormItem>
      )}
    />
  )
}

export default Email