"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TformSchema, formSchema } from "@/lib/types";
import { toast } from "react-toastify";
import { addFormApplicationToDB } from "../actions/addFormApplicationToDB";

const ContactPageForm = () => {
  const {
    watch,
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

    const res = await addFormApplicationToDB(data).then((res) => {
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
      reset();
    }
  };

  // Char count trackers
  const storyInput = watch("storyQuestion");
  const servicesInput = watch("servicesQuestion");
  const projectInput = watch("projectQuestion");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-12 lg:max-w-[544px]"
    >
      <div className="levare-input-and-label-container">
        <p>
          {" "}
          Full name <span className="text-levare-red">*</span>
        </p>
        <input
          placeholder="Write here..."
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
        <p>
          {" "}
          Your Best Email <span className="text-levare-red">*</span>
        </p>
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
      {/* Website URL */}
      <div className="levare-input-and-label-container">
        Current Website URL
        <input
          placeholder="Write here..."
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
      <div className="levare-input-and-label-container relative">
        <p>
          Tell us your story, what does your business do and how did you get
          here? <span className="text-levare-red">*</span>
        </p>
        <textarea
          placeholder="Write here..."
          autoComplete="off"
          {...register("storyQuestion", {
            required: "Required",
          })}
          className="levare-form-input h-[200px] border-[1px] border-solid border-neutral-700 p-4"
        />
        {/* Character counter */}
        {storyInput && storyInput.length && (
          <div
            className={`absolute w-full bottom-1 text-sm left-1.5  ${
              storyInput.length > 1000 ? "text-red-500" : "text-neutral-500"
            }`}
          >
            {storyInput.length}/1000
          </div>
        )}
        {errors.storyQuestion && (
          <p className="text-red-500">{`${errors.storyQuestion.message}`}</p>
        )}
      </div>
      <div className="levare-input-and-label-container">
        <p>
          Which of our services are you interested in?{" "}
          <span className="text-levare-red">*</span>
        </p>
        <input
          placeholder="Write here..."
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
      <div className="levare-input-and-label-container relative">
        <p>
          Tell us about your project? What problems are you hoping to solve by
          working with us and what does sucess look like for your business?
          <span className="text-levare-red">*</span>
        </p>
        <textarea
          placeholder="Write here..."
          autoComplete="off"
          {...register("projectQuestion", {
            required: "Required",
          })}
          className="levare-form-input h-[200px] border-[1px] border-solid border-neutral-700 p-4"
        />
        {projectInput && projectInput.length && (
          <div
            className={`absolute w-full bottom-1 text-sm left-1.5  ${
              projectInput.length > 1000 ? "text-red-500" : "text-neutral-500"
            }`}
          >
            {projectInput.length}/1000
          </div>
        )}
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
  );
};

export default ContactPageForm;
