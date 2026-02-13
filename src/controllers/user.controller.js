import { getUserProfile, updateUserProfile } from "../services/user.service.js";

export const profile = async (req, res) => {

    const user = await getUserProfile(req.user.sub);
    
    res.status(200).json({
        status: "SUCCESS",
        data: user
    });
};

export const updateProfile = async (req, res) => {

    const updatedUser = await updateUserProfile(req.user.sub, req.body);
    
    res.status(200).json({
        status: "SUCCESS",
        data: updatedUser
    });
    
};

export const changePassword = async (req, res) => {

    const updatedUser = await changePasswordService(req.user.sub, req.body);

    res.status(200).json({
        status: "SUCCESS",
        data: updatedUser
    });
};