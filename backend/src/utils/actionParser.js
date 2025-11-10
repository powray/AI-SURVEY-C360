// Simple action parser: looks for a JSON code block containing {"actions": [...]}

function parseActionsFromText(text) {
  if (!text) return [];
  // Try to find a JSON block inside the assistant text
  const jsonBlockMatch = text.match(/```json([\s\S]*?)```/i) || text.match(/\{[\s\S]*\}/);
  if (!jsonBlockMatch) return [];

  let jsonText = jsonBlockMatch[1] || jsonBlockMatch[0];
  // Remove code fence markers if present
  jsonText = jsonText.replace(/^```json/i, '').replace(/```$/i, '').trim();

  try {
    const parsed = JSON.parse(jsonText);
    if (parsed && Array.isArray(parsed.actions)) return parsed.actions;
    return [];
  } catch (err) {
    console.error('Failed to parse JSON actions:', err.message);
    return [];
  }
}

module.exports = { parseActionsFromText };
