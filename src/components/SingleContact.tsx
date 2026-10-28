"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import { UserRound, Calendar, MessageCircle, Mail, Trash } from "lucide-react";
import { IContact } from "@/interfaces";
import { Button } from "@/components/ui/button";

import { deleteContact } from "@/actions/contact-action";
import Spinner from "@/components/Spinner";

interface ContactProps {
  key: string;
  data: IContact;
}
function SingleContact({ key, data }: ContactProps) {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="flex w-full sm:min-w-fit md:min-w-fit lg:min-w-fit gap-x-4   shadow-md shadow-black border border-sky-500 text-black bg-zinc-900 "
      key={data.id}
    >
      <div className=" flex flex-col items-start justify-between  m-4">
        <h5>
          <span>From: </span>
          {data.postername}
        </h5>

        {/*      <Button
          onClick={() => router.push(`/admin/contacts/${data.id}`)}
          className=" cursor-pointer text-[1.2rem] text-zinc-900 hover:text-white bg-blue-500"
        >
          {loading ? <Spinner /> : <pen size={16} />}
        </Button> */}

        <p>
          <span>Email: </span>
          {data.email}
        </p>
        <p>
          <span>Topic: {"  "}</span>
          {data.topic}
        </p>
        <p>
          <span>Message: </span>
          {data.message}
        </p>

        <div className="flex items-center gap-4 m-3  ">
          <h5>
            {dayjs(data.createdAt).format("MMMM D YYYY")}
          </h5>

          <Button
            size={"icon"}
            variant={"destructive"}
            onClick={async () => {
              setLoading(true);
              await deleteContact({ id: data.id });
              setLoading(false);
            }}
          >
            {loading ? <Spinner /> : <Trash size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SingleContact;
