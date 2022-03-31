type TQuestion = {
  id: number;
  title: string;
  content: string;
};

type TTopics = {
  id: number;
  title: string;
  questions: TQuestion[];
};

export interface IData {
  topics: TTopics[];
}
