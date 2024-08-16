import React, { useEffect, useState } from "react";

export default function WithLoader(Element: React.ElementType) {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Hello World!");
      clearTimeout(timer);
    }, 3000);
  }, []);

  if (!message) {
    return <div>Loading...</div>;
  }
  return <Element message={message} />;
}
