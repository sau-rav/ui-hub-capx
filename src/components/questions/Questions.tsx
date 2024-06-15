import { useCallback, useState } from "react";

import { Question } from "./components/question";

import { QUESTIONS } from "./contants";

export const Questions = (): JSX.Element => {
  const [selectedPosition, setSelectedPosition] = useState<
    number | undefined
  >();

  const selectQuestion = useCallback(
    (position: number) => {
      if (selectedPosition === position) {
        setSelectedPosition(undefined);
      } else {
        setSelectedPosition(position);
      }
    },
    [selectedPosition]
  );

  return (
    <div className="flex flex-col px-4 md:px-8 md:px-16 lg:px-24 gap-2">
      {QUESTIONS.map((question) => (
        <Question
          key={question.id}
          question={question}
          onSelect={selectQuestion}
          isSelected={selectedPosition === question.position}
        />
      ))}
    </div>
  );
};
