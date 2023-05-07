import { useState } from 'react';

const useForm = (init: Record<string, string | boolean>) => {
  const [state, setState] = useState(init);

  const handleChange = (e: React.FormEvent) => {
    const input = e.target;
    if (input instanceof HTMLInputElement) {
      setState({
        ...state,
        [input.name]: input.type === 'text' ? input.value : input.checked,
      });
    }

    if (input instanceof HTMLTextAreaElement) {
      setState({
        ...state,
        [input.name]: input.value,
      });
    }
  };

  return { state, handleChange, setState };
};

export default useForm;
