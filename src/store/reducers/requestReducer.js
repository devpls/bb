import { typeParse } from '@app/utils/fetchHelper';
import { DONE, START, ERROR, DELETE } from '@app/constants';

const DEFAULT_OPTIONS = {
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
};

const computeState = (options) => {
  if (options?.initialState) {
    return {
      ...DEFAULT_OPTIONS.initialState,
      ...options.initialState,
    };
  }
  return DEFAULT_OPTIONS.initialState;
};

const validateNameSpace = (namespace) => {
  const regex = /^[A-Z-]+$/;
  return regex.test(namespace);
};

export const requestReducer = (namespace, options = DEFAULT_OPTIONS) => (
  state = computeState(options),
  action,
) => {
  const computedOptions = computeState(options);
  const namespaceIsValid = validateNameSpace(namespace);
  if (!namespaceIsValid) {
    throw new ReferenceError('namespace should contain only A-Z letters and -');
  }
  const { type, payload } = action;
  const { namespace: typeNameSpace, method, status } = typeParse(type);
  if (namespace !== typeNameSpace) {
    return state;
  }
  switch (status) {
    case ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case START:
      return {
        ...state,
        isLoading: true,
      };
    case DONE: {
      const data = method === DELETE ? computedOptions.data : payload;
      return {
        data,
        error: null,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
