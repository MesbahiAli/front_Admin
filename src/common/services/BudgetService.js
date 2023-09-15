import { instance } from "../Axios";

export const BudgetApi = async (payload) => {
  try {
    const response = await instance.get(`/budget/get/${payload}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    // Handle the error, you can log it for debugging purposes
    console.error('Error in BudgetApi:', error);

    // Rethrow the error so that it can be caught by the caller
    throw error;
  }
};
