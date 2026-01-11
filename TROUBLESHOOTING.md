# Troubleshooting Gemini AI Chatbot

## Issue: "I'm currently unable to connect to my AI service"

### Solution 1: Restart the Dev Server
The most common issue is that the dev server needs to be restarted after adding/changing the `.env` file:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

**Important:** Vite only loads `.env` files when the dev server starts. If you added or changed the API key, you MUST restart the server.

### Solution 2: Verify API Key in .env File
Check that your `.env` file in the `cybersafe` directory contains:

```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important Notes:**
- No quotes around the key
- No spaces before or after the `=`
- The key should be at least 20 characters long
- Make sure there's no trailing whitespace

### Solution 3: Get a Valid Gemini API Key
1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key
5. Add it to your `.env` file as `VITE_GEMINI_API_KEY=your_key_here`
6. **Restart the dev server**

### Solution 4: Check Browser Console
Open your browser's Developer Tools (F12) and check the Console tab for error messages. Look for:
- `Gemini API Key check: Found` or `Not found`
- `Gemini AI initialized successfully`
- Any API error messages

### Solution 5: Verify .env File Location
The `.env` file must be in the `cybersafe` directory (same level as `package.json`):

```
cybersafe/
├── .env          ← Must be here
├── package.json
├── vite.config.ts
└── src/
```

### Solution 6: Check API Key Format
The API key should look like a long string of characters. Example format:
```
VITE_GEMINI_API_KEY=AIzaSyAbCdEf1234567890GhIjKlMnOpQrStUvWxYz
```

### Solution 7: Network Issues
If you see network errors:
- Check your internet connection
- Verify firewall isn't blocking requests
- Try a different network

### Still Not Working?
1. Check the browser console for specific error messages
2. Verify the API key is valid by testing it at: https://aistudio.google.com/app/apikey
3. Make sure you're not exceeding API quotas
4. Try generating a new API key

## Testing the API Key
After restarting the server, you should see in the browser console:
```
Gemini API Key check: Found (length: XX)
Gemini AI initialized successfully
```

If you see these messages, the API key is loaded correctly.
