import { atomWithStorage } from "jotai/utils";
import type { Todo } from "./types";

export const todoListStorage = atomWithStorage<Todo[]>("todoList", []);
