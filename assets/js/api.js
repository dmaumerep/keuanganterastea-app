// API Helper

async function apiGet(action) {

    try {

        const response = await fetch(
            `${CONFIG.API_URL}?action=${action}`
        );

        return await response.json();

    }

    catch (error) {
    
        console.error(
            "API ERROR:",
            error
        );
    
        return {
    
            success: false,
    
            message:
                error.message
    
        };
    
    }

}

async function apiPost(data) {

    try {

        console.log("API URL:", CONFIG.API_URL);
        console.log("Request Data:", data);

        const response = await fetch(
            CONFIG.API_URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        console.log("Response Status:", response.status);

        const result = await response.json();

        console.log("Response:", result);

        return result;

    }
    catch (error) {

        console.error("FETCH ERROR:", error);

        return {
            success: false,
            message: error.message
        };

    }

}
