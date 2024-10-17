'use client'

import { FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UseForm } from "@/lib/type"


function Amount({ form }: UseForm) {
  return (
    <FormField 
      name="amount"
      control={form.control}
      render={({ field })=> (
        <FormItem>
          <div className="space-y-1">
            <Label>Amount</Label>
            <Input type="number" onChange={e=>form.setValue('amount',Number(e.target.value))} defaultValue={field.value} placeholder="Amount"/>
          </div>
        </FormItem>
      )}
    />
  )
}

export default Amount