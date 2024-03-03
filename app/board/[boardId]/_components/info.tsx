"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/use-rename-modal";

import { Actions } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";

interface InfoProps {
  boardId: string;
}

const TabSeparator = () => {
  return <div className="text-neutral-300 px-px py-3 bg-neutral-200"></div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint
        label="Go to boards"
        side="bottom"
        sideOffset={10}
      >
        <Button
          variant="board"
          className="px-2"
        >
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Board logo"
              height={80}
              width={80}
            />
          </Link>
        </Button>
      </Hint>

      <TabSeparator />

      <Hint
        label="Edit title"
        side="bottom"
        sideOffset={10}
      >
        <Button
          variant={"board"}
          className="text-base font-normal px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>

      <TabSeparator />

      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
            <Hint label="main menu" side="bottom" sideOffset={10}>
                <Button size={"icon"} variant={"board"}>
                    <Menu />
                </Button>
            </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
