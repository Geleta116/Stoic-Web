import { api, emailPath } from "./shared";

export interface AddEmailResponse {
  success: boolean;
  message: string;
}

export const addEmail = async (email: string): Promise<AddEmailResponse> => {
  if (!validateEmail(email)) {
    throw new Error("Invalid email format");
  }

  try {
    const response = await fetch(`${api}/${emailPath}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ incomingEmail: email }),
    });

    if (!response.ok) {
      const errorResponse = await response.json(); 
      throw new Error(errorResponse.message || "Failed to add email");
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Email added successfully",
    };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
