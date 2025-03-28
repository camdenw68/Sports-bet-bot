import openai
import os

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

def get_chatgpt_response(prompt):
    try:
        # Use the correct method for chat models (v1/chat/completions)
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",  # You can also use "gpt-4" if you have access
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=150,
            temperature=0.7,
        )
        
        # Correctly access the content of the message
        return response.choices[0].message.content.strip()

    except Exception as e:
        return f"Error: {e}"

# Get the prompt from the user
prompt = input("Enter your prompt: ")

# Get response from GPT
result = get_chatgpt_response(prompt)
print(result)
