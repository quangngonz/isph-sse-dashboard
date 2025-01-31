import {Session} from "../../SessionContext";


const api_url = "https://isph-sse.vercel.app/admin/edit-user-data"

export const handleUserEdit = async (formData: userFromData, session: Session | null, authToken: string | undefined) => {
    if (!session) {
        return {error: 'User is not authenticated'};
    }

    const body = {
        userId: session.user.userId,
        userData: formData
    }

    console.log("Edit User Data:", body);
    console.log("Auth Token:", authToken);

    const response = await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, // Include the Firebase token
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error("Failed to edit user data");
    }

    return await response.text();
};

export type userFromData = {
    user_id: string;
    username: string;
    role: string;
    house: string;
};

export default handleUserEdit;
