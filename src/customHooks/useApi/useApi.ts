import { useCallback } from "react";
import { loadToDoListActionCreator } from "../../app/features/toDoListSlice.ts/toDoListSlice";
import { useAppDispatch } from "../../app/hooks";
import listItem from "../../types";

const useAPI = () => {
  const dispatch = useAppDispatch();

  const loadToDoList = useCallback(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_VARIABLE!);
      const data = await response.json();

      dispatch(loadToDoListActionCreator(data));
    })();
  }, [dispatch]);

  const addToDoList = useCallback(() => {
    const name = document.querySelector("input")?.value!;

    if (name === "") {
      return;
    }

    const newToDo: listItem = {
      id: Date.now(),
      name: name,
      isDone: false,
    };

    (async () => {
      await fetch(process.env.REACT_APP_VARIABLE!, {
        method: "POST",
        body: JSON.stringify(newToDo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      loadToDoList();
    })();
  }, [loadToDoList]);

  const deleteToDo = useCallback(
    (id: number) => {
      (async () => {
        await fetch(`${process.env.REACT_APP_VARIABLE!}/${id}`, {
          method: "DELETE",
        });

        loadToDoList();
      })();
    },
    [loadToDoList]
  );

  const toggleToDo = useCallback(
    (toDo: listItem) => {
      (async () => {
        await fetch(`${process.env.REACT_APP_VARIABLE!}/${toDo.id}`, {
          method: "PUT",
          body: JSON.stringify({
            ...toDo,
            isDone: !toDo.isDone,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        loadToDoList();
      })();
    },
    [loadToDoList]
  );

  return { loadToDoList, addToDoList, deleteToDo, toggleToDo };
};

export default useAPI;
