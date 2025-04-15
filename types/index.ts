// Base types
export type User = {
  id: string;
  clerkId: string;
  createdAt: Date;
  updatedAt: Date;
  email: string; // If you want to store email from Clerk
};

export type Survey = {
  id: string;
  title: string;
  description?: string;
  status: 'draft' | 'published' | 'closed';
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
};

export type QuestionType = 
  | 'text'
  | 'long_text'
  | 'number'
  | 'email'
  | 'multiple_choice'
  | 'single_choice'
  | 'dropdown'
  | 'rating'
  | 'boolean'
  | 'linear_scale';

export type QuestionOptions = {

}
export type Question = {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[]; // Use a more specific type if preferred
  required: boolean;
  surveyId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Response = {
  id: string;
  surveyId: string;
  userId?: string;
  createdAt: Date;
};

export type Answer = {
  id: string;
  questionId: string;
  responseId: string;
  content: any; // Use a more specific type based on your needs
  createdAt: Date;
};

// Types with relations
export type SurveyWithQuestions = Survey & {
  questions: Question[];
  createdBy: User;
};

export type ResponseWithAnswers = Response & {
  answers: Answer[];
  user?: User;
};

export type QuestionWithOptions = Question & {
  options: string[]; // Example for multiple choice questions
};

// Create types for form submissions
export type CreateSurvey = {
  title: string;
  description?: string;
  questions: CreateQuestion[];
};

export type CreateQuestion = {
  text: string;
  type: QuestionType;
  options?: string[];
  required?: boolean;
};

export type SubmitResponse = {
  surveyId: string;
  answers: SubmitAnswer[];
};

export type SubmitAnswer = {
  questionId: string;
  content: string | string[] | number;
};

// API response types
export type ApiResponse<T> = {
  data?: T;
  error?: string;
  message?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};