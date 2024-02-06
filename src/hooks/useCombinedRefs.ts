import { MutableRefObject, RefCallback, useCallback } from "react";

type RefType<T> = MutableRefObject<T> | RefCallback<T> | null;

export function useCombinedRef<T>(...refs: RefType<T | null>[]): RefCallback<T> {
    return useCallback(instance => {
        refs.forEach(ref => {
            if (ref instanceof Function) {
                ref(instance);
            }
            else if (ref) {
                ref.current = instance;
            }
        });
    }, [...refs]);
}