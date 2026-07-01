// Authentication Helper

async function login(
    username,
    password
) {

    const result =
        await apiPost({

            action:
                "login",

            username:
                username,

            password:
                password

        });

    if (result.success) {

        localStorage.setItem(

            "terasTeaUser",

            JSON.stringify(
                result.user
            )

        );

    }

    return result;

}

function getCurrentUser() {

    return JSON.parse(

        localStorage.getItem(
            "TerasTeaUser"
        )

    );

}

function isLoggedIn() {

    return getCurrentUser() !== null;

}

function logout() {

    localStorage.removeItem(
        "TerasTeaUser"
    );

    window.location.href =
        "pages/login.html";

}

function requireLogin() {

    if (!isLoggedIn()) {

        window.location.href =
            "pages/login.html";

    }

}

function requireRole(
    allowedRoles
) {

    const user =
        getCurrentUser();

    if (!user) {

        window.location.href =
            "login.html";

        return;

    }

    if (
        !allowedRoles.includes(
            user.role
        )
    ) {

        alert(
            "Anda tidak memiliki akses"
        );

        window.location.href =
            "../dashboard.html";

    }

}
