import { useMutation } from 'react-query';

const useReactMutation = (apiFunc: (variables: any) => Promise<any>) =>
  useMutation(apiFunc);

export default useReactMutation;
