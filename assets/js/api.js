// API Helper

async function apiGet(action) {

    try {

        const response = await fetch(
            `${CONFIG.API_URL}?action=${action}`
        );

        return await response.json();

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            message:
                "Gagal terhubung ke server"

        };

    }

}

async function apiPost(data) {

    try {

        const response = await fetch(

            CONFIG.API_URL,

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(data)

            }

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
