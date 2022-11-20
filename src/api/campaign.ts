import { COMPETITORS_API_ERROR_DEFAULT } from '../config/constants';
import { ApiResponse } from '../types/apiResponse';
import { CompetitorType } from '../types/campaign';

const API_URL = process.env.REACT_APP_API || '';
// Please note that this is not used in the assignment
// it was added to show the real api implementation
const getCompetitors = async (): Promise<ApiResponse<CompetitorType[]>> => {
  return await fetch(API_URL)
    .then((response) => response.json())
    .then((result) => {
      const status: 'SUCCESS' | 'FAIL' = 'SUCCESS';
      return {
        status: status,
        errorMessage: '',
        data: result as CompetitorType[],
      };
    })
    .catch((error) => {
      const status: 'SUCCESS' | 'FAIL' = 'FAIL';
      return {
        status: status,
        errorMessage: error?.message || COMPETITORS_API_ERROR_DEFAULT,
      };
    });
};

export { getCompetitors };
