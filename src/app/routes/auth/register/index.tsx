"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import { Link, useNavigate } from "react-router-dom"


const FormSchema = v.object({
  email: v.pipe(v.string(), v.email('Please enter a valid email')),
  password: v.pipe(
    v.string(),
    v.regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must be at least 8 characters long, include a capital letter, a number, and a symbol'
    )
  ),
  confirmPassword: v.string('Re-enter password')
})
// const FormSchema = v.pipe(
//   v.object({
//     email: v.pipe(v.string(), v.email('Please enter a valid email')),
//     password: v.pipe(
//       v.string(),
//       v.regex(
//         /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         'Password must be at least 8 characters long, include a capital letter, a number, and a symbol'
//       )
//     ),
//     confirmPassword: v.string("Please enter your password again")
//   }),
//   v.check(
//     (input) => input.password === input.confirmPassword,
//     'The list does not match the length.'
//   )
// );

export default function Register() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: valibotResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
  })

  function onSubmit(data: v.InferInput<typeof FormSchema>) {
    console.log(data)
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="mb-12">
        <h1 className="font-bold text-2xl text-center">
          Register
        </h1>
        <p className="text-slate-500 mb-2 text-sm text-center" > Ignite Curiosity, Master the Quiz! </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter Password" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Re-Enter Password" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Link to={`/auth/login`}>
              <a className="text-sm text-blue-500"> Already have an account ? Login. </a>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Button style={{ background: "linear-gradient(90deg, rgba(0, 123, 255, 1) 0%, rgba(123, 31, 162, 1) 100%)" }} type="submit">Register</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
