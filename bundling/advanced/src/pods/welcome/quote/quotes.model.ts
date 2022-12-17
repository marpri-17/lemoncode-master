export interface QuoteViewModel {
  quote: string;
  author: string;
}

export interface QuoteApiModel {
  quote: string;
  author: string;
  category: string;
}

export interface QuotesHook {
  quote: QuoteApiModel;
  category: "success" | "inspirational" | "famous" | "humor" | "imagination";
}
