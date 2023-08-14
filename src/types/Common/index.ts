import { IBook } from "..";

export interface IUser {
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  id?: string;
}

export interface ILoginResponse {
  data: {
    accessToken: string;
  };
  success: boolean;
  message: string;
  statusCode: number;
}
export interface IErrorResponse {
  data: {
    errorMessages: [
      {
        path: string;
        message: string;
      }
    ];
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
}

export interface IReview {
  name?: string;
  email?: string;
  message?: string;
}

export type IWhitelist = {
  email: string;
  data: IBook;
};
export interface IWhitelistResponse {
  data: [
    {
      email: string;
      data: [IBook];
    }
  ];
  message: string;
  success: boolean;
  statusCode: number;
}
