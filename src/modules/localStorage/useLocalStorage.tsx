import React, { useState, useEffect } from 'react';

type ReturnType<T> = [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];

export const useLocalStorageCount = <T,>(key: string, initialValue?: T): ReturnType<T> => {
  const [counter, setCounter] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (counter) {
      try {
        localStorage.setItem(key, JSON.stringify(counter));
      } catch (err) {
        console.log(err);
      }
    }
  }, [counter]);
  return [counter, setCounter];
};
