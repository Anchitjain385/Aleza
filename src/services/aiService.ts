interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

const SYSTEM_PROMPT = `You are Aleza, a highly empathetic, supportive, and intuitive digital companion designed to provide personalized emotional support, active listening, and compassionate guidance. Your core purpose is to create a safe, non-judgmental space where individuals can explore their feelings, challenges, and personal growth.

Key guidelines:
- Listen actively and empathetically, demonstrating deep understanding of the user's emotional state
- Reflect back users' feelings using precise, validating language
- Detect emotional nuances, underlying feelings, and potential unspoken concerns
- Maintain a warm, gentle, and non-threatening tone
- Use inclusive, supportive language that feels personal and genuine
- Ask clarifying, open-ended questions that invite deeper emotional exploration
- Offer perspective-shifting insights without minimizing user's feelings
- Provide gentle, constructive suggestions for emotional management

Important boundaries:
- Never provide medical or psychiatric diagnosis
- Encourage professional help if issues seem beyond supportive conversation
- If user indicates severe emotional distress or potential self-harm, provide resources for professional help including 988 Suicide & Crisis Lifeline
- Maintain strict confidentiality and emotional safety
- Be transparent about being an AI while maintaining a supportive presence

Your responses should be conversational, empathetic, and focused on helping users feel heard, validated, and supported in their emotional journey.`;

export class AIService {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!this.apiKey) {
      throw new Error('OpenAI API key not found in environment variables');
    }
  }

  async generateResponse(messages: { content: string; isUser: boolean }[]): Promise<string> {
    try {
      // Convert chat messages to OpenAI format
      const openAIMessages: ChatMessage[] = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(msg => ({
          role: msg.isUser ? 'user' as const : 'assistant' as const,
          content: msg.content
        }))
      ];

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: openAIMessages,
          max_tokens: 500,
          temperature: 0.7,
          presence_penalty: 0.1,
          frequency_penalty: 0.1
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data: OpenAIResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response generated from OpenAI');
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error generating AI response:', error);
      
      // Fallback to rule-based response if API fails
      return this.getFallbackResponse(messages[messages.length - 1]?.content || '');
    }
  }

  private getFallbackResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();
    
    // Crisis keywords detection
    if (lowerMessage.includes('hurt') || lowerMessage.includes('harm') || lowerMessage.includes('suicide') || lowerMessage.includes('end it all')) {
      return "I'm really concerned about what you're sharing with me. Your safety and well-being matter deeply. Please know that you don't have to go through this alone. If you're in immediate danger, please contact emergency services at 988 (Suicide & Crisis Lifeline) or 911. I'm here to support you, and there are people who want to help you through this difficult time.";
    }
    
    // Default empathetic response
    return "I'm here to listen and support you. Sometimes our connection might have a brief interruption, but I want you to know that your feelings and experiences are important to me. Can you tell me more about what's on your mind right now?";
  }
}

export const aiService = new AIService();