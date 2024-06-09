import { Description } from "./components/Description";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import type { Question as QuestionType } from "../../types";
import { useCallback } from "react";

export const Question = ({
  question,
  isSelected,
  onSelect,
}: {
  question: QuestionType;
  isSelected: boolean;
  onSelect: (pos: number) => void;
}): JSX.Element => {
  const onClick = useCallback(() => {
    onSelect(question.position);
  }, [question.position, onSelect]);

  return (
    <div
      className={`text-white flex gap-4 md:gap-10 p-4 md:p-8 rounded-xl hover:bg-[#18212B] group ${
        isSelected ? "bg-[#18212B]" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex-none border rounded-xl w-8 h-8 flex items-center justify-center">
        {question.position}
      </div>
      <Description
        title={question.title}
        description={isSelected ? question.description : undefined}
        descriptionList={isSelected ? question.descriptionList : undefined}
        className="flex-1"
      />
      <div
        className={`flex-none rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-golden group-hover:text-black ${
          isSelected ? "bg-golden text-black" : ""
        }`}
      >
        {isSelected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
    </div>
  );
};
