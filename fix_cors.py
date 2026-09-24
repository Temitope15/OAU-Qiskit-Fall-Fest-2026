import re

with open("src/routes/register.tsx", "r") as f:
    content = f.read()

old_block = """      await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify({ type: formType, ...formData }),
        headers: { "Content-Type": "text/plain;charset=utf-8" } // Using text/plain avoids some CORS preflight issues with Google Apps Script
      });"""

new_block = """      // We MUST use mode: "no-cors" for Google Apps Script to prevent redirect CORS errors
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ type: formType, ...formData }),
        headers: { "Content-Type": "text/plain;charset=utf-8" }
      });"""

content = content.replace(old_block, new_block)

with open("src/routes/register.tsx", "w") as f:
    f.write(content)
