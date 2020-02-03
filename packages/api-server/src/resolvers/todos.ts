import { delay, makeid } from "./util";
import { MutationResolvers, Todo } from "../generated/models";

const list = [] as Todo[];

export const todos = async () => {
  delay(1000);
  return list;
};

export const createTodo: MutationResolvers["createTodo"] = async (_, { todo }) => {
  await delay(1000);
  const id = makeid(10);
  const newItem = { ...todo, id };
  list.push(newItem);
  return newItem;
};

export const deleteTodo: MutationResolvers["deleteTodo"] = async (_, { id }) => {
  await delay(1000);
  const itemIndex = list.findIndex(todo => todo.id === id);

  if (itemIndex > -1) {
    const deletedItem = list.splice(itemIndex, 1)[0];
    return deletedItem;
  }
  throw new Error("Could not delete the todo.");
};

export const updateTodo: MutationResolvers["updateTodo"] = async (_, { todo, id }) => {
  await delay(1000);

  const itemIndex = list.findIndex(t => t.id === id);

  if (itemIndex === -1) {
    throw new Error("Could not find the todo to update.");
  }
  const newTodo = { ...list[itemIndex], ...todo };

  list[itemIndex] = newTodo;

  return newTodo;
};
