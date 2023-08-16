import { debounce } from 'lodash';
import { useRef, useState, useCallback, MutableRefObject } from 'react';

const useInputSearch = () => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [keyword, setKeyword] = useState('');
  const setSearchValue = useRef(debounce(setKeyword, 600));

  const onChangeText = useCallback(({ target }: { target: { value: string } }) => {
    setSearchValue.current(target.value);
  }, []);
  const onClear = useCallback(() => {
    setKeyword('');
    inputRef.current.value = '';
  }, []);
  const clearInput = useCallback(() => {
    onClear();
    inputRef?.current.focus();
  }, [onClear]);

  return {
    keyword,
    onChangeText,
    clearInput,
    inputRef,
  };
};
export default useInputSearch;
