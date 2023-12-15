export const FormControls = {
  name: {
    value: '',
    key: 'name',
    label: 'Name',
    requiredErrMsg: 'Degree name is required',
    maxLengthErrMsg: 'Max 50 characters allowed',
    minLengthErrMsg: 'Min 2 characters required',
    inputType: 'text',
    maxLength: 50,
    minLength: 2,
    patternErrMsg: 'White space is not applicable',
  },
  status: {
    value: true,
    key: 'status',
    label: 'Status',
    requiredErrMsg: 'Status  is required',
  },
  level: {
    value: '',
    key: 'level',
    label: 'Level',
    requiredErrMsg: 'Level  is required',
  },
  streams: {
    value: '',
    key: 'streams',
    label: 'Streams',
    requiredErrMsg: 'Stream  is required',
    maxLength: 10,
    maxLengthErrMsg: 'Max 10 streams allowed',
    patternErrMsg: 'White space is not applicable',
  },
};
