"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TformSchema, formSchema } from "@/lib/types";
import { ToastContainer, toast } from "react-toastify";
import { addLeadToDB } from "../actions/addLeadToDB";

const ContactPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TformSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: TformSchema) => {
    // handle form submission
    console.log(data);

    const res = await addLeadToDB(data).then((res) => {
      return res;
    });

    if (res.error) {
      toast.error(
        "An error occurred, please try again or contact us on Whatsapp"
      );
    } else {
      toast.success(
        "Application Submitted Successfully! We will contact you soon"
      );
      // reset();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-12 lg:max-w-[544px]"
      >
        <div className="levare-input-and-label-container">
          Full name
          <input
            autoComplete="off"
            type="text"
            {...register("fullName", {
              required: "Required",
            })}
            className="levare-form-input"
          />
          {errors.fullName && (
            <p className="text-red-500">{`${errors.fullName.message}`}</p>
          )}
        </div>
        <div className="levare-input-and-label-container">
          Your Best Email
          <input
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
        <div className="levare-input-and-label-container">
          Current Website URL
          <input
            autoComplete="off"
            type="text"
            {...register("websiteUrl", {
              required: "Required",
            })}
            className="levare-form-input"
          />
          {errors.websiteUrl && (
            <p className="text-red-500">{`${errors.websiteUrl.message}`}</p>
          )}
        </div>
        <div className="levare-input-and-label-container">
          What is your story, what does your business do and how did you get
          here?
          <input
            autoComplete="off"
            type="text"
            {...register("storyQuestion", {
              required: "Required",
            })}
            className="levare-form-input"
          />
          {errors.storyQuestion && (
            <p className="text-red-500">{`${errors.storyQuestion.message}`}</p>
          )}
        </div>
        <div className="levare-input-and-label-container">
          Which of our services are you interested in?
          <input
            autoComplete="off"
            type="text"
            {...register("servicesQuestion", {
              required: "Required",
            })}
            className="levare-form-input"
          />
          {errors.servicesQuestion && (
            <p className="text-red-500">{`${errors.servicesQuestion.message}`}</p>
          )}
        </div>
        <div className="levare-input-and-label-container">
          Tell us about your project? What problems are you hoping to solve by
          working with us and what does sucess look like for your business?
          <input
            autoComplete="off"
            type="text"
            {...register("projectQuestion", {
              required: "Required",
            })}
            className="levare-form-input"
          />
          {errors.projectQuestion && (
            <p className="text-red-500">{`${errors.projectQuestion.message}`}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className={`text-white bg-levare-red text-center rounded-full px-8 py-3 disabled:bg-orange-800 w-fit`}
          type="submit"
        >
          -&gt; Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactPageForm;
