import type React from "react";
import type { MetaFunction } from "@remix-run/node";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";

import { inputTextForRegisterTaskAtom, isShowCompletedAtom } from "./atom";
import { todoListStorage } from "~/Storage/atom";
import { TodoCard } from "./TodoCard";
import type { Todo } from "~/Storage/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Todoリスト" },
    { name: "description", content: "Todoリスト" },
  ];
};

export default function Index() {
  const [input, setInput] = useAtom(inputTextForRegisterTaskAtom);
  const [todoList, setTodoList] = useAtom(todoListStorage);
  const [isShowCompletedTodo, setIsShowCompletedTodo] =
    useAtom(isShowCompletedAtom);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleRegisterButtonClick = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      name: input,
      isCompleted: false,
      createdAt: new Date(),
    };

    setTodoList((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleTodoChange = (targetTodo: Todo, changedState: boolean) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === targetTodo.id) {
          return { ...todo, isCompleted: changedState };
        }
        return todo;
      })
    );
  };

  const handleIsShowCompletedTodoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsShowCompletedTodo(event.target.checked);
  };

  return (
    <>
      <Grid xs={3} sm={7} md={10}>
        <TextField
          fullWidth
          label="タスク名"
          value={input}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid xs={1} md={2}>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: "100%" }}
          onClick={handleRegisterButtonClick}
        >
          登録
        </Button>
      </Grid>
      <Grid>
        <FormControlLabel
          control={
            <Switch
              name="完了済みのタスクを表示"
              value={isShowCompletedTodo}
              onChange={handleIsShowCompletedTodoChange}
            />
          }
          label="完了済みのタスクを表示"
        />
      </Grid>
      {todoList
        .filter((todo) => todo.isCompleted === isShowCompletedTodo)
        .map((todo) => (
          <Grid xs={4} sm={8} md={12} key={todo.id}>
            <TodoCard todo={todo} handleTodoChange={handleTodoChange} />
          </Grid>
        ))}
    </>
  );
}
