import { IBook } from "../../redux/Features/AddNewBook/Features";

export interface IBookResponse {
  data: {
    data: IBook;
  };
  message: string;
  success: boolean;
  statusCode: number;
}
export interface IBookErrorResponse {
  error: {
    data: {
      message: string;
      success: boolean;
      errorMessages: [];
    };
    status: number;
  };
}
