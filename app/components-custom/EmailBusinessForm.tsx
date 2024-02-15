"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import collectEmailIntoDatabase from "../actions/collectEmailIntoDatabase";
import { useState } from "react";

const formSchema = z.object({
  emailAddress: z.string().email(),
  businessLink: z.string().url(),
});

export default function BusinessForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      businessLink: "",
    },
  });

  //   On Form Submission
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    const responseStatus = await collectEmailIntoDatabase(values);
    if (responseStatus === "Created" || responseStatus === "Conflict") {
      setIsSubmitting(false);
      setHasSubmitted(true);
    }
  };

  return (
    <Form {...form}>
      <p className={`${hasSubmitted ? `text-green-600` : `text-neutral-800`}`}>
        {hasSubmitted
          ? "Thank you for submitting! We will be in touch with you shortly"
          : "Please fill out this form & we will contact shortly you with the next steps!"}
      </p>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Your Best Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="businessLink"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  A Link to your Business Website / Social Media Page
                </FormLabel>
                <FormControl>
                  <Input placeholder="Link to your Business" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button
          type="submit"
          disabled={hasSubmitted || isSubmitting}
          className="w-full disabled:opacity-75"
        >
          {isSubmitting ? "..." : hasSubmitted ? "Thank you!" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
