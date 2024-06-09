import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      className={`text-white flex gap-4 md:gap-10 p-4 md:p-8 rounded-xl hover:bg-[#18212B] ${
        isSelected ? "bg-[#18212B]" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex-none border rounded-xl w-8 h-8 flex items-center justify-center">
        {question.position}
      </div>
      <div className="flex-1 text-lg lg:text-2xl md:text-2xl">
        {question.title}
      </div>
      <div className="flex-none">
        <ExpandMoreIcon />
      </div>
    </div>
  );
};
