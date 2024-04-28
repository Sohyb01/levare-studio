"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TleadMagnetEmailFormSchema,
  leadMagnetEmailFormSchema,
} from "@/lib/types";
import { toast } from "react-toastify";
import collectEmailIntoDatabase from "../actions/collectEmailIntoDatabase";

const FreebiesPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TleadMagnetEmailFormSchema>({
    resolver: zodResolver(leadMagnetEmailFormSchema),
  });

  const onSubmit = async (data: TleadMagnetEmailFormSchema) => {
    // handle form submission
    console.log(data);

    const res = await collectEmailIntoDatabase(data).then((res) => {
      return res;
    });

    if (res.error) {
      toast.error("There was an error submitting your email");
    } else {
      toast.success("Enjoy your freebies!");
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-8 lg:max-w-[544px]"
    >
      <div className="levare-input-and-label-container">
        Your Best Email
        <input
          placeholder="Write here..."
          autoComplete="off"
          type="text"
          {...register("email", {
            required: "Required",
          })}
          className="levare-form-input"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className={`text-white bg-levare-red text-center rounded-full px-8 py-3 disabled:bg-orange-800 w-fit`}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FreebiesPageForm;
