type ChatBody = {
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
  max_tokens?: number
  temperature?: number
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = (await readBody(event)) as ChatBody

  const mistralApiKey = config.mistralApiKey || process.env.MISTRAL_API_KEY
  const mistralModel = config.mistralModel || process.env.MISTRAL_MODEL || 'mistral-large-latest'

  if (!mistralApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'MISTRAL_API_KEY is not configured' })
  }

  if (!body?.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid request body' })
  }

  const response = await $fetch<{ choices: Array<{ message: { content: string } }> }>(
    'https://api.mistral.ai/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${mistralApiKey}`
      },
      body: {
        model: mistralModel,
        messages: body.messages,
        max_tokens: typeof body.max_tokens === 'number' ? body.max_tokens : 600,
        temperature: typeof body.temperature === 'number' ? body.temperature : 0.7
      }
    }
  )

  return { content: response.choices?.[0]?.message?.content ?? '' }
})

