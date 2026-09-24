import re

with open("src/routes/register.tsx", "r") as f:
    content = f.read()

# I will replace the commented out fetch block with the actual fetch block.
old_block = """    // We will wire this up to Apps Script later
    // const scriptUrl = "YOUR_APPS_SCRIPT_URL_HERE";
    // try {
    //   await fetch(scriptUrl, {
    //     method: "POST",
    //     body: JSON.stringify({ type: formType, ...formData }),
    //     headers: { "Content-Type": "application/json" }
    //   });
    //   setIsSuccess(true);
    // } catch (error) {
    //   console.error("Error submitting form", error);
    // }

    // Fake submission for now
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);"""

new_block = """    const scriptUrl = "https://script.google.com/macros/s/AKfycbx9YPoJnJHp7Wug19Eb4Vp7cGPfcYOL0wV4hDX3hTKZ45Uepf4r2sjw7qM9pTUbmH9HvA/exec";
    
    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify({ type: formType, ...formData }),
        headers: { "Content-Type": "text/plain;charset=utf-8" } // Using text/plain avoids some CORS preflight issues with Google Apps Script
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong while submitting. Please try again.");
      setIsSubmitting(false);
    }"""

content = content.replace(old_block, new_block)

with open("src/routes/register.tsx", "w") as f:
    f.write(content)
