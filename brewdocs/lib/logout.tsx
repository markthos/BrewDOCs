import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    // Redirect the user to the login page
    window.location.href = "/login";
  }, []);

  return null; // This component doesn't render anything, it just handles logout logic
}
