export type QuestionType = 'text' | 'choice' | 'rating' | 'boolean';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  options?: string[];
}