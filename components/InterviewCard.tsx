'use client';

import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor = {
    Behavioral: "bg-purple-600",
    Mixed: "bg-indigo-600",
    Technical: "bg-blue-600",
  }[normalizedType] || "bg-gray-600";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="w-[360px] max-sm:w-full min-h-96 bg-[#1c1c24] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between relative">
      {/* Badge */}
      <div
        className={cn(
          "absolute top-0 right-0 px-4 py-1 rounded-bl-xl text-sm font-medium",
          badgeColor
        )}
      >
        {normalizedType}
      </div>

      {/* Top Section */}
      <div>
        <Image
          src={getRandomInterviewCover()}
          alt="cover-image"
          width={64}
          height={64}
          className="rounded-full object-cover"
        />

        <h3 className="mt-4 text-lg font-semibold capitalize">
          {role} Interview
        </h3>

        <div className="flex flex-row gap-4 mt-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
            <p>{formattedDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/star.svg" width={20} height={20} alt="star" />
            <p>{feedback?.totalScore || "---"}/100</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-400 line-clamp-2">
          {feedback?.finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-6">
        <DisplayTechIcons techStack={techstack} />

        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          <Link
            href={
              feedback
                ? `/interview/${interviewId}/feedback`
                : `/interview/${interviewId}`
            }
          >
            {feedback ? "Check Feedback" : "View Interview"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InterviewCard;
