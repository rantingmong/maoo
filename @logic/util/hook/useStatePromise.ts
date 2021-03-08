import { useState } from "react";

export default function useStatePromise<Value>(value: Value): [Value, (next: (oldValue: Value) => Promise<Value>) => void] {
  const [state, setState] = useState<Value>(value)

  const pendingSetState = function(next: (oldValue: Value) => Promise<Value>) {
    next(state).then((value: Value) => setState(value))
  }

  return [state, pendingSetState]
}
