import * as yup from 'yup';

export const validation = () => {
  return yup.object().shape({
    type: yup.string().required('required'),
    fuelUsage: yup.string().required('required'),
  });
};
