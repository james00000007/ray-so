export type Model =
  | "openai-gpt-4"
  | "openai-gpt-4-turbo"
  | "openai-gpt-4o"
  | "openai-gpt-4o-mini"
  | "anthropic-claude-haiku"
  | "anthropic-claude-opus"
  | "anthropic-claude-sonnet"
  | "perplexity-llama-3-sonar-large-32k-online"
  | "perplexity-llama-3-sonar-small-32k-online"
  | "groq-llama-3.1-70b-versatile"
  | "groq-llama-3.1-8b-instant"
  | "groq-llama3-70b-8192"
  | "groq-mixtral-8x7b-32768";

export type AiModel = {
  id: Model;
  name: string;
  description: string;
  availability: "public" | "beta" | "internal" | "deprecated";
  features: string[];
  suggestions: string[];
  abilities: {
    image_generation: {
      model: string;
    };
    web_search: {
      toggleable: boolean;
    };
  };
  in_better_ai_subscription: boolean;
  model: string;
  provider: string;
  provider_name: string;
  provider_brand: string;
  speed: number;
  intelligence: number;
  requires_better_ai: boolean;
  context: number;
};

export async function getAvailableAiModels() {
  const res = await fetch("https://raycast.com/api/v1/ai/models");
  const models = await res.json();
  return models.models as AiModel[];
}