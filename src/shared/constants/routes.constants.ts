// App routes
export const APP_ROUTES = {
  HOME: "/",
  DOCTORS: "/doctors",
  PROFILE_DOCTOR: "/profileDoctor/:id",
  PROFILE_CLINIC: "/profileClinic/:id",
};

// Function to generate specific profile routes with IDs
export const getProfileRoute = (role: "doctor" | "clinic", id: string) => {
  return role === "clinic"
    ? APP_ROUTES.PROFILE_CLINIC.replace(":id", id)
    : APP_ROUTES.PROFILE_DOCTOR.replace(":id", id);
};
