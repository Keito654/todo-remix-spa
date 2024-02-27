import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import type { FC } from "react";
import type { Todo } from "~/Storage/types";

type Props = {
  todo: Todo;
  handleTodoChange: (targetTodo: Todo, changedState: boolean) => void;
};

export const TodoCard: FC<Props> = ({ todo, handleTodoChange }) => {
  const handleClick = () => {
    handleTodoChange(todo, !todo.isCompleted);
  };

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.isCompleted}
                name={todo.name}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleClick();
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              />
            }
            label={todo.name}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
